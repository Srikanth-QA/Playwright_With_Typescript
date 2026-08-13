import { test, expect, Locator } from "@playwright/test";

test("Autosuggest dropdown", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");
    await page.locator("input[name='q']").fill("smart"); // Search text
    await page.waitForTimeout(5000);
    // Get all the suggested options --> Ctrl+Shift+P on DOM --> emulate focused page
    const options: Locator = page.locator("ul>li");
    const count = await options.count();
    console.log("Number of suggested options:", count);
    // printing all teh suggested options in the console
   /* const suggestions =
await options.allTextContents();
for (const suggestion of suggestions)
{
console.log(suggestion);
}

    await page.waitForTimeout(3000);
*/
console.log("5 th option:", await options.nth(5).innerText());

console.log("Printing all teh auto suggestions.....")

for (let i = 0; i < count; i++)
{
    // console.log(await options.nth(i).innerText());

    console.log(await options.nth(i).textContent())
}

//select/click on the smartphone option

for(let i=0;i<count;i++)
{
    const text = await options.nth(i).innerText();

    if(text === "smartphone")
    {
        options.nth(i).click();
        break;
    }
}

});