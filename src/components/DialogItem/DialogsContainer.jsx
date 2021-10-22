import React from 'react'

import {sendMessageActionCreator, updateMessageActionCreator} from "../../state/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateMessageText: (messageText)=>{
            dispatch(updateMessageActionCreator(messageText));
        },
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator());
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer