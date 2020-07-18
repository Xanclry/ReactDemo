import React from "react"
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.backgroundImg}>
                <img alt={'logo'} src={'https://www.ejin.ru/wp-content/uploads/2019/05/gora-22.jpg'}/>
            </div>
            <div>
                {/*<img src={'https://yt3.ggpht.com/a/AATXAJwUJku4i_6dn6EU--eL9dEY3fplFN2fjiPYjQ=s900-c-k-c0xffffffff-no-rj-mo'}/>*/}
                ava + desc
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile