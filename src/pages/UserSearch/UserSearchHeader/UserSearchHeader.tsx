import MoonIcon from "../../../components/Icons/MoonIcon.tsx";
import SunIcon from "../../../components/Icons/SunIcon.tsx";
import './UserSearchHeader.scss'
import {MouseEventHandler} from "react";

type userSearchHeader = {
    onToggle: MouseEventHandler;
    theme: string;
}

export default function UserSearchHeader({onToggle, theme}: userSearchHeader) {

    return (
        <header className="grid-bleed">
            <div className="header">
                <h1 className="header__header">devfinder</h1>

                <div className="header__theme-switch" onClick={onToggle}>
                    {theme === 'light' ?
                        <>
                            <p>Dark</p>
                            <MoonIcon/>
                        </> :
                        <>
                            <p>Light</p>
                            <SunIcon/>
                        </>}

                </div>
            </div>
        </header>
    )
}