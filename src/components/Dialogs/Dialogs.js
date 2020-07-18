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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                    <DialogItem id={'1'} name={'Sasha'}/>
                    <DialogItem id={'2'} name={'Max'}/>
                    <DialogItem id={'3'} name={'Zahar'}/>
                    <DialogItem id={'4'} name={'Slava'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Yo'}/>
                <Message message={'How are you'}/>
                <Message message={'Yo again'}/>
            </div>
        </div>
    )
}

export default Dialogs