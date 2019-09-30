import BasePage from '../core/base_page';

export default class ListReservesPage extends BasePage {
    constructor(page) {
        super(page);
    };

    async insertValueInput(text) {
        await super.typeInput('.dataTables_filter input', text)
    }

}