const { test, expect } = require('@playwright/test');
import appConfig from '../config/appConfig.js';
import { CheckboxPage } from '../pages/checkboxesPage.js';

let checkboxPage, checkbox1Status, checkbox2Status

test.beforeEach(({page}) => {
    checkboxPage = new CheckboxPage(page)
})

test('Login and check if login was successfull', async ({ page }) => {
  await page.goto(`${appConfig.url.baseUrl}/checkboxes`);

  await test.step('Check 1 checkbox and uncheck 2 checkbox', async () => {
    await checkboxPage.changeCheckbox1Status()
    await checkboxPage.changeCheckbox2Status()
    
    checkbox1Status = await checkboxPage.isCheckbox1Checked()
    checkbox2Status = await checkboxPage.isCheckbox2Checked()

    expect(checkbox1Status).toBeTruthy()
    expect(checkbox2Status).toBeFalsy()
  })

  await test.step('Check 2 checkbox and uncheck 1 checkbox', async () => {
    await checkboxPage.changeCheckbox1Status()
    await checkboxPage.changeCheckbox2Status()
    
    checkbox1Status = await checkboxPage.isCheckbox1Checked()
    checkbox2Status = await checkboxPage.isCheckbox2Checked()

    expect(checkbox1Status).toBeFalsy()
    expect(checkbox2Status).toBeTruthy()
  })

});
