import MainPage from "../PageObject/MainPagex"
import DemoPage from "../PageObject/DemoPage"
import SearchResultPage from "../PageObject/SearchResultPage"


describe ('Auto test using page object', () => {
    it ('authentication and open demo page', () => {
        cy.fixture('textAssertions').then(assertionData => {
            MainPage.open()
            MainPage.getHeader().contains(assertionData.h1)
            MainPage.getButtonToDemoPage().click()
        })
    })
    
    it ('schedule a demo', () => {
        cy.fixture('credentials').then(user => {
            DemoPage.firstnameField().type(user.firstname)
            DemoPage.lastnameField().type(user.lastname)
            DemoPage.emailField().type(user.email)
            DemoPage.phoneField().type(user.phone)
            DemoPage.jobtitleField().type(user.jobtitle)
            DemoPage.companyField().type(user.company)
            DemoPage.jobfunctionSelect().select(user.jobfunction)
            DemoPage.countrySelect().select(user.country)
            DemoPage.descriptionField().type(user.description)
            DemoPage.submitButton().click()
        })
    })

    it ('assertion label', () => {
        cy.fixture('textAssertions').then(assertionData => {
            SearchResultPage.getBodyText().contains(assertionData.successfulText)
        })
    })
})
