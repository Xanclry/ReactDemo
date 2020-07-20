const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Zahar'},
        {id: 4, name: 'Slava'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Yo again'},
    ],
    newMessageText: '',

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            state.messages.push({id: 10, message: state.newMessageText})
            state.newMessageText = ''
            return state
        }
        case CHANGE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText
            return state
        }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const changeNewMessageTextActionCreator = (text) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    newMessageText: text
})

export default dialogsReducer