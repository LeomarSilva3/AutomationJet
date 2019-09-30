import { defineFeature, loadFeature } from 'jest-cucumber';
import LoginPage from '../pages/login_page';
const feature = loadFeature("./feature/login.feature");


jest.setTimeout(80000);


defineFeature(feature, test => {
    let page;
    let loginPage;

    beforeEach(async() => {
        page = await global.__BROWSER__.newPage();
        loginPage = new LoginPage(page);

    });


    test('Login with success', async({ given, when, then }) => {
        Succeslogin(given, when, then);
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