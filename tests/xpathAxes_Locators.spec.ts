import { test, expect, Locator } from "@playwright/test";

test("XPath Axes demo", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

   /* 1. self axis - Select <td> element that contains "Germany"
    
What is the self axis in XPath?
The self axis selects the current node itself without moving to any parent, child, or sibling node.*/
    const germanyCell: Locator =
        page.locator("//td[text()='Germany']/self::td");
    await expect(germanyCell).toHaveText("Germany");

    /*// 2. parent axis - Get parent <tr> of the "Germany" cell
    What is the parent axis in XPath?
The parent axis selects the immediate parent node of the current element.*/
const parentRow: Locator =
    page.locator("//td[text()='Germany']/parent::tr");
await expect(parentRow).toContainText("Maria Anders");
// await expect(parentRow).toContainText("Alfreds Futterkiste Maria Anders Germany");
console.log(await parentRow.textContent());

/* 3. child axis - Get all <td> children of the second <tr> in the table
What is the child axis in XPath?
The child axis selects all direct child elements of a node.*/
const secondRowCells: Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
// returns multiple elements (td's)

/* 4. ancestor axis - Get ancestor <table> of the "Germany" cell
What is the ancestor axis in XPath?
The ancestor axis selects all parent nodes up the hierarchy of the current element, including parent, grandparent, and higher-level ancestors.*/
const table: Locator = page.locator("//td[text()='Germany']/ancestor::table");
await expect(table).toHaveAttribute('id', 'customers');

/* 5. descendant axis - Get all <td> elements under the table
What is the descendant axis in XPath?
The descendant axis selects all child, grandchild, and deeper nested elements under a specified node.*/
const allTds: Locator =
    page.locator("//table[@id='customers']//descendant::td");
await expect(allTds).toHaveCount(18);

/* 6. following axis - Get the <td> that comes after "Germany" in document order
What is the following axis in XPath?
The following axis selects all nodes that appear after the current node in the document order, regardless of parent-child relationships.*/
const followingCell: Locator =
    page.locator("//td[normalize-space()='Germany']/following::td[1]");

await expect(followingCell).toContainText("Centro comercial Moctezuma");

/* 7. following-sibling axis - Get <td>s to the right of "Germany"
What is following-sibling in XPath?
The following-sibling axis selects all sibling elements that come after the current node under the same parent.*/
// const rightsiblings: Locator = page.locator("//td[normalize-space()='Germany']/following-sibling::td");
// await expect(rightsiblings).toHaveCount(0);
const rightsiblings: Locator =
    page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
await expect(rightsiblings).toHaveCount(1);

// 8. preceding axis - Get the <td> just before "Germany"
const precedingCell: Locator =
    page.locator("//td[text()='Germany']/preceding::td[1]");
await expect(precedingCell).toHaveText("Maria Anders");


// 9. preceding-sibling axis - Get <td>s to the left of "Germany"
const leftSiblings: Locator =
    page.locator("//td[text()='Germany']/preceding-sibling::td");
await expect(leftSiblings).toHaveCount(2);

await expect(leftSiblings.nth(0)).toHaveText("Alfreds Futterkiste");
await expect(leftSiblings.nth(1)).toHaveText("Maria Anders");

/*What is the difference between preceding and preceding-sibling?
preceding selects all nodes that occur before the current node in the document order.
preceding-sibling selects only sibling nodes that occur before the current node under the same parent.*/
});