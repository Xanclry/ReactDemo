const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
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