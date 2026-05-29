import { test, expect } from '@playwright/test';
test.only('has title', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill("//input[@id='name']", "Dinesh Neela")
    await page.fill("//input[@id='email']", "dineshneela2512@gmail.com")
    await page.fill("//input[@id='phone']", "7093479561")
    await page.fill("//textarea[@id='textarea']", "Ramayampet,Medak,502101")
    await page.locator("//button[text()='Point Me']").hover()
    await page.locator("//button[text()='Copy Text']").dblclick()
    await page.keyboard.press('ArrowDown')        
    await page.locator("//div[@id='draggable']").dragTo(page.locator("//div[@id='droppable']"))
    await page.screenshot({
        path: './Screenshots/homepage.png',
        fullPage: true
    });
    const source = page.locator("//div[@id='draggable']")
    const target = page.locator("//div[@id='droppable']")   
    await target.screenshot({
        path: './Screenshots/draganddrop.png'
    });

    });