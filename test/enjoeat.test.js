const timeout = 9000;

describe('(Home Page)', () => {
        let page;

        options = {
            visible: true,
            timeout: 5000,
        }

        beforeAll(async() => {
            page = await global.__BROWSER__.newPage();
            await page.goto('http://enjoeat-sp4.herokuapp.com/');
        }, timeout);

        it('realizar o login', async() => {
            await expect(page.title()).resolves.toMatch('Enjoeat | Angular');
            await page.click('a[href="/restaurants"]');
            var searchElement = await page.waitForSelector('.fa-search', options);
            await searchElement.click();

        });

    },
    timeout,
);