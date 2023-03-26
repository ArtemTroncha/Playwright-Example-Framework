import { expect, test } from '@playwright/test'
import appConfig from '../config/appConfig'
import { DynamicControlsPage } from '../pages/dynamicControls'

let dynamicControlsPage

test.beforeEach(({page}) => {
    dynamicControlsPage = new DynamicControlsPage(page)
})

test('Enable and disable input, write text in input', async ({page}) => {
    await page.goto(`${appConfig.url.baseUrl}/dynamic_controls`);

    await test.step('Enable input', async () => {
        await dynamicControlsPage.enableDisableInput()
        await dynamicControlsPage.fillInput("Test Message")

        const inputText = await dynamicControlsPage.getInputText()

        expect(inputText).toBe("Test Message")
    })
    
    await test.step('Disable', async() => {
        await dynamicControlsPage.enableDisableInput() 
        const isInputEnable = await dynamicControlsPage.isInputEnable()

        expect(isInputEnable).toBeTruthy()
    }) 
})