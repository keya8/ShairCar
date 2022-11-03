export class LoginPage {
    
    loginpage_txtbox_username = '#email'
    loginpage_txtbox_password = '[for="password"] > input'
    login_button = '[for="submit"] > input'
    logout_button = ('[href="#"]')
   
    enterUserName(username) {
        cy.get(this.loginpage_txtbox_username).type(username)
    }
    enterPassword(password) {
        cy.get(this.loginpage_txtbox_password).type(password)
    }
    clickLogin() {
        cy.get(this.login_button).click()
    }
    clickLogout(){
        cy.get(this.logout_button).click()
        
    }
}