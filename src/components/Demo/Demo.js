import React from "react";
import './Demo.css';
import plus from '../../images/plus.svg';
import play from '../../images/play.svg';

function Demo() {

    return (
        <section className="demo wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <img className="demo__watchImg" src={play}/>
            <p className="demo__watchText">
                Watch Demo
            </p>
            <div className="demo__amountGroup">
                <div className="demo__amount">
                    <div className="demo__count">
                        <p className="demo__countText">
                            500k
                        </p>
                        <img className="demo__plus" src={plus}/>
                    </div>
                    <p className="demo__text">
                        Collab has garnered more than 500k+ users.
                    </p>
                </div>
                <div className="demo__amount">
                    <div className="demo__count">
                        <p className="demo__countText">
                            500k
                        </p>
                        <img className="demo__plus" src={plus}/>
                    </div>
                    <p className="demo__text">
                        Collab has garnered more than 500k+ users.
                    </p>
                </div>
                <div className="demo__amount">
                    <div className="demo__count">
                        <p className="demo__countText">
                            500k
                        </p>
                        <img className="demo__plus" src={plus}/>
                    </div>
                    <p className="demo__text">
                        Collab has garnered more than 500k+ users.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Demo;