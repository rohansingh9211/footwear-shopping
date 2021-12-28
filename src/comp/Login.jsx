import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router";
const Login = (props) => {
    const nagative = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <div className="body">
                <div >
                    <h1 className="Heading">WELCOME IN SATA FOOTWEAR SHOPPING</h1>
                    <h2 className="SubHeading">Bata - India’s favorite footwear brand</h2>
                    <img className="headingImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/2000px-Ashoka_Chakra.svg.png" />
                </div>

                <div className="Form">
                    <input type="text" className="formInput" placeholder="Gmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="anchorForm">
                        <a href="https://workspace.google.com/intl/en_in/products/gmail/?utm_source=google&utm_medium=cpc&utm_campaign=1010746-Workspace-APAC-IN-en-BKWS-PHR-Golden&utm_content=text-ad-none-none-DEV_c-CRE_535092417287-ADGP_Hybrid%20%7C%20BKWS%20-%20PHR%20%7C%20Txt%20~%20Gmail-KWID_43700065212404142-kwd-365052411&userloc_1007792-network_g&utm_term=KW_g%20mail&gclid=CjwKCAjwk6-LBhBZEiwAOUUDp2Q5mkhOBcksKFHSaETg9PXgHB7rjlgbPcPnoPR6AAWOSday0ht3yRoConAQAvD_BwE&gclsrc=aw.ds" target="_blank">valid gamil</a>
                    </div>
                    <input type="password" className="formInput" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="anchorForm">
                        <a href="https://support.google.com/mail/answer/41078?hl=en&co=GENIE.Platform%3DDesktop" target="_blank" > forgot password</a>
                    </div>
                    <button className="submitBtn" type="submit" onClick={() => { nagative("/home") }}>LOGIN</button>
                    <br />
                    <div className="Container">
                        <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target="_blank">Sign in /</a>
                        <a className="anchortag" href="https://support.google.com/mail/answer/56256?hl=en" target="_blank">Create a new account</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
