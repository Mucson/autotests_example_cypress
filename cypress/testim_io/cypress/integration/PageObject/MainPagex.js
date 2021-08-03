class MainPage {

    open() {
        return cy.visit('https://www.testim.io/')
    }

    getHeader() {
        return cy.get('h1')
    }

    getButtonToDemoPage() {
        return cy.get('.default').should('contain', 'Schedule a demo')
    }
}

export default new MainPage
