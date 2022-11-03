
import { LoginPage } from "./Pages/Login_page"
import { SearchBox } from "./Pages/SearchBox"

var loginPage = new LoginPage()
var searchbox = new SearchBox()

it('POM', function(){

cy.visit('https://master.hiring-assignment.qa.c66.me/')
cy.get('[href="/login"]').click()
loginPage.enterUserName('tester@shair.co')
loginPage.enterPassword('secure-password-for-assessment')
loginPage.clickLogin()

cy.get('[href="/profile"]').click()
searchbox.createNote('This is my second automated note')

cy.get('[href="/search"]').click()
searchbox.enterValue('second')
cy.get('[href="/"]').click()
loginPage.clickLogout()
}


)