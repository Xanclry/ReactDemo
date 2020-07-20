import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hello! How are you?', likeCount: 12},
                {id: 2, message: 'It\'s my first post', likeCount: 22},
                {id: 3, message: 'Wow!', likeCount: 89},
            ],
            textareaValue: '123'
        },
        sidebar: {
            friends: [
                {
                    name: 'Andrew',
                    picture: 'https://i.pinimg.com/736x/a6/2f/d9/a62fd99e65131cacfbfc5a6b1816a4ec.jpg'
                },
                {
                    name: 'Elena',
                    picture: 'https://i.pinimg.com/736x/2f/64/7e/2f647e6a038742adaea5a3cbcd36ba68--portrait-wall-woman-portrait.jpg'
                },
                {
                    name: 'Roman',
                    picture: 'https://i05.fotocdn.net/s119/1da13d0280515168/user_l/2711201444.jpg'
                },
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store