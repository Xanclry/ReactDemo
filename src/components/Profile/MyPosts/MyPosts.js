import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postElements = props.state.posts.map(p => <Post likeCount={p.likeCount} message={p.message}/>)

    let textAreaElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let changeTextArea = () => {
        let text = textAreaElement.current.value
        props.dispatch(changeNewPostTextActionCreator(text))
    }

    return (
        <div className={s.wrapper}>
            <h2>My Posts</h2>
            <div>
                <h3>Create new post</h3>

                <div>
                    <textarea value={props.state.textareaValue} onChange={changeTextArea} ref={textAreaElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Create</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts