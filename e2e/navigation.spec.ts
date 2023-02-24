import { test, expect } from "@playwright/test";

test("should navigate to the cart page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("css=[data-test-id='cart-icon-button']");
  await expect(page).toHaveURL("http://localhost:3000/cart");
  await expect(page.locator("h2")).toContainText("Order the Products");
});

test("should navigate from cart page to the home page", async ({ page }) => {
  await page.goto("http://localhost:3000/cart");
  await page.click("css=[data-test-id='header-logo-link']");
  await expect(page).toHaveURL("http://localhost:3000");
  await expect(page.locator("h1")).toContainText("Sweet Apple Acres");
});
