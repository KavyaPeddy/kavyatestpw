

for (let i =99; i <= 105; i++) {
    console.log(i);
}


let names: string[] = ["Kavya", "jhon", "Jack", "jill"];
console.log(names[2]);


for (let i =0; i < names.length; i++) {
  console.log(names[i]);
}

for( let i =9; i >= 0; i--)
{
    console.log(i);
}

for( let i =33; i >= 19; i--)
{
    console.log(i);
}
import { test } from '@playwright/test';
 
test('Print dropdown values - Method 3', async ({ page }) => {
 
    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropdownOptions = page.locator("//select[@id='country']/option");
    const count = await dropdownOptions.count();
    console.log(count);
    for (let i = 0; i < count; i++) {
        const value = await dropdownOptions.nth(i).textContent();
        console.log(value);
    }
 
});
 


