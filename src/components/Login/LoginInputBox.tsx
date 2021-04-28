import "./LoginInputBox.scss"
import {useRef, useState} from "react";

type LoginInputBoxProps = {
    label: string;
    type: string;
}

export default function LoginInputBox({label, type}: LoginInputBoxProps) {
    const [view, setView] = useState(true);

    return (
        <div className={"login-input-box"}>
            <label htmlFor={`input-${label}`}>{view && label}</label>
            <input type={type} id={`input-${label}`} onFocus={() => setView(false)} onBlur={() => setView(true)}/>
        </div>
    )
}