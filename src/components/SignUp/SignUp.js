import React from "react";
import './SignUp.css';
import close from '../../images/close.png'
import api from '../../vendor/Api';
import {useValidationCheck} from '../../hooks/useValidation';

import { Link } from 'react-router-dom';

function SignUp(props) {

    const { values, isValid, handleChange, errors } = useValidationCheck({
        email: '',
        password: '',
        name: '',
        type: '',
     })

    function closePopup() {
        const popup = document.querySelector('.signUp')
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
    }

    
    function reg(e) {
        e.preventDefault();
        props.register(values)
        
    }

    return (
        <section className="signUp " >
            <div className="signUp__center">
                <img className="signUp__close" onClick={closePopup} src={close}/>
                <h2 className="signUp__title">
                    Registration
                </h2>
                <form className="signUp__form" onSubmit={reg}>
                    <ul className="signUp__ul">
                        <li className="signUp__groupSelect signUp__li">
                            <label className="signUp__selectTitle signUp__label">
                                Select account type
                            </label>
                            <select className="signUp__select" name='type' values={values.type} required onChange={handleChange}>
                                <option defaultValue ></option>
                                <option className="signUp__operator" value='operator'>Operator</option>
                                <option className="signUp__user" value='user'>User</option>
                            </select>
                        </li>
                        <li className="signUp__groupName signUp__li">
                            <label className="signUp__nameTitle signUp__label">
                                Name
                            </label>
                            <input className="signUp__name signUp__input" type='text' name='name' values={values.name} onChange={handleChange}/>
                        </li>
                        <li className="signUp__groupPassword signUp__li">
                            <label className="signUp__passwordTitle signUp__label">
                                Password
                            </label>
                            <input className="signUp__password signUp__input" type='password' name='password' values={values.password} onChange={handleChange}/>
                        </li>
                        <li className="signUp__groupPassword signUp__li">
                            <label className="signUp__passwordTitle signUp__label">
                                Email
                            </label>
                            <input className="signUp__password signUp__input" type='email' name='email' values={values.email} onChange={handleChange}/>
                        </li>
                    </ul>
                    <Link className="signUp__signin" to='/signin'>Sign in</Link>
                    <button className="signUp__button" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
}
export default SignUp;