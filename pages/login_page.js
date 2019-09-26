import BasePage from '../core/base_page';

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    };

    async openLoginPage() {
        await super.openPage('https://triadproject.herokuapp.com/login.php')
    }

    async verifyPage() {
        await super.titlePage('Projeto TRIAD')
    }

    async insertDataLogin() {
        await super.typeInput('input[placeholder="Entre com seu E-mail"]', 'admin@gmail.com')
        await super.typeInput('#login_pass', '123456')
    }

    async clickButton() {
        await super.button('#form-login button')
    }

    async verifyUserAuthenticated() {
        await super.verifyText('.user-details', 'Olá Administrador');
    }

    async verifyAlertMessage() {
        var textos = ['E-mail: não informado.', 'Senha: não informada.']
        await super.verifyAllTexts('.alert-error div span', textos);
    }

    async insertEmailInvalid() {
        await super.typeInput('input[placeholder="Entre com seu E-mail"]', 'user.com')
        await super.typeInput('#login_pass', '123456')
    }

    async verifyMessageEmailinvalid() {
        var textos = ['E-mail: Inválido.']
        await super.verifyAllTexts('.alert-error div span', textos);
    }



}