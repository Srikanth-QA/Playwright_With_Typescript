import { test, expect, Locator } from "@playwright/test";

test("Verify CSS Locators", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    // tag#id

    // const searchbox: Locator =
    //     page.locator("input#small-searchterms");
    // await searchbox.fill("T-Shirts");

    await expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("input#small-searchterms").fill("T-Shirts");
    await page.locator("#small-searchterms").fill("T-Shirts");

    // tag.class

// await page.locator("input.search-box-text").fill("T-Shirts");
// await page.locator(".search-box-text").fill("T-Shirts");

// tag[attribute=value]
});