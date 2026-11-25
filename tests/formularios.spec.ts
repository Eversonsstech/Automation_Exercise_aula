
import { test, expect } from '@playwright/test';


test('CT11 - Acessar formulário de contato', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();

    await expect(page.locator('[data-qa="name"]')).toBeVisible();

    await expect(page.locator('[data-qa="email"]')).toBeVisible();

    await expect(page.locator('[data-qa="subject"]')).toBeVisible();

    await expect(page.locator('[data-qa="message"]')).toBeVisible();

});


test('CT12 - Enviar mensagem pelo formulário', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await page.locator('[data-qa="name"]').fill('Usuario Teste');

    await page.locator('[data-qa="email"]').fill('teste.qa@example.com');

    await page.locator('[data-qa="subject"]').fill('Teste automatizado');

    await page.locator('[data-qa="message"]').fill('Mensagem enviada durante teste automatizado com Playwright.');

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.locator('[data-qa="submit-button"]').click();

    
    const mensagemSucesso = page.locator('#contact-page').getByText('Success! Your details have been submitted successfully');

    await expect(mensagemSucesso).toBeVisible();
});

