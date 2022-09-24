import React from "react";
import './SignIn.css';
import close from '../../images/close.png'
import api from '../../vendor/Api';
import {useValidationCheck} from '../../hooks/useValidation';
import { Link, useNavigate } from 'react-router-dom';

function SignIn(props) {
    const navigate = useNavigate();

    const { values, isValid, handleChange, errors } = useValidationCheck({
        email: '',
        password: '',
     })

    function closePopup() {
        const popup = document.querySelector('.signUp')
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
    }

    function reg(e) {
        e.preventDefault();
        props.login(values)
        
    }

    return (
    
        <>
        
        <section className="signIn" >
            
            <div className="signIn__center">
                <img className="signIn__close" onClick={closePopup} src={close}/>
                <h2 className="signIn__title">
                    Login
                </h2>
                <form className="signIn__form" onSubmit={reg}>
                    <ul className="signIn__ul">
                        <li className="signIn__groupPassword signIn__li">
                            <label className="signIn__passwordTitle signIn__label">
                                Password
                            </label>
                            <input className="signIn__password signIn__input" type='password' name='password' values={values.password} onChange={handleChange}/>
                        </li>
                        <li className="signIn__groupPassword signIn__li">
                            <label className="signIn__passwordTitle signIn__label">
                                Email
                            </label>
                            <input className="signIn__password signIn__input" type='email' name='email' values={values.email} onChange={handleChange}/>
                        </li>
                    </ul>
                    <Link className="signIn__signup" to='/signup'>Sign up</Link>
                    <button className="signIn__button" type="submit">
                        Sign in
                    </button>
                </form>
            </div>
            
        </section>
        
        </>
    );
}
export default SignIn;