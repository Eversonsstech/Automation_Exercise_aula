
import { test, expect } from '@playwright/test';

test('CT01 - Acessar página inicial', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    await expect(page).toHaveTitle(/Automation Exercise/);

});

test('CT02 - Verificar elementos da página inicial', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    await expect(page.getByRole('link', { name: 'Home' }).first()).toBeVisible();

    await expect(page.getByRole('link', { name: 'Products' }).first()).toBeVisible();

    await expect(page.getByRole('link', { name: 'Cart' }).first()).toBeVisible();

    await expect(page.getByRole('link', { name: /Signup \/ Login/i }).first()).toBeVisible();

});

test('CT03 - Acessar página de produtos', async ({ page }) => {

    await page.goto('https://automationexercise.com/products');

    await expect(page).toHaveURL(/products/);

    await expect(page.getByText('All Products', { exact: true })).toBeVisible();

});

