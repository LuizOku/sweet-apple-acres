import { test, expect } from "@playwright/test";

test("should add a product to the cart", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("css=[data-test-id='product-card-1']");
  await page.locator('button:text("Add to Cart")').click();
  await page.click("css=[data-test-id='cart-icon-button']");
  await expect(page).toHaveURL("http://localhost:3000/cart");
  await expect(page.locator("css=[data-test-id='cart-card-0']")).toBeVisible();
});

test("should remove a product from the cart", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("css=[data-test-id='product-card-1']");
  await page.locator('button:text("Add to Cart")').click();
  await page.click("css=[data-test-id='cart-icon-button']");
  await expect(page).toHaveURL("http://localhost:3000/cart");
  await page.locator("css=[data-test-id='cart-card-0-remove']").click();
  await expect(
    page.locator("css=[data-test-id='cart-card-0']")
  ).not.toBeVisible();
});

test("should increase and decrease the quantity of a product", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.click("css=[data-test-id='product-card-1']");
  await page.locator('button:text("Add to Cart")').click();
  await page.click("css=[data-test-id='cart-icon-button']");
  await expect(page).toHaveURL("http://localhost:3000/cart");
  await page.locator("css=[data-test-id='cart-card-0-increase']").click();
  await expect(
    page.locator("css=[data-test-id='cart-card-0-quantity']")
  ).toContainText("2");
  await page.locator("css=[data-test-id='cart-card-0-decrease']").click();
  await expect(
    page.locator("css=[data-test-id='cart-card-0-quantity']")
  ).toContainText("1");
});
