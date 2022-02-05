import React from 'react';
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {connect} from "react-redux";
import * as axios from "axios";
import MyPosts from "./MyPosts/MyPosts";
import {addNewPost, updatePostText} from "../../state/profileReducer";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/`)
            .then(response => {

            });
    }


    render() {
        debugger;

        return <>

            <ProfileDescription/>
            <MyPosts

            postText ={this.props.profilePage.postText}
            postsData = {this.props.profilePage.postsData}
            addNewPost ={this.props.addNewPost}
            updatePostText ={this.props.updatePostText}/>
        </>
    }

}



const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage

    }
}
export default connect(mapStateToProps, {addNewPost, updatePostText})(ProfileContainer)
