class MainPage {

    open() {
        return cy.visit('https://www.testim.io/')
    }

    getHeader() {
        return cy.get('h1')
    }

    getButtonToDemoPage() {
        return cy.get('a[href*= "schedule-demo"]')
    }
}

export default new MainPage
