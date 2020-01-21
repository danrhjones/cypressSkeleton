import { Given } from "cypress-cucumber-preprocessor/steps";
import SignIn from "../../elements/pages/SignInPage";
import AddPost from "../../elements/pages/addPost";

Given("I have saved a post", () => {
  SignIn.login();

  AddPost.newPost();
});
