import dialogsReducer from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
            messages: [{ id: 1, message: "Hi bro" }, { id: 2, message: "ahahaha" }, { id: 3, message: "wbu" }],
            dialogs: [{ id: 1, name: "Vova" }, { id: 2, name: "Artem" }, { id: 3, name: "Ivan" }],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hi, whats up?", likesCount: 106 },
                { id: 2, message: "lol", likesCount: 10 },
            ],
            newPostText: 'lol'
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    addPost(postMessage) {

    },
    updateNewPostText(newText) {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar);
        this._callSubscriber(this._state);
    }
}







export default store;