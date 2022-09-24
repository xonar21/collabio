import React from "react";
import './Teams.css';
import circle4 from "../../images/circle4.svg";
import circle5 from "../../images/circle5.svg";
import teams1 from "../../images/teams1.svg";
import teams2 from "../../images/teams2.svg";
import credit from "../../images/nocreditwhite.svg";
function Teams() {
    
    return (
        <section className="teams wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <h2 className="teams__title">
                99.9% teams love Collab. Not convinced you’re one?We love a challenge.
            </h2>
            <button className="teams__button">
                Start your free trial
            </button>
            <img className="teams__img1 position" src={teams1}/>
            <img className="teams__img2 position" src={teams2}/>
            <img className="teams__credit position" src={credit}/>
            <img className="teams__circle4 position" src={circle4}/>
            <img className="teams__circle5 position" src={circle5}/>
        </section>
    );
}
export default Teams;