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

//3. contains()

const products: Locator =
    page.locator("//h2/a[contains(@href,'computer')]");

const productsCount: number = await products.count();
console.log("No of computer related products:" ,productsCount);
expect(productsCount).toBeGreaterThan(0);
//console.log(await products.testContent());  //Error strict mode violation
console.log("First computer related product:", await products.first().textContent());
console.log("Last computer related product:", await products.last().textContent());
console.log("Nth computer related product:", await products.nth(2).textContent());
let productTitles: string[] = await products.allTextContents(); // getting all the matched products in to an array
console.log("All computer related products title:", productTitles)
for (let pt of productTitles)
{
    console.log(pt);
}

//4. start-with()
const buildingProducts: Locator =
    page.locator("//h2/a[starts-with(@href,'/build')]"); // returns multiple elements

const count: number = await buildingProducts.count();
expect(count).toBeGreaterThan(0);

//5. text() ..
const reglink: Locator =
    page.locator("//a[text()='Register']");

await expect(reglink).toBeVisible();

//6. last()

const lastitem: Locator =
    page.locator("//div[@class='column follow-us']//li[last()]");

await expect(lastitem).toBeVisible();

console.log(
    "Text content of last element: ",
    await lastitem.textContent()
);


//7. position()

const positionitem: Locator =
    page.locator("//div[@class='column follow-us']//li[position(3)]");

await expect(positionitem).toBeVisible();

console.log(
    "Text content of positional element: ",
    await positionitem.textContent()
);

});