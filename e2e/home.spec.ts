import { test, expect } from "@playwright/test";

test("should show the card with the basic info", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.locator("css=[data-test-id='product-card-1']")
  ).not.toContainText("Add to Cart");
});

test("should expand the card to show the details", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("css=[data-test-id='product-card-1']");
  await expect(
    page.locator("css=[data-test-id='product-card-1']")
  ).toContainText("Add to Cart");
});

test("should show a no results filter", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.fill('[placeholder="Keyword"]', "blabla");
  await page.click("css=[data-test-id='filter-button']");
  await expect(
    page.getByRole("heading", { name: "No Results found" })
  ).toContainText("No Results found");
});
