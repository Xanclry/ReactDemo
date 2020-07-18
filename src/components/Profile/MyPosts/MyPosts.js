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
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts