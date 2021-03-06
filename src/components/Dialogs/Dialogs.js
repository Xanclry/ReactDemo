import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageElements = props.messages.map(m => <Message message={m.message}/>)

    let textAreaElement = React.createRef()

    let addMessage = () => {
        props.onAddMessage()
    }

    let changeTextArea = () => {
        let text = textAreaElement.current.value
        props.onChangeNewMessageText(text)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={changeTextArea} ref={textAreaElement}/>
                <button onClick={addMessage}>New message</button>
            </div>
        </div>
    )
}

export default Dialogs