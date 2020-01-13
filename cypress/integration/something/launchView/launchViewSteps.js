import {Given, Before, Then, When} from "cypress-cucumber-preprocessor/steps";
import SignInPage from "../../../elements/pages/SignInPage";



Given( "I have saved a post", () => {
  const signIn = new SignInPage();
  signIn.login("dan", "moZR&BsI^v6)ykgM4UguDMvA");

  // cy.get('.page-title-action').click()
  // cy.disableTipsIfVisible()
  // cy.get('#post-title-0').type("this is a title")
  // cy.get('.editor-default-block-appender__content').click()
  // cy.get('.wp-block-paragraph').type("this is a paragraph")
  // cy.get('.editor-post-save-draft').click()

});

When(/^I attempt to view the revisions$/, () => {
  //Todo open the revisions bit
  // cy.get()

//  check it opened
});

Then(/^I see that there is no content to process$/, () => {
//todo
});
