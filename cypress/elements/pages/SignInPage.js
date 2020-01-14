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

  login() {
    this.visit();
    this.fillName(Cypress.env('user'));
    this.fillPassword(Cypress.env('password'));
    this.submit()
  }
}

export default SignInPage;
