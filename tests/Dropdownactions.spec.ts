import { test, expect, Locator } from "@playwright/test";

test("Single Select Drop down", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // 1) Select option from the dropdown (4 ways)

  await page.locator("#country").selectOption("India"); // by visible text
  // await page.locator("#country").selectOption({ value: "uk" }); // by value
  // await page.locator("#country").selectOption({ label: "India" }); // by label
  // await page.locator("#country").selectOption({ index: 3 }); // by index

  // 2) Check number of options in the dropdown
  const dropdownOptions: Locator = page.locator("#country option");
  await expect(dropdownOptions).toHaveCount(10);

  // 3) Verify an option is present in the dropdown
  const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
  console.log(optionsText);
  expect(optionsText).toContain("Japan");

  //4) printing options from the drop down
for (const option of optionsText)
{
    console.log(option)
}


  await page.waitForTimeout(5000);
});

test("Multi Select Drop down", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1) select option from the drop down (4 ways)

    // await page.locator("#colors").selectOption(['Red','Blue','Green']);      // using visible text
    // await page.locator("#colors").selectOption(['red','green','white']);     // using value attribute
    // await page.locator("#colors").selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]); // using label
    // await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]); // using index

    //2) check number of options in the dropdown (count)

    const dropdownOptions: Locator =
        page.locator("#colors option");

    await expect(dropdownOptions).toHaveCount(7);

    //3) check an option present in the dropdown

const optionsText: string[] =
    (await dropdownOptions.allTextContents())
        .map(text => text.trim());

console.log(optionsText);

expect(optionsText).toContain('Green'); // Check if the array contains "Green"


//4) printing options from the drop down

for (const option of optionsText)
{
    console.log(option);
}

});