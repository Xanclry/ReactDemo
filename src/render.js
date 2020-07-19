import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export let rerenderApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}