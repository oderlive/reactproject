let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [{ id: 1, message: "Hi bro" }, { id: 2, message: "ahahaha" }, { id: 3, message: "wbu" }],
    dialogs: [{ id: 1, name: "Vova" }, { id: 2, name: "Artem" }, { id: 3, name: "Ivan" }],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 1, message: body });
            return state;
        default:
            return state;
    }


}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;