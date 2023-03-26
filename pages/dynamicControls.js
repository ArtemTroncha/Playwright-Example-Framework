import { expect } from "@playwright/test"

export class DynamicControlsPage {
    constructor(page) {
        this.removeAddCheckboxButton = page.locator('//form[@id="checkbox-example"]/button')
        this.checkbox = page.locator('//input[@id="checkbox"]')
        this.input = page.locator('//form[@id="input-example"]/input')
        this.swapInputButton = page.locator('//form[@id="input-example"]/button')
        this.inputChangeStatusMessage = page.locator('//p[@id="message"]')
    }

    async checkCheckbox() {
        await this.checkbox.check()
    }

    async isInputEnable() {
        return this.input.isDisabled()
    }

    async enableDisableInput() {
        await this.swapInputButton.click()
        await expect(this.inputChangeStatusMessage).toBeVisible()
    }

    async fillInput(text) {
        await this.input.fill(text)
    }

    async getInputText() {
        const text = await this.input.inputValue()
        return text
    }
}