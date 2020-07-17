import React from "react"
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img alt={'logo'} src={'https://www.clipartmax.com/png/full/157-1576440_big-image-photography.png'}/>
        </header>
    )
}

export default Header