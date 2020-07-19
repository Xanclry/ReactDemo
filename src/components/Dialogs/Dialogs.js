import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageElements = props.state.messages.map(m => <Message message={m.message}/>)

    let textAreaElement = React.createRef()

    let addMessage = () => {
        let text = textAreaElement.current.value;
        alert(text)
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
                <textarea ref={textAreaElement}/>
                <button onClick={addMessage}>New message</button>
            </div>
        </div>
    )
}

export default Dialogs