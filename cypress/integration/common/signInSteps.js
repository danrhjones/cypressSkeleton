import {Given} from "cypress-cucumber-preprocessor/steps";
import SignInPage from "../../elements/pages/SignInPage";
import AddPost from "../../elements/pages/addPost";

Given( "I have saved a post", () => {
  const signIn = new SignInPage();
  const addPost = new AddPost();
  signIn.login();

  addPost.newPost()
});
