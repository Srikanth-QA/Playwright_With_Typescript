import {test, expect, Locator} from '@playwright/test';
test("Verify chrome CPU load in dynamic table", async({page}) => {
    await page.goto('https://practice.expandtesting.com/dynamic-table');
    const table:Locator = page.locator("table.table tbody");
    await expect(table).toBeVisible();
    //select all rows in table, then find number of rows in table
    const rows:Locator[]=await table.locator("tr").all(); //returns all the rows in table excluding header
    console.log("Number of rows in table: ", await rows.length);
    await expect(rows).toHaveLength(4);

    //step 1: For chrome proccess get value of cpu load and print it
//read each row 0 check chrome pressence
let cpuLoad=' ';
    for(let row of rows) {
        const processName:string = await row.locator("td").nth(0).innerText();
        if(processName === 'chrome') {
            cpuLoad = await row.locator('td:has-text("%")').innerText();
            console.log("CPU Load for chrome process: ", cpuLoad);
            break;
        }
    }

    //Step 2: compare the cpu load value with 1yellow label
    let yellowboxtext:string = await page.locator("#chrome-cpu").innerText();
    console.log("Yellow box text: ", yellowboxtext);
    if(yellowboxtext.includes(cpuLoad)) {
        console.log("CPU load value is matching with yellow box text");
    }
    else {
        console.log("CPU load value is NOT matching with yellow box text");
    }
    expect(yellowboxtext).toContain(cpuLoad);
    
});
