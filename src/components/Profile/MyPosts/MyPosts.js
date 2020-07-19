import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post likeCount={p.likeCount} message={p.message}/>)

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
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts