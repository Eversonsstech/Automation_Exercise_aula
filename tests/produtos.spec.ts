
import { test, expect } from '@playwright/test';

test('CT04 - Pesquisar produto', async ({ page }) => {
    
    await page.goto('https://automationexercise.com/products');

    await page.locator('#search_product').fill('Blue Top');

    await page.locator('#submit_search').click();

    await expect(page.getByText('Searched Products')).toBeVisible();

    await expect(page.getByText('Blue Top', { exact: true }).first()).toBeVisible();
});


test('CT05 - Visualizar detalhes do produto', async ({ page }) => {

    await page.route(/(doubleclick\.net|googlesyndication\.com|googleadservices\.com)/,route => route.abort());

    await page.goto('https://automationexercise.com/products');

    const visualizarProduto = page.locator('a[href="/product_details/1"]');

    await expect(visualizarProduto).toBeVisible();

    await visualizarProduto.click();

    await expect(page).toHaveURL(/product_details\/1/);

    await expect(page.getByText('Blue Top', { exact: true }).first()).toBeVisible();

});


test('CT06 - Verificar catálogo de produtos', async ({ page }) => {
    
    await page.goto('https://automationexercise.com/products');

    const produtos = page.locator('.product-image-wrapper');

    await expect(produtos.first()).toBeVisible();

    expect(await produtos.count()).toBeGreaterThan(0);
});
