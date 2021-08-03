class DemoPage {

    firstnameField() {
        return cy.get('[name="firstname"]')
    }

    lastnameField() {
        return cy.get('[name="lastname"]')
    }

    emailField() {
        return cy.get('[name="email"]')
    }

    phoneField() {
        return cy.get('[name="phone"]')
    }

    jobtitleField() {
        return cy.get('[name="jobtitle"]')
    }

    companyField() {
        return cy.get('[name="company"]')
    }

    jobfunctionSelect() {
        return cy.get('[name="user_type"]')
    }

    countrySelect() {
        return cy.get('[name="lead_country"]')
    }

    descriptionField() {
        return cy.get('[name="see_in_demo"]')
    }

    submitButton() {
        return cy.get('[type="submit"]')
    }
}

export default new DemoPage
