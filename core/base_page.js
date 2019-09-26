export default class BasePage {

    options = {
        timeout: 5000,
        visible: true,

    }

    constructor(page) {
        this.page = page;
    }

    async openPage(url) {
        await this.page.goto(url);
    }

    async titlePage(titulo) {
        await expect(this.page.title()).resolves.toMatch(titulo)
    }

    async typeInput(locator, text) {
        await this.page.type(locator, text);
    }

    async button(locator) {
        await this.page.click(locator);
    }

    async verifyText(locator, text) {
        var elemento = await this.page.waitForSelector(locator, this.options);
        var texto = await this.page.evaluate((element) => element.textContent, elemento);
        expect(texto).toContain(text);
    }

    async verifyAllTexts(locator, textos) {
        const elementos = await this.page.$$(locator);
        var i = 0;
        for (const elemento of elementos) {
            var text = await this.page.evaluate(el => el.innerText, elemento);
            expect(textos[i]).toContain(text);
            i++;
        }

    }

}