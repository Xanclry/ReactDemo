import s from './Post.module.css'
import React from "react";


const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt={'profile-pic'} src={'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg'}/>
            <div>
                <div>
                    {props.message}
                </div>
                <div>
                    Likes: {props.likeCount}
                </div>
            </div>
        </div>
    )
}

export default Post