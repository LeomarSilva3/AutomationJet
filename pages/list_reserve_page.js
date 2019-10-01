import BasePage from '../core/base_page';
import LoginPage from '../pages/login_page';


export default class ListReservesPage extends BasePage {
    constructor(page) {
        super(page);
    };

    async insertUrl(url) {
        await super.openPage(url);
    }

    async Data(email, password) {
        await super.typeInput('input[placeholder="Entre com seu E-mail"', 'admin@gmail.com');
        await super.typeInput('#login_pass', '123456');

    }

    async button() {

        await super.button('#form-login button')

    }

    async insertValueInput(text) {

        await super.typeInput('.dataTables_filter input', text)
    }

}