import { test, expect } from '@playwright/test';
import * as fs from 'fs';
 
// Reading JSON file
const jsonData = fs.readFileSync('./Testdata/sample.json', 'utf-8');
const jfile = JSON.parse(jsonData);
 
test('jsonfilereading', async ({ page }) => {
  
  const maleItem = jfile.LookingFor[0].male;
  const femaleItem = jfile.LookingFor[1].female;
 
  // Reading flight offer details
  const airlineName =jfile.flightOffers[0].segments[0].airline;
 
  // Reading payment details
  const cardNum = jfile.payment.cardNumber;
 
  console.log(maleItem);      // wallet
  console.log(femaleItem);    // spa kit
  console.log(airlineName);   // IndiGo
  console.log(cardNum);       // 1234-5678-9012-3456
 
});
 
