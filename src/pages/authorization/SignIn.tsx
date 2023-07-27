import React, {FC, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import s from './SignIn.module.scss'

export const SignIn: FC = () => {
    const [policy, setPolicy] = useState(false);

    return (
        <section className={s.sign_in}>
            <div className={s.sign_in_container}>
                <div className={s.left_container}>
                    <img className={s.logo} src={require('../../assets/layout/header/Frame 1.svg').default} alt=""/>
                    <div className={s.left_content}>
                        <div className={s.top_content}>
                            <p className={s.header}>Get Started Now</p>
                            <p className={s.title}>Enter your credentials to access your account</p>
                        </div>
                        <div className={s.alternative_auth}>
                            <button className={s.google}><img className={s.google_img} src={require('../../assets/Authorization/sign-in/Frame 2.svg').default} alt=""/> Log In with Google</button>
                            <button className={s.apple}><img src={require('../../assets/Authorization/sign-in/Vector (7).svg').default} alt=""/> Log In with Apple</button>
                        </div>
                        <form className={s.form_auth} action="">
                            <div className={s.form_inputs}>
                                <p className={`${s.email_header} ${s.form_header}`}>Email address</p>
                                <input className={`${s.email_input} ${s.form_input}`} type="email"/>
                                <p className={`${s.password_header} ${s.form_header}`}>Password</p>
                                <input className={`${s.password_input} ${s.form_input}`} type="password"/>
                            </div>
                            <label htmlFor={'checkbox-policy'} className={s.agreement_policy}>
                                <input onChange={(e) => setPolicy(e.target.checked)} id='checkbox-policy' type="checkbox"/>
                                <span className={s.checkbox_style}></span>
                                <p className={s.policy_text}>I agree to the Term & Privacy</p>
                            </label>
                            <button className={s.button_login}>Login</button>
                            <p className={s.go_sign_up}>Have an account? <Link to='signUp'>Sign Up.</Link></p>
                        </form>
                    </div>
                </div>
                <img className={s.right_content_img} src={require('../../assets/Authorization/sign-in/pexels-any-lane-5727885 1.svg').default} alt=""/>
            </div>
        </section>
    )
}