import BasePage from '../core/base_page';


export default class ListReservesPage extends BasePage {
    constructor(page) {
        super(page);
    };

    async insertUrl(url) {
        await super.openPage(url);
    }

    async DataForLogin() {
        await super.typeInput('input[placeholder="Entre com seu E-mail"', 'admin@gmail.com');
        await super.typeInput('#login_pass', '123456');

    }

    async button() {
        await super.button('#form-login button');
    }

    async userAuthenticated() {
        await super.verifyText('.user-details div', " Olá Administrador ");
    }

    async insertValueInput(text) {

        await super.typeInput('input', text);
    }

}