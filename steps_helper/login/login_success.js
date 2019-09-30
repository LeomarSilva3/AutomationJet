export const loginsuccess = (given, when, then) => {
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

}