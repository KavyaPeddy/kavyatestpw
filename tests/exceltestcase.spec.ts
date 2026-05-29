import { expect, test } from '@playwright/test';
import * as path from 'path';
import * as ExcelJS from 'exceljs';
 
test('Download file to Local folder', async ({ page }) => {
  
  const workbook = new ExcelJS.Workbook();
  const filePath = path.resolve(__dirname, '../Testdata/Credentials.xlsx');
  await workbook.xlsx.readFile(filePath);
  const sheet = workbook.getWorksheet(1);
  if (!sheet) {
  throw new Error('Sheet $ $ $ $. not found');
  }
  const row = sheet.getRow(2);
  const username = row.getCell(1).text;
  const password = row.getCell(2).text;
  console.log(username, password);
  
 
 
});