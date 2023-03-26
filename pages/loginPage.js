export class LoginPage {
    constructor(page) {
        this.usernameInput = page.getByLabel('Username')
        this.passwordInput = page.getByLabel('Password')
        this.loginButton = page.getByRole('button', { name: ' Login' })
        this.succesLoginAlert = page.getByText('You logged into a secure area!')
    }
    setUsername(username) {
        return usernameInput.setValue(username)
    }

    setPassword(password) {
        return passwordInput.setValue(password)
    }

    async login(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async isLoginSuccess() {
        const isVisible = await this.succesLoginAlert.isVisible()
        return isVisible
    }
}