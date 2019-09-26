import LoginPage from '../pages/login_page';

const timeout = 20000;

describe('Reservas de salas', () => {
    let page;
    let loginPage;


    beforeAll(async() => {
        page = await global.__BROWSER__.newPage();
        loginPage = new LoginPage(page);

    });

    beforeEach(async() => {
        await loginPage.openLoginPage();
    });


    it('login performs', async() => {
        await loginPage.verifyPage();
        await loginPage.insertDataLogin();
        await loginPage.clickButton();

        await loginPage.verifyUserAuthenticated();

    }, timeout);

    it('login with email and password in blank', async() => {
        await loginPage.verifyPage();
        await loginPage.clickButton();
        await page.waitFor(2000);
        await loginPage.verifyAlertMessage();

    }, timeout);

    it('login with email invalid', async() => {
        await loginPage.verifyPage();
        await loginPage.insertEmailInvalid();
        await loginPage.clickButton();
        await page.waitFor(2000);
        await loginPage.verifyMessageEmailinvalid();

    }, timeout);


}, timeout);