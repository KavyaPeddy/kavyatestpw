import {test,expect } from '@playwright/test';
import path from 'path';


test('Download a file', async ({ page }) => {

await page.goto('https://demo.automationtesting.in/FileDownload.html')

const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator("//a[@class='btn btn-primary']").click()])

const downloadpath = path.join(__dirname, 'downloads', await download.suggestedFilename())
await download.saveAs(downloadpath)

console.log('File downloaded to:', downloadpath)
 })