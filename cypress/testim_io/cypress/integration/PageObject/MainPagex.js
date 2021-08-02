class MainPage {

    open() {
        return cy.visit('https://www.testim.io/')
    }

    getheader() {
        return cy.get('h1')
    }

    opendemopage() {
        return cy.get('.default').should('contain', 'Schedule a demo')
    }

}

export default new MainPage