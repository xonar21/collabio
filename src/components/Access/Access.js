import React from "react";
import './Access.css';
import accessImg from '../../images/access.svg';
import circle from '../../images/circle2.svg';
import logo1 from '../../images/ipsum1.svg';
import logo2 from '../../images/ipsum2.svg';
import logo3 from '../../images/ipsum3.svg';
import logo4 from '../../images/ipsum4.svg';
import logo5 from '../../images/ipsum5.svg';
import logo6 from '../../images/ipsum6.svg';

function Access() {

    return (
        <section className="access wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <img className="access__imgBlock" src={accessImg}/>
            <div className="access__textGroup">
                <h2 className="access__title">
                    Get access to premium
                    licensed videos, photos and gifs 
                </h2>
                <p className="access__subtitle">
                    Access a library of icons, videos,
                    photos and gifs by the best creators
                    in the world in one centralized place 
                    for all design needs for your entire team.
                </p>
                <hr className="access__line wow animate__animated animate__fadeInRight" data-wow-delay=".5s"/>
                <div className="access__groupIcon">
                    <img className="access__icon wow animate__animated animate__fadeIn" data-wow-delay="1s" src={logo1}/>
                    <img className="access__icon wow animate__animated animate__fadeIn" data-wow-delay="1.1s" src={logo2}/>
                    <img className="access__icon wow animate__animated animate__fadeIn" data-wow-delay="1.2s" src={logo3}/>
                    <img className="access__icon wow animate__animated animate__fadeIn" data-wow-delay="1.3s" src={logo4}/>
                    <img className="access__icon wow animate__animated animate__fadeIn" data-wow-delay="1.4s" src={logo5}/>
                    <img className="access__icon wow animate__animated animate__fadeIn" data-wow-delay="1.5s" src={logo6}/>
                </div>
                <img className="access__circle2" src={circle}/>
            </div>
        </section>
    );
}
export default Access;