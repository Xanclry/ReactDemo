const ADD_POST = 'ADD_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

const profileReducer = (state, action) => {
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