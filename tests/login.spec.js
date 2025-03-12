// tests/login.spec.js
const { test } = require('@playwright/test');

test('automate login', async ({ page }) => {
    await page.goto('https://app.tangerino.com.br/Tangerino/?wicket:interface=:6:body:loginForm:baterPontoFuncionario::ILinkListener::');

    await page.getByRole('link', { name: 'Registrar Ponto' }).click();

    await page.getByRole('textbox', { name: 'Código do Empregador *' }).fill('WWWW');

    await page.getByRole('textbox', { name: 'PIN *' }).fill('1234');

    await page.getByRole('button', { name: 'Registrar' }).click();

    await expect(page.locator('#toast-container')).toBeVisible({ timeout: 5000 });

});
