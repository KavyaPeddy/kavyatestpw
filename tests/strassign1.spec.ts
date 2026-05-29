import { test, expect } from '@playwright/test';

test('string assignment', async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    await page.locator('#twotabsearchtextbox').fill("cycles");
    await page.locator('#nav-search-submit-button').click();
    await page.waitForTimeout(3000);
    let str = await page.locator("//h2[@class='a-size-base a-spacing-small a-spacing-top-small a-text-normal']/span[1]").innerText();
    console.log(str);
    console.log(str.charAt(9)); 
    // console.log(str.length); 
    // console.log(str.split(" "));
    let strarray: string[] = str.split(" ");  
    console.log(strarray);

    console.log(strarray[0]);  //accessing first word
    console.log(strarray[1]);  //accessing second word  
    console.log(strarray[2]);  //accessing third word
       

})
