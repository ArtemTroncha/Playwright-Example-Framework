export class CheckboxPage {
    constructor(page) {
        this.checkbox1 = page.getByRole('checkbox').first()
        this.checkbox2 = page.locator('//form[@id="checkboxes"]/input[2]')
    }

    async changeCheckbox1Status() {
        const isChecked = await this.checkbox1.isChecked()
        if(!isChecked) {
            await this.checkbox1.check()
        }
        else {
            await this.checkbox1.uncheck()
        }
    }

    async changeCheckbox2Status() {
        const isChecked = await this.checkbox2.isChecked()
        if(!isChecked) {
            await this.checkbox2.check()
        }
        else {
            await this.checkbox2.uncheck()
        }
    }

    async isCheckbox1Checked() {
        const isChecked = await this.checkbox1.isChecked()
        return isChecked
    }

    async isCheckbox2Checked() {
        const isChecked = await this.checkbox2.isChecked()
        return isChecked
    }
}