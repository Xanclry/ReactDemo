import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsArray = [
        {id : 1, message : 'Hello! How are you?', likeCount : 12},
        {id : 2, message : 'It\'s my first post', likeCount : 22},
        {id : 3, message : 'Wow!', likeCount : 89},
    ]

    return (
        <div className={s.wrapper}>
            <h2>My Posts</h2>
            <div>
                <h3>Create new post</h3>

                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Create</button>
                </div>
            </div>
            <div>
                <Post likeCount={postsArray[0].likeCount} message={postsArray[0].message}/>
                <Post likeCount={postsArray[1].likeCount} message={postsArray[1].message}/>
                <Post likeCount={postsArray[2].likeCount} message={postsArray[2].message}/>
            </div>
        </div>
    )
}

export default MyPosts