import { test, expect, Locator } from '@playwright/test';

test("Comparing methods", async({page}) => {

    await page.goto('https://demowebshop.tricentis.com/');

    const products:Locator = page.locator('.product-title');   //6
/*
    //1) innerText() Vs textContent()

    //console.log(await products.nth(1).innerText());  //14.1-inch Laptop
    //console.log(await products.nth(1).textContent());

    const count = await products.count();

    for(let i=0; i<count; i++)
    {
        //const productName :string = await products.nth(i).innerText();
        //console.log(productName);
        const productName :string | null = await products.nth(i).textContent();
        console.log(productName?.trim());
    }
*/
    //2) allInnerText() Vs allTextContents()
/*
console.log("***** Comparing allInnerText() Vs allTextContent() *****")

//const productNames: string[] = await products.allInnerTexts()
//console.log("Product Names captured by allInnerText(): ", productNames)

const productNames: string[] = await products.allTextContents()
console.log("Product Names captured by allTextContent(): ", productNames)

const productNamesTrimmed: string[] = productNames.map(text => text.trim());
console.log("Product Names after trimmed: ", productNamesTrimmed)

*/
/*
//3) all() - converts locators ----> array of locators
const productLocators: Locator[] = await products.all();
console.log("Product Locators: ", productLocators);
//console.log("Product Locators: ", productLocators[1].innerText() );
for(let product of productLocators)
{
    console.log("Product Name: ", await product.innerText());
}*/

//for in loop
const productLocators: Locator[] = await products.all();
console.log("Product Locators: ", productLocators);
for(let i in productLocators)
{
    console.log("Product Name: ", await productLocators[i].innerText());
}
});
