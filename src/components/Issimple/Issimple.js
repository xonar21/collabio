import React from "react";
import './Issimple.css';
import card1 from '../../images/card1.svg';
import card2 from '../../images/card2.svg';
import card3 from '../../images/card3.svg';
function Issimple() {

    return (
        <section className="issimple wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <h2 className="issimple__title">
                Collab is simple, fast and fun
            </h2>
            <div className="issimple__groupCard">
                <div className="issimple__card wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                    <img className="issimple__img" src={card1}/>
                    <h3 className="issimple__subtitle">
                        Connect with your team
                    </h3>
                    <p className="issimple__text">
                        Collaborate on designs in multiple
                        ways--by commenting, co-working, 
                        chatting and jumping on quick huddles.
                    </p>
                </div>
                <div className="issimple__card wow animate__animated animate__fadeInDown" data-wow-delay=".6s">
                    <img className="issimple__img" src={card2}/>
                    <h3 className="issimple__subtitle">
                        Build high-converting ads
                    </h3>
                    <p className="issimple__text">
                        Use different formats and
                        pre-built templates, and 
                        make marketing creatives 
                        without starting from scratch.
                    </p>
                </div>
                <div className="issimple__card wow animate__animated animate__fadeInDown" data-wow-delay=".7s">
                    <img className="issimple__img" src={card3}/>
                    <h3 className="issimple__subtitle">
                        Organize and share
                    </h3>
                    <p className="issimple__text">
                        Set up folders, manage permissions, 
                        vote on creatives and time-box work 
                        with Collab.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Issimple;