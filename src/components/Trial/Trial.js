import React from "react";
import './Trial.css';
import noCredit from '../../images/nocredit.svg';
import circle from '../../images/circle.svg';
import avatar1 from '../../images/avatar1.svg';
import avatar2 from '../../images/avatar2.svg';
import block1 from '../../images/block1.svg';
import block2 from '../../images/block2.svg';
import block3 from '../../images/block3.svg';
function Trial() {
    return (
        <section className="trial">
            <div className="tools__sausageGroup">
                <div className="tools__sausageYellow"></div>
                <div className="tools__sausageBlue"></div>
            </div>
            <div className="trial__textGroup animate__animated animate__fadeInLeft">
                <h1 className="trial__title">
                    Transform your teamwork
                    with a powerful design tool
                </h1>
                <p className="trial__subtitle">
                    Stop wasting time with clunky, 
                    siloed teamwork. Get every stakeholder 
                    on the same page with a design tool 
                    that help you work better, faster.
                </p>
                <button className="trial__button" type="button">
                    Start your free trial
                </button>
                <img className="trial__noCredit" src={noCredit}/>
            </div>
            <div className="trial__imageGroupe animate__animated animate__fadeInRight">
                <img className="trial__image trial__circle" src={circle}/>
                <img className="trial__image trial__avatar1" src={avatar1}/>
                <img className="trial__image trial__avatar2" src={avatar2}/>
                <img className="trial__image trial__block1" src={block1}/>
                <img className="trial__image trial__block2" src={block2}/>
                <img className="trial__image trial__block3" src={block3}/>
            </div>
        </section>
    );
}
export default Trial;