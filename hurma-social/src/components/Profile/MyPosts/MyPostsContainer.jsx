import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext.js";

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store)=>{
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return(
        <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
      />)}}
    </StoreContext.Consumer>
  );
};
export default MyPostsContainer;
