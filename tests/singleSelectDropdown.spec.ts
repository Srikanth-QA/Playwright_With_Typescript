import { test, expect, Locator } from "@playwright/test";

test("Single Select Drop down", async (page) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //1) select option from the drop down (4 ways)

  await page.locator("#country").selectOption("India"); // visible text
  //await page.locator("#country").selectOption({value:"uk"}); // by using value attribute
  //await page.locator("#country").selectOption({label:"India"}); // by using label
  //await page.locator("#country").selectOption({index:3}); // by using index

  await page.waitForLoadState("networkidle");
});