import { test, expect, Locator } from "@playwright/test";

test("Bootstrap hidden dropdown", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Login steps
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    // Click on the PIM menu
    await page.getByText('PIM').click();

    // Click on Job Title dropdown
    await page.locator('form i').nth(2).click();
    await page.waitForTimeout(300);


    // Capture all the options from dropdown and count
    const options: Locator =
        page.locator("div[role='listbox'] span");

    const count: number =
        await options.count();
        console.log("Number of option in a dropdown:",count);
// Print all the options

console.log(
    "All the text contents:",
    await options.allTextContents()
);

console.log("Pring all the options.....");

for (let i = 0; i < count; i++)
{
    // console.log(await options.nth(i).innerText());

    console.log(
        await options.nth(i).textContent()
    );
}
// Select/click on option

for (let i = 0; i < count; i++)
{
    const text = await options.nth(i).innerText();

    if (text === "Automation Tester")
    {
        await options.nth(i).click();
        break;
    }
}

await page.waitForTimeout(5000);
});
