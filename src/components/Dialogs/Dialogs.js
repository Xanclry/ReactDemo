import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>

}

const Dialogs = (props) => {

    let dialogItemsArray = [
        {id : 1, name : 'Sasha'},
        {id : 2, name : 'Max'},
        {id : 3, name : 'Zahar'},
        {id : 4, name : 'Slava'}
    ]

    let messagesArray = [
        {id : 1, message : 'Hi'},
        {id : 2, message : 'Yo'},
        {id : 3, message : 'How are you?'},
        {id : 4, message : 'Yo again'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                    <DialogItem id={dialogItemsArray[0].id} name={dialogItemsArray[0].name}/>
                    <DialogItem id={dialogItemsArray[1].id} name={dialogItemsArray[1].name}/>
                    <DialogItem id={dialogItemsArray[2].id} name={dialogItemsArray[2].name}/>
                    <DialogItem id={dialogItemsArray[3].id} name={dialogItemsArray[3].name}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesArray[0].message}/>
                <Message message={messagesArray[1].message}/>
                <Message message={messagesArray[2].message}/>
                <Message message={messagesArray[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs