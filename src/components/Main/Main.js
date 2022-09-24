import React from "react";
import './Main.css';
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

function Main(props) {
console.log(props)
    return (
        <section className="main" >
            
            <Header/>
            <Trial/>
            <Collab/>
            <Results/>
            <Template/>
            <Build/>
            <Access/>
            <Issimple/>
            <Hear/>
            <Demo/>
            <Tools/>
            <Articles/>
            <Teams/>
            <Footer/>
            <Chat id={props.id}/>
        </section>
    );
}
export default Main;