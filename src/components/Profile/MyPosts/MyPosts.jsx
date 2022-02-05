import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';


const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message}
                                                               likesCount={post.likesCount}/>)

    //Here is the commenta

    let refPostText = React.createRef()
    let addPost = ()=>{
        props.addNewPost()
    };
    let updatePostText = ()=>{
        let postText = refPostText.current.value
        props.updatePostText(postText)
    };
    return <div>
        <div className={styles.posts}>
            <h3>My posts</h3>
        </div>
        <div>
            <div className={styles.textarea}><textarea ref ={refPostText} value={props.postText}
    onChange={updatePostText} placeholder='Enter your message'/>
            </div>
            <div >
                <button className={styles.button} onClick={addPost} disabled={!props.postText}>New Post</button>
            </div>
        </div>
        {postsElement}
    </div>
}
PRIVET
and somethingNEW
Anotherline
MoreLines
export default MyPosts
