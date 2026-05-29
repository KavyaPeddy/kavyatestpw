import { test, expect } from '@playwright/test';
import * as fs from 'fs';
 
// Reading JSON file
const jsonData = fs.readFileSync('./Samplejson/sample_2.json', 'utf-8');
const jfile = JSON.parse(jsonData);
 
test('jsonfilereading', async ({ page }) => {
    //const maleItem = jfile.LookingFor[0].male;
    const nameItem=jfile.users[0].name;
    const emailItem=jfile.users[0].email;
    const phoneItem=jfile.users[0].phone;
    const Address=jfile.users[0].address;
    const gender=jfile.users[0].gender;
 
   await page.goto('https://testautomationpractice.blogspot.com/');
   await page.fill(("//input[@id='name']"),nameItem);
   await page.fill("//input[@id='email']",emailItem);
   await page.fill("//input[@id='phone']",phoneItem);
   await page.fill("//textarea[@id='textarea']",Address);
   await page.locator('input[type="radio"][value=gender]').click();
 
})
 
 