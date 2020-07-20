import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import React from "react";

const DialogsContainer = (props) => {

    let dialogs = props.state.dialogs
    let messages = props.state.messages
    let newMessageText = props.state.newMessageText

    let onAddMessageFunc = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onChangeNewMessageTextFunc = (newText) => {
        props.dispatch(changeNewMessageTextActionCreator(newText))
    }

    return (
        <Dialogs dialogs={dialogs}
                 messages={messages}
                 newMessageText={newMessageText}
                 onAddMessage={onAddMessageFunc}
                 onChangeNewMessageText={onChangeNewMessageTextFunc}/>
    )

}

export default DialogsContainer