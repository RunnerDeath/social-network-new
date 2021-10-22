import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updatePostActionCreator} from "../../../state/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (postText) => {
            dispatch(updatePostActionCreator(postText))
        }
    }

};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer