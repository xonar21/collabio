import React from "react";
import './Collab.css';
import ipsum1 from '../../images/ipsum1.svg';
import ipsum2 from '../../images/ipsum2.svg';
import ipsum3 from '../../images/ipsum3.svg';
import ipsum4 from '../../images/ipsum4.svg';
import ipsum5 from '../../images/ipsum5.svg';
import ipsum6 from '../../images/ipsum6.svg';


function Collab() {
    
    return (
        <section className="collab wow animate__animated animate__fadeIn" data-wow-duration="1s">
            <h2 className="collab__title">
                More than 100,000+ teams are using Collab
            </h2>
            <div className="collab__groupLogo ">
                <img className="collab__logo wow animate__animated animate__fadeIn" src={ipsum1} data-wow-delay=".1s"/>
                <img className="collab__logo wow animate__animated animate__fadeIn" src={ipsum2} data-wow-delay=".2s"/>
                <img className="collab__logo wow animate__animated animate__fadeIn" src={ipsum3} data-wow-delay=".3s"/>
                <img className="collab__logo wow animate__animated animate__fadeIn" src={ipsum4} data-wow-delay=".4s"/>
                <img className="collab__logo wow animate__animated animate__fadeIn" src={ipsum5} data-wow-delay=".5s"/>
                <img className="collab__logo wow animate__animated animate__fadeIn" src={ipsum6} data-wow-delay=".6s"/>
            </div>
        </section>
    );
}
export default Collab;