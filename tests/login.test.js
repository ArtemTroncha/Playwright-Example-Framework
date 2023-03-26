// @ts-check
const { test, expect } = require('@playwright/test');
import appConfig from '../config/appConfig.js';
import { LoginPage } from '../pages/loginPage.js';

let loginPage 

test.beforeEach(({page}) => {
  loginPage = new LoginPage(page)
})

test('Login and check if login was successfull', async ({ page }) => {
  await page.goto(`${appConfig.url.baseUrl}/login`);

  await loginPage.login("tomsmith", "SuperSecretPassword!")
  const isVisible = await loginPage.isLoginSuccess()

  expect(isVisible).toBeTruthy()
});
