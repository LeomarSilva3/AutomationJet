import { defineFeature, loadFeature } from 'jest-cucumber';
import ListReservesPage from '../pages/list_reserve_page';
//import { loginsuccess } from '../../steps_helper/login/login_success';
import LoginPage from '../pages/login_page';
const feature = loadFeature('./feature/list_reserve.feature', {
    tagFilter: '@reserves  and not @login'
});

jest.setTimeout(80000);

defineFeature(feature, test => {
    let page;
    let reservesPage;
    let loginPage;



    beforeEach(async() => {
        page = await global.__BROWSER__.newPage();
        loginPage = new LoginPage(page);
        reservesPage = new ListReservesPage(page);


    })

    // const loginsuccess = async(given, when, then) => {
    //     given(/^that view url "(.*)"$/, async(url) => {
    //         console.log("Godzilla", url)
    //         await loginPage.openLoginPage(url);

    //     });

    //     when(/^insert email "(.*)" and password "(.*)"$/, async(email, password) => {
    //         await loginPage.insertDataLogin(email, password)
    //         await loginPage.clickButton();
    //         await page.waitFor(2000);
    //     });

    //     then('view my authentication with success', async() => {
    //         await loginPage.verifyUserAuthenticated()
    //     });

    // };

    test('Performs a reserves office rooms as success', async({ given, when }) => {


        given(/^insert a office room "(.*)"$/, async(text) => {

            await reservesPage.insertValueInput(text);
        });

        then('view the office room in the list', async() => {

        });
    });

});