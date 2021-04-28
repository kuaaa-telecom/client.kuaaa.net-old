import "./LoginBox.scss"
import LoginInputBox from "./LoginInputBox";
import LoginBoxBottom from "./LoginBoxBottom";

export default function LoginBox() {
    return (
        <div className={"login-box"}>
            <span>Log into KUAAA</span>
            <LoginInputBox label={"ID"} type={"text"}/>
            <LoginInputBox label={"Password"} type={"password"}/>
            <LoginBoxBottom />
        </div>
    )
}