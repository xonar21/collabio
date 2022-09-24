import React from "react";
import './Template.css';
import TemplateImg from '../../images/template.svg';

function Template() {

    return (
        <section className="template wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <img className="template__img" src={TemplateImg}/>
            <div className="template__groupText">
                <h2 className="template__title">
                    Collaborate and ship designs
                </h2>
                <p className="template__text">
                    Work on files together in
                    real-time, and review and get
                    feedback without the back and forth.
                </p>
                <ul className="template__ul">
                    <li className="template__li">
                        Produce more ads without spending more time
                    </li>
                    <li className="template__li">
                        Get notified about comments and status updates
                    </li>
                    <li className="template__li">
                        Have one single source of truth for all design
                    </li>
                </ul>
                <button className="template__button">
                    Learn More
                </button>
            </div>
        </section>
    );
}
export default Template;