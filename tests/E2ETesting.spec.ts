import { test, expect, Locator } from "@playwright/test";

test("E2E Testing", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", {
waitUntil: "domcontentloaded",
timeout: 60000,
});
6
 
7
await expect(page).toHaveTitle(/Automation Testing Practice/i);

//name
const nameTextBox: Locator= page.locator("#name");
 await expect(nameTextBox).toBeVisible();
    await expect(nameTextBox).toBeEnabled();
    const maxLength: string | null = await nameTextBox.getAttribute("maxlength"); // Returns value of maxlength attribute
    expect(maxLength).toBe("15");
await nameTextBox.fill("John Canedy");
// console.log("text content of FirstName :", await textBox.textContent()); // returns empty
const enteredValue: string = await nameTextBox.inputValue();
console.log("Input value of the FirstName:",enteredValue); // returns the input value of text box
expect(enteredValue).toBe("John Canedy");
await page.waitForTimeout(3000);

//Email
const emailtextBox: Locator = page.locator("#email");
await expect(emailtextBox).toBeVisible();
await expect(emailtextBox).toBeEnabled();
const maxLenght1 : string|null =await emailtextBox.getAttribute("maxlenght");
//expect(maxLenght1).toBe("25");
await emailtextBox.fill("john@gmail.com");
await page.waitForTimeout(3000);

//Phone number
const phone = page.getByPlaceholder("Enter Phone");
await expect(phone).toBeVisible();
await expect(phone).toBeEnabled()
const phoneMaxlenght: string|null =await phone.getAttribute("maxlength");
expect(phoneMaxlenght).toBe("10");
await phone.fill("9874563210");
await page.waitForTimeout(3000);

//Address
const address: Locator = page.locator("#textarea");
await expect(address).toBeVisible();
await expect(address).toBeEnabled();
//const addMaxlenght: string|null= await address.getAttribute("")
await address.fill("Mysuru");
await page.waitForTimeout(3000);

//Gender
const radiobutton: Locator =page.locator("#female");
expect(radiobutton).toBeVisible();
expect(radiobutton).toBeEnabled();
expect(await radiobutton.isChecked()).toBe(false);
await radiobutton.check();
expect(await radiobutton.isChecked()).toBe(true);



});
