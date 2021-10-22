import React from 'react';
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileDescription/>
            <MyPostsContainer store = {props.store}/>

        </div>
    )
}
export default Profile