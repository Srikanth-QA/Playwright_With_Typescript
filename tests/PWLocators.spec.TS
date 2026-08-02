/*
Locator - identifies the element on the page.
DOM - Document Object Model
DOM is an API Interface provided by browser.

1) page.getByAltText() to locate an element, usually image, by its text alternative.
2) page.getByText() to locate by text content.
3) page.getByRole() to locate by explicit and implicit accessibility attributes.
4) page.getByLabel() to locate a form control by associated label's text.
5) page.getByPlaceholder() to locate an input by placeholder.

6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

//When we need to use await - when statement returning a promise / involing in the action

import { test, expect, Locator } from '@playwright/test';
test('Verify Playwright Locators', async ({ page }) => {
await page.goto('https://demo.nopcommerce.com/');

    // 1. page.getByAltText() - identifies images (and similar elements) based on the alt attribute.
    // Use this locator when your element supports alt text such as img and area elements.

  // Locate logo by alt text
const logo: Locator = page.getByAltText('nopCommerce demo store');
await expect(logo).toBeVisible();

// 2. page.getByText() - Find an element by the text it contains. You can match by a substring, exact string,
// locate by visible text
// Use this locator to find non interactive elements like div, span, p, etc.
// For interactive elements like button, a, input, etc. use role locators.

/*
<p>welcome</p>
<div>hello</div>
*/

// const textLocator = page.getByText("Welcome to our store");
// await expect(text).toBeVisible();
// Locate text by visible text
// await expect(page.getByText("Welcome to our store")).toBeVisible();  // full string
// await expect(page.getByText("Welcome to")).toBeVisible();            // provided substring

await expect(page.getByText(/Welcome\s+to\s+our\s+store/i)).toBeVisible(); // provided substring
// "i" represent ignore casesensitive 

// 3. page.getByRole() - Locating by Role  (role is not an attribute)
// Role locators include buttons, checkboxes, headings, links, lists, tables,
// and many more and follow W3C specifications for ARIA role.
// Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.

await page.getByRole('link', { name: 'Register' }).click();

await expect(
    page.getByRole('heading', { name: 'Register' })
).toBeVisible(); // you can also use getByText()

// 4. page.getByLabel() - Locate form control by label's text
// When to use: Ideal for form fields with visible labels.

// page.getByLabel('First name').fill('John');  // type is deprecated
await page.getByLabel('First name:').fill("John");
await page.getByLabel('Last name:').fill("Kennedy");
await page.getByLabel('Email:').fill("abc@gmail.com");

// 5. page.getByPlaceholder() - Finds element with a given placeholder text.
// Best for inputs without a label but having a placeholder

await page.getByPlaceholder("Search store").fill('Apple MacBook Pro');


// 6. page.getByTitle() to locate an element by its title attribute.
// When to use: When your element has a meaningful title attribute.

await page.goto("file:///C:/Users/pavan/OneDrive/Desktop/playwrightlocators.html")

// const link: Locator = page.getByTitle("Home page link");
// expect(link).toHaveText("Home");

await expect(page.getByTitle("Home page link")).toHaveText("Home");
await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");

// 7. page.getByTestId() : Locate an element based on its data-testid attribute (other attributes can be configured)
// When to use: When text or role-based locators are unstable or not suitable.

await expect(page.getByTestId("profile-email"))
      .toHaveText("john.doe@example.com");

await expect(page.getByTestId("profile-name"))
      .toHaveText("John Doe");

})