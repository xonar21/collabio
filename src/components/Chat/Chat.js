import React from "react";
import './Chat.css';
import close from '../../images/close.png'
import {useValidationCheck} from '../../hooks/useValidation';
import api from '../../vendor/Api';

function Chat(props) {
    const [messageId,SetMessageId] = React.useState('')
    function getToken() {
        return localStorage.getItem("jwt");
      }
    
      React.useEffect(() => {
        tokenCheck();
      }, []);

function tokenCheck() {
    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFlZjg2NmJkODRlMmRmZGNjNWY1ZjciLCJpYXQiOjE2NjI5NzQwODIsImV4cCI6MTY2MzU3ODg4Mn0.5P4K6Jinj4MVf013qwqBJhOCGrocaZtFN3arcrekM8E'
    if (jwt) {
        Promise.all([api.getCardsFromServer()])
        .then(([initialCards]) => {
            setMessage(initialCards);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
}

    const text = React.useRef('')
    const[message,setMessage] = React.useState([ ]);
    //console.log(message)
    const massive = document.querySelectorAll('.chat__message')
    //console.log(massive)
    // React.useEffect(() => {
    //     massive.forEach(mess => {
    //         const msg = document.querySelector('.chat__message')
    //         console.log(props.id)
    //         if (mess.id === props.id) {
    //             console.log('1')
    //             mess.classList.add('chat__messageRight')
    //         } else {
    //             console.log('2')
    //         }
    //     })
    // },[massive])
    
    const {
        values,
        handleChange,
        resetForm,
        errors,
        isValid
    } = useValidationCheck({});
    
    function sendM(e) {
        e.preventDefault();
        e.target.reset();
        send({
            text: text.current.value
        })
        
    }
    
    function scroll() {
        msg.scrollTo({
            top: msg.scrollHeight,
            left: 0,
            behavior: 'smooth'
        })
    }
    const msg = document.querySelector('.chat__groupMessage')
    React.useEffect(() => {
        if (msg) {
            setTimeout(scroll,100)
        }
    })
    function send(res) {
        api.postCard(res)
      .then((mess) => {
        setMessage([...message, mess]);
        values.title = '';
        
        //SetMessageId(mess.owner)
        // if (messageId === props.id) {
        //     msg.classList.add('chat__messageRight')
        // }
      })
      .catch((err) => {
        console.log(err);
      })
    }
    return (
        <section className="chat wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <img className="chat__close" src={close}/>
            <h2 className="chat__title">Chat</h2>
            <div className="chat__groupMessage">
            
                {message.map(ms =>
                    <div className={`chat__message ${ms.owner === props.id ? 'chat__messageRight' : ''}`} id={ms.owner} key={ms._id}>
                        <p className="chat__messageText">{ms.text}</p>
                    </div>
                    )}
                
               
            </div>
            <form onSubmit={sendM} className="chat__form">
                <input ref={text} onChange={handleChange} className="chat__input" type='text' name="title" value={values.title || ''}/>
                <input className="chat__submit" type='submit' value='send'/>
            </form>
            
        </section>
    );
}
export default Chat;