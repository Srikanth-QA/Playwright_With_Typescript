import { test, expect, Locator } from "@playwright/test";

test("XPath demo in playwright", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

   //1. Absolute xpath - logo

const absolutelogo: Locator =
    page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");

await expect(absolutelogo).toBeVisible();


//2. Relative xpath - logo

const relativelogo: Locator =
    page.locator("//img[@alt='Tricentis Demo Web Shop']");

await expect(relativelogo).toBeVisible();

});