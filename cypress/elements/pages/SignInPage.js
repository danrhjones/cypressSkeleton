class SignInPage {
  static visit() {
    cy.log(Cypress.config().baseUrl);
    cy.visit("wp-admin/edit.php");
  }

  static fillName(value) {
    const field = cy.get('#user_login');
    field.type(value);

    return this;
  }

  static fillPassword(value) {
    const field = cy.get('#user_pass');
    field.type(value);
    return this;
  }

  static submit() {
    const button = cy.get('#wp-submit');
    button.click();
  }

  static login() {
    this.visit();
    this.fillName(Cypress.env('user'));
    this.fillPassword(Cypress.env('password'));
    this.submit();
  }
}

export default SignInPage;
