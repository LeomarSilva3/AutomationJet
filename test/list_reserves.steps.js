import { defineFeature, loadFeature } from 'jest-cucumber';
import ListReservesPage from '../pages/list_reserve_page';

const feature = loadFeature("./feature/list_reserve.feature");

jest.setTimeout(80000);

defineFeature(feature, test => {

    let page;
    let reservesPage;

    beforeEach(async() => {
        page = await global.__BROWSER__.newPage();
        reservesPage = new ListReservesPage(page);
        await reservesPage.insertUrl("https://triadproject.herokuapp.com/login.php");
        await reservesPage.DataForLogin();
        await reservesPage.button();
        await page.waitFor(6000);
        await reservesPage.userAuthenticated();

    });


    test('Performs a reserves office rooms as success', async({ given, when, then }) => {

        given(/^insert a office room "(.*)"$/, async(text) => {

            await reservesPage.insertValueInput(text);
        });

    });

    afterEach(async() => {
        page.close();
    })


});