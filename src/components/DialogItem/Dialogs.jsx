import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from "./DialogElement/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.dialogsPage.messageData.map(message => <Message name={message.message}/>)
    let textMessageElement = React.createRef()
    let sendMessage = ()=>{
        props.sendMessage()
    };
    let updateMessageText = ()=>{
        let messageText = textMessageElement.current.value
        props.updateMessageText(messageText)
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>

                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            <span className={s.sendMessage}>
                <textarea placeholder='Enter your message here' onChange={updateMessageText} ref = {textMessageElement}
                          value={props.dialogsPage.messageText}></textarea>
                <div><button onClick = {sendMessage} > Send message</button></div></span>
            </div>
        </div>
    )
}
export default Dialogs