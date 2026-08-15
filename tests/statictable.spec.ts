import {test, expect, Locator} from '@playwright/test';
test("static web table", async({page}) => {
    await page.goto('  https://testautomationpractice.blogspot.com/');
    const table:Locator = page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();
    //1) count number of rows in table
    const rows:Locator=table.locator("tr");//returns all the rows in table including heaer
    await expect(rows).toHaveCount(7); //6 rows + 1 header row
    const rowCount:number = await rows.count();
    console.log("Row Count: ", rowCount);
    expect(rowCount).toBe(7); 

    //2) count number of columns in table
    const columns:Locator=table.locator("tr th");
    await expect(columns).toHaveCount(4);
    const columnCount:number = await columns.count();
    console.log("Column Count: ", columnCount);
    expect(columnCount).toBe(4);

    //3) Read all data from 2nd row (index 2 meaning 3rd row inclding header row )
    const secondRow:Locator = rows.nth(2).locator('td');
    const secondRowData:string[] = await secondRow.allTextContents();
    console.log("Data from 2nd row: ", secondRowData);
    expect(secondRowData).toEqual(['Learn Java', 'Mukesh', 'Java', '500']);
    console.log("Data from 2nd row");
    for(let text of secondRowData) {
        console.log(text);
    }

    //4) Read all data from the table (excluding header row)
    console.log("PRINTING ALL DATA FROM TABLE EXCLUDING HEADER ROW");
    const allRowData=await rows.all(); //get allrows locators  //all() returns array of locators
    console.log("BookName Author Subject Price");
    for(let row of allRowData.slice(1)) //excluding header row{ // SLICE(1) will exclude the first row (header row)
      { const cols= await rows.locator('td').allTextContents();
        console.log(cols.join("\t"));
    }

    //5) print book names where author is Mukesh
    console.log("PRINTING BOOK NAMES WHERE AUTHOR IS MUKESH");
    const mukeshBooks:string[]=[];
    for(let row of allRowData.slice(1)) {
        const cols= await row.locator('td').allTextContents();
        const authorName=cols[1];
        const bookName=cols[0];
        if(authorName === 'Mukesh') {
            console.log(`${authorName}\t${bookName}`);
            mukeshBooks.push(bookName);
        }
    }
    expect(mukeshBooks).toEqual(['Learn Java', 'Learn Selenium']);
    expect(mukeshBooks.length).toBe(2);

    //6)total price of all books
    console.log("PRINTING TOTAL PRICE OF ALL BOOKS");
    let totalPrice:number=0;
    for(let row of allRowData.slice(1)) {
        const cols= await row.locator('td').allTextContents();
        const price=Number(cols[3]);
        totalPrice+=price;
    }
    console.log("Total Price of all books: ", totalPrice);
    expect(totalPrice).toBe(2100);
    

});