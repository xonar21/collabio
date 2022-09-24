import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Main from '../Main/Main';
import SignIn from '../SignIn/SignIn';
const ProtectedRoute = (props) => (
    
    <Routes>
        {
            props.loggedIn === true ? (
              
                    <Route path='/' element={<Main/>}/>
                
                
            ) :  (
                
                <Route path="/signin" element={<SignIn/>}/>
            ) 
            // : (
                
                
            //     <Route path='/signin' element={<Navigate to="/signin"/>}/>
            //     <Navigate to="/signin" />
            // )
        }

        
       
        
        
    </Routes>
   
)

export default ProtectedRoute