import { test } from '@playwright/test';
test('Handling Frames', async ({ page }) => {
await page.goto("https://letcode.in/frame");
//count the total frames in the page
const totalFrames = await page.frames().length;
console.log(totalFrames);
const firstFrame = page.frameLocator("#firstFr");
await firstFrame.locator('input[name="fname"]').fill("Srikanth ");
await firstFrame.locator('input[name="lname"]').fill("Reddy");
});
