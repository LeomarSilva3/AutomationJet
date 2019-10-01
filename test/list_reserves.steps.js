import { defineFeature, loadFeature } from 'jest-cucumber';
import ListReservesPage from '../pages/list_reserve_page';
import { Init, Succeslogin } from './login.steps'

const feature = loadFeature("./feature/list_reserve.feature");

jest.setTimeout(80000);


defineFeature(feature, test => {

    let page;
    let reservesPage;


    beforeEach(async() => {
        page = await global.__BROWSER__.newPage();
        reservesPage = new ListReservesPage(page);


    });


    test('Performs a reserves office rooms as success', async({ given, when, then }) => {

        given(/^insert a office room "(.*)"$/, async(text) => {
            await reservesPage.insertUrl("https://triadproject.herokuapp.com/login.php");
            await reservesPage.Data(email, password);
            await reservesPage.button();
            await reservesPage.insertValueInput(text);
        });


    });

});