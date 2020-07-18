import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h2>My Posts</h2>
            <div>
                <h3>Create new post</h3>
                <textarea></textarea>
                <button>Create</button>
            </div>
            <div>
                <Post likeCount={'12'} message={'Hello! How are you?'}/>
                <Post likeCount={'15'} message={'It\'s my first post'}/>
                <Post likeCount={'21'} message={'Wow!'}/>
            </div>
        </div>
    )
}

export default MyPosts