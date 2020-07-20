const ADD_POST = 'ADD_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hello! How are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 22},
        {id: 3, message: 'Wow!', likeCount: 89},
    ],
    textareaValue: '123'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            state.posts.push({
                id: 4,
                message: state.textareaValue,
                likeCount: 0
            })
            state.textareaValue = ''
            return state
        }
        case CHANGE_NEW_POST_TEXT: {
            state.textareaValue = action.newValue
            return state
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const changeNewPostTextActionCreator = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    newValue: text
})

export default profileReducer