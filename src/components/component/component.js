import React from "react";

import close from '../../images/close.png'
import api from '../../vendor/Api';
import {useValidationCheck} from '../../hooks/useValidation';
import { Link, Navigate } from 'react-router-dom';

function component() {

    

    return (
        <>
            <Navigate to='signin'/>
        </>
    );
}
export default component;