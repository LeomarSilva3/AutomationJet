import BasePage from '../core/base_page';

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    };

    async openLoginPage(url) {
        await super.openPage(url)
    }

    async verifyPage() {
        await super.titlePage('Projeto TRIAD')
    }

    async insertDataLogin(email, password) {
        await super.typeInput('input[placeholder="Entre com seu E-mail"]', email)
        await super.typeInput('#login_pass', password)
    }

    async clickButton() {
        await super.button('#form-login button')
    }

    async verifyUserAuthenticated() {
        await super.verifyText('.user-details div', " Olá Administrador ");
    }

    async verifyAlertMessage() {
        var textos = ['E-mail: não informado.', 'Senha: não informada.']
        await super.verifyAllTexts('.alert-error div span', textos);
    }

    async insertEmailInvalid(email, password) {
        await super.typeInput('input[placeholder="Entre com seu E-mail"]', email)
        await super.typeInput('#login_pass', password)
    }

    async verifyMessageEmailinvalid(textos) {

        await super.verifyText('.alert-error div span', textos);
    }



}