export const ThatViewUrl = given => {
    given(/^that view url "(.*)"$/, async(url) => {
        await loginPage.openLoginPage(url);

    });
};

export const Insertdata = when => {
    when(/^insert email "(.*)" and password "(.*)"$/, async(email, password) => {
        await loginPage.insertDataLogin(email, password)
        await loginPage.clickButton();
        await page.waitFor(2000);
    });
};

export const ViewMyAuthentication = then => {
    then('view my authentication with success', async() => {
        await loginPage.verifyUserAuthenticated()
    });
};