class DemoPage {

    firstnameField() {
        return cy.get('[name="firstname"]')
    }

    lastnameFiled() {
        return cy.get('[name="lastname"]')
    }

    emailFiled() {
        return cy.get('[name="email"]')
    }

    phoneFiled() {
        return cy.get('[name="phone"]')
    }

    jobtitleFiled() {
        return cy.get('[name="jobtitle"]')
    }

    companyFiled() {
        return cy.get('[name="company"]')
    }

    countryselectFiled() {
        return cy.get('select')
    }

    descriptionFiled() {
        return cy.get('[name="see_in_demo"]')
    }

    submitButton() {
        return cy.get('[type="submit"]')
    }

}

export default new DemoPage