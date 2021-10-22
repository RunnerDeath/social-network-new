import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {addPostActionCreator, updatePostActionCreator} from "../../../state/profileReducer";

const MyPosts = (props) => {
    let state = props.profilePage;
    let postsElement = state.postsData.map(post => <Post message={post.message}
                                                               likesCount={post.likesCount}/>)
    let newPostElement = React.createRef()
    let addNewPost = () => {
        props.addNewPost()
    }
    let updatePostText = () => {
        let postText = newPostElement.current.value
        props.updatePostText(postText);

    }
    return <div>
        <div className={s.posts}>
            <h3>My posts</h3>
        </div>
        <div>
            <div className={s.textarea}><textarea ref={newPostElement} value={state.postText}
                                                  onChange={updatePostText} placeholder='Enter your message'></textarea>
            </div>
            <div >
                <button className={s.button} onClick={addNewPost} disabled={!state.postText}>New Post</button>
            </div>
        </div>
        {postsElement}
    </div>
}
export default MyPosts