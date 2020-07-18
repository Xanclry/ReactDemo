import s from "./ProfileInfo.module.css";
import React from "react";


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.backgroundImg}>
                <img alt={'logo'} src={'https://www.ejin.ru/wp-content/uploads/2019/05/gora-22.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                {/*<img src={'https://yt3.ggpht.com/a/AATXAJwUJku4i_6dn6EU--eL9dEY3fplFN2fjiPYjQ=s900-c-k-c0xffffffff-no-rj-mo'}/>*/}
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo