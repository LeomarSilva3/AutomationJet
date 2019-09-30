import { defineFeature, loadFeature } from 'jest-cucumber';
import LoginPage from '../pages/login_page';
import ListReservesPage from '../pages/list_reserve_page';

// const feature = loadFeature("./feature/login.feature");

const feature = loadFeature('./feature/login.feature', {
    tagFilter: '@loginSucess or @loginInvalid'
});

jest.setTimeout(80000);




defineFeature(feature, test => {
    let page;
    let loginPage;
    let reservesPage;

    beforeEach(async() => {
        page = await global.__BROWSER__.newPage();
        loginPage = new LoginPage(page);
        reservesPage = new ListReservesPage(page);
    })



    test('Login with success', async({ given, when, then }) => {
        given(/^that view url "(.*)"$/, async(url) => {
            await loginPage.openLoginPage(url);

        });

        when(/^insert email "(.*)" and password "(.*)"$/, async(email, password) => {
            await loginPage.insertDataLogin(email, password)
            await loginPage.clickButton();
            await page.waitFor(2000);
        });

        then('view my authentication with success', async() => {
            await loginPage.verifyUserAuthenticated()
        });
    });

    test('login invalid', async({ given, when, then }) => {
        given(/^that view url "(.*)"$/, async(url) => {
            await loginPage.openLoginPage(url);
        });

        when(/^insert email "(.*)" and password "(.*)"$/, async(email, password) => {

            await loginPage.insertEmailInvalid(email, password);
            await loginPage.clickButton();
            await page.waitFor(2000);
        });

        then(/^view Error message "(.*)"$/, async(message) => {
            await loginPage.verifyMessageEmailinvalid(message);

        });
    });

    afterEach(async() => {
        page.close();
    })

});