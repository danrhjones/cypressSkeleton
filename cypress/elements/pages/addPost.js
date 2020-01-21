var faker = require('faker');

class addPost {
  newPost() {
    cy.get('.page-title-action').click();
    cy.disableTipsIfVisible();
    cy.get('#post-title-0').type(faker.random.words());
    cy.get('.editor-default-block-appender__content').click();
    cy.get('.wp-block-paragraph').type(faker.lorem.paragraph());
    cy.get('.editor-post-save-draft').click()
  }
}

export default addPost;
