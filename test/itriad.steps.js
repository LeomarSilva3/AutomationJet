import { defineFeature, loadFeature } from 'jest-cucumber';
import LoginPage from '../pages/login_page';
const feature = loadFeature("./feature/login.feature");

defineFeature(feature, test => {
    let page;
    let loginPage;

    test('Login with success', ({ given, when, then }) => {
        given('that view page Project Triad', async() => {

            page = await global.__BROWSER__.newPage();
            loginPage = new LoginPage(page);
            await loginPage.openLoginPage();
        });

        when(/^insert email (.*)$/, async(arg0) => {

        });

        then('view my authentication with success', async() => {

        });
    });


    test('login invalid', ({ given, when, then }) => {
        given('that view page Project Triad', async() => {

        });

        when(/^insert email (.*)$/, async(arg0) => {

        });

        then(/^view Error message (.*)$/, async(arg0) => {

        });
    });


}, 5000);