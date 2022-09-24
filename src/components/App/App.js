import React from "react";
import './App.css';
import '../Page/Page.css';
import Header from '../Header/Header';
import Trial from '../Trial/Trial';
import Collab from '../Collab/Collab';
import Results from '../Results/Results';
import Template from '../Template/Template';
import Build from '../Build/Build';
import Access from '../Access/Access';
import Issimple from '../Issimple/Issimple';
import Hear from '../Hear/Hear';
import Demo from '../Demo/Demo';
import Tools from '../Tools/Tools';
import Articles from '../Articles/Articles';
import Teams from '../Teams/Teams';
import Footer from '../Footer/Footer';
import Chat from '../Chat/Chat';
import Main from '../Main/Main';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import { Routes, Route, useHistory,useNavigate } from 'react-router-dom'
import 'animate.css';
import WOW from 'wowjs';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Component from "../component/component";
import api from '../../vendor/Api';
function App() {
  const [loggedIn, setloggedIn] = React.useState(false); 
  const [id, setId] = React.useState('6329ad4946b2d5b4fb6fdb1e')
  React.useEffect(() => {
    new WOW.WOW({
        live: false
    }).init();
    tokenCheck()
  }, [])
  
  const tokenCheck = () => {
    const token = localStorage.getItem('token')
    if (token) {
      setloggedIn(true)
      navigate('/')
    }
  }

  const navigate = useNavigate();

  function login(res) {
    api.login(res)
        .then((data) => {
            localStorage.setItem('token', data.token)
            setloggedIn(true)
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
}
function registration(res) {
  api.register(res)
      .then((data) => {
          setId(data._id)
      })
      .catch((err) => {
          console.log(err);
      })
}

  return (
    <div className="App">
      <div className='page'>
        
        <Routes>
          {
            loggedIn === true ? (
                <Route path='/' element={<Main id={id}/>}/>
          
              ) :  (
                <Route path='/' element={<Component/>}/>
              ) 
          }
          <Route path='/signin' element={<SignIn login={login}/>}/>
          <Route path='/signup' element={<SignUp register={registration}/>}/>     
        </Routes>
      </div>
    </div>
  );
}

export default App;
