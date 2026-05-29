import { test, expect } from '@playwright/test';

test('frames handling', async ({ page }) => {
    await page.goto('https://testautomationcentral.com/demo/frames_iframes.html')

   const allFrames = await page.frames();
   console.log("number of frames: " + allFrames.length);  //total frames in the page

//approch1 -using name /url of the frame
    await page.frame('frame1').locator('input[name="firstname"]').type("Kavya");
   })

