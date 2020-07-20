import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import React from "react";


const MyPostsContainer = (props) => {

    let addPostFunc = () => {
        props.dispatch(addPostActionCreator())
    }

    let changeTextAreaFunc = (newText) => {
        props.dispatch(changeNewPostTextActionCreator(newText))
    }

    let posts = props.state.posts

    let textAreaValue = props.state.textareaValue

    return (
        <MyPosts onAddPost={addPostFunc}
                 onChangeNewPostText={changeTextAreaFunc}
                 posts={posts}
                 textAreaValue={textAreaValue}/>
    )
}

export default MyPostsContainer