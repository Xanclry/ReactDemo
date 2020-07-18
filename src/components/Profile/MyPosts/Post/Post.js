import s from './Post.module.css'
import React from "react";


const Post = () => {
    return (
        <div className={s.item}>
            <img alt={'profile-pic'} src={'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg'}/>
            My Post
        </div>
    )
}

export default Post