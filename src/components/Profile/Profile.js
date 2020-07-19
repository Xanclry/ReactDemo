import React from "react"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} changeTextArea={props.changeTextArea} addPost={props.addPost}/>
        </div>
    )
}

export default Profile