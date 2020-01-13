class SignInPage {
  visit() {
    cy.log(Cypress.config().baseUrl);
    cy.visit("wp-admin/edit.php");
  }

  fillName(value) {
    const field = cy.get('#user_login');
    field.type(value);

    return this;
  }

  fillPassword(value) {
    const field =  cy.get('#user_pass');
    field.type(value);
    return this;
  }

  submit() {
    const button = cy.get('#wp-submit');
    button.click();
  }

  login(name, password) {
    cy.log(name);
    cy.log(password);
    this.visit();
    this.fillName(name);
    this.fillPassword(password);
    this.submit()
  }
}

export default SignInPage;
