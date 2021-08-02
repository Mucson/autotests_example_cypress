import MainPage from "../PageObject/MainPagex"
import DemoPage from "../PageObject/DemoPage"
import SearchResultPage from "../PageObject/SearchResultPage"


describe ('Auto test using page object', () => {
    it ('authentication and open demo page', () => {
        cy.fixture('textAssertions').then(text_assertions => {
            MainPage.open()
            MainPage.getheader().contains(text_assertions.h1)
            MainPage.opendemopage().click()
        })
    })
    it ('Schedule a demo', () => {
        cy.fixture('credentials').then(user => {
            DemoPage.firstnameField().type(user.firstname)
            DemoPage.lastnameFiled().type(user.lastname)
            DemoPage.emailFiled().type(user.email)
            DemoPage.phoneFiled().type(user.phone)
            DemoPage.jobtitleFiled().type(user.jobtitle)
            DemoPage.companyFiled().type(user.company)
            DemoPage.countryselectFiled().select(user.country)
            DemoPage.descriptionFiled().type(user.description)
            DemoPage.submitButton().click()
        })
    })
    it ('assertion label', () => {
        cy.fixture('textAssertions').then(text_assertions => {
            SearchResultPage.bodylable().contains(text_assertions.successful_label)
        })
    })
})