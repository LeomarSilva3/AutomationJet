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

    })


    test('Performs a reserves office rooms as success', ({ given, then }) => {

        given(/^insert a office room "(.*)"$/, async(text) => {

            await reservesPage.insertValueInput(text);
        });

        then('view the office room in the list', async() => {

        });
    });

});