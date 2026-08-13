import { test, expect, Locator } from "@playwright/test";

test("Verify dropdown contains duplicates", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropDownOptions: Locator =
        page.locator("#colors option");  // having duplicates

    // const dropDownOptions: Locator =
    //     page.locator("#animals option"); // not having duplicates

    const optionsText: string[] =
        (await dropDownOptions.allTextContents())
            .map(text => text.trim());
const myset = new Set<string>();      // Set - duplicates not allowed
const duplicates: string[] = [];      // array - duplicates allowed


for (const text of optionsText)
{
    if (myset.has(text))
    {
        duplicates.push(text);
    }
    else
    {
        myset.add(text);
    }
}

console.log("Duplicate options are:===>", duplicates);
//expect(duplicates.length).toBe(0);
if(duplicates.length>0)
{
    console.log("Duplicates fund", duplicates)
}
else{
    console.log("duplicates not fund")
}
     await page.waitForTimeout(5000);

});