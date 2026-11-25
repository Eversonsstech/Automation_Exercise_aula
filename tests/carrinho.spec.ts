
import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/products');
});

test.afterEach(async ({}, testInfo) => {
    console.log(`Teste finalizado: ${testInfo.title}`);
    console.log(`Resultado: ${testInfo.status}`);
});

test('CT07 - Adicionar produto ao carrinho', async ({ page }) => {

    const primeiroProduto = page.locator('.product-image-wrapper').first();

    await expect(primeiroProduto).toBeVisible();

    await primeiroProduto.hover();

    await primeiroProduto.locator('.add-to-cart').first().click();

    const modal = page.locator('#cartModal');

    await expect(modal).toBeVisible({ timeout: 10000 });

    await expect(modal.getByText('Added!', { exact: true })).toBeVisible({ timeout: 10000 });
});

test('CT08 - Visualizar produto no carrinho', async ({ page }) => {

    const primeiroProduto = page.locator('.product-image-wrapper').first();

    await primeiroProduto.hover();

    await primeiroProduto.locator('.add-to-cart').first().click();

    const modal = page.locator('#cartModal');

    await expect(modal).toBeVisible({ timeout: 10000 });

    await expect(modal.getByText('Added!', { exact: true })).toBeVisible({ timeout: 10000 });

    await modal.getByRole('link', { name: 'View Cart' }).click();

    await expect(page).toHaveURL(/view_cart/);

    await expect(page.getByText('Blue Top', { exact: true })).toBeVisible();
});

test('CT09 - Remover produto do carrinho', async ({ page }) => {

    const primeiroProduto = page.locator('.product-image-wrapper').first();

    await primeiroProduto.hover();

    await primeiroProduto.locator('.add-to-cart').first().click();

    const modal = page.locator('#cartModal');

    await expect(modal).toBeVisible({ timeout: 10000 });

    await expect(modal.getByText('Added!', { exact: true })).toBeVisible({ timeout: 10000 });

    await modal.getByRole('link', { name: 'View Cart' }).click();

    await expect(page).toHaveURL(/view_cart/);

    await page.locator('.cart_quantity_delete').first().click();

    await expect(page.getByText(/Cart is empty/i)).toBeVisible({ timeout: 10000 });
});

test('CT10 - Verificar quantidade no carrinho', async ({ page }) => {

    const primeiroProduto = page.locator('.product-image-wrapper').first();

    await primeiroProduto.hover();

    await primeiroProduto.locator('.add-to-cart').first().click();

    const modal = page.locator('#cartModal');

    await expect(modal).toBeVisible({ timeout: 10000 });

    await expect(modal.getByText('Added!', { exact: true })).toBeVisible({ timeout: 10000 });

    await modal.getByRole('link', { name: 'View Cart' }).click();

    await expect(page).toHaveURL(/view_cart/);

    await expect(page.locator('.cart_quantity')).toContainText('1');
});
