import React from "react";
import './Results.css';
import design from '../../images/design.svg';
import history from '../../images/history.svg';
import notifications from '../../images/notifications.svg';
import reviewers from '../../images/reviewers.svg';
import support from '../../images/support.svg';
import templates from '../../images/templates.svg';
import assets from '../../images/assets.svg';
import collab from '../../images/collab.svg';
import {animateCSS} from '../../vendor/constants'

function Results() {

    function animatePulse(e) {
        e.target.classList.remove('animate__');
        e.target.classList.remove('animate__fadeIn')
        animateCSS(e.target, 'heartBeat');
    }

    function animateShake(e) {
        e.target.classList.remove('animate__');
        e.target.classList.remove('animate__fadeIn')
        animateCSS(e.target, 'headShake');
    }

    return (
        <section className="results wow animate__animated animate__fadeIn" data-wow-duration="1s">
            <h2 className="results__title">
                Features that get you results
            </h2>
            <p className="results__subtitle">
                Transform how your teams collaborate. 
                Brainstorm together, develop strategies
                and build ads that guarantee customers.
            </p>
            <div className="results__features">
                <div className="results__feature">
                    <img onClick={animateShake} onMouseMove={animatePulse} className="results__featureImg wow animate__animated animate__fadeIn" src={collab} data-wow-delay=".1s"/>
                    <p className="results__featureImgTitle wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                        Live Collaboration
                    </p>
                </div>
                <div className="results__feature">
                    <img onClick={animateShake} onMouseMove={animatePulse} className="results__featureImg wow animate__animated animate__fadeIn" src={templates} data-wow-delay=".2s"/>
                    <p className="results__featureImgTitle wow animate__animated animate__fadeInDown" data-wow-delay="1s">
                        1M+ Templates
                    </p>
                </div>
                <div className="results__feature">
                    <img onClick={animateShake} onMouseMove={animatePulse} className="results__featureImg wow animate__animated animate__fadeIn" src={assets} data-wow-delay=".3s"/>
                    <p className="results__featureImgTitle wow animate__animated animate__fadeInDown" data-wow-delay="1.1s">
                        Searchable Assets
                    </p>
                </div>
                <div className="results__feature">
                    <img onClick={animateShake} onMouseMove={animatePulse} className="results__featureImg wow animate__animated animate__fadeIn" src={reviewers} data-wow-delay=".4s"/>
                    <p className="results__featureImgTitle wow animate__animated animate__fadeInDown" data-wow-delay="1.2s">
                        Unlimited Reviewers
                    </p>
                </div>
                <div className="results__feature">
                    <img onClick={animateShake} onMouseMove={animatePulse} className="results__featureImg wow animate__animated animate__fadeIn" src={notifications} data-wow-delay=".5s"/>
                    <p className="results__featureImgTitle wow animate__animated animate__fadeInDown" data-wow-delay="1.3s">
                        Notifications
                    </p>
                </div>
                <div className="results__feature">
                    <img onClick={animateShake} onMouseMove={animatePulse} className="results__featureImg wow animate__animated animate__fadeIn" src={design} data-wow-delay=".6s"/>
                    <p className="results__featureImgTitle wow animate__animated animate__fadeInDown" data-wow-delay="1.4s">
                        Responsive Design
                    </p>
                </div>
                <div className="results__feature">
                    <img onClick={animateShake} onMouseMove={animatePulse} className="results__featureImg wow animate__animated animate__fadeIn" src={support} data-wow-delay=".7s"/>
                    <p className="results__featureImgTitle wow animate__animated animate__fadeInDown" data-wow-delay="1.5s">
                        Multiple media support
                    </p>
                </div>
                <div className="results__feature">
                    <img onClick={animateShake} onMouseMove={animatePulse} className="results__featureImg wow animate__animated animate__fadeIn" src={history} data-wow-delay=".8s"/>
                    <p className="results__featureImgTitle wow animate__animated animate__fadeInDown" data-wow-delay="1.6s">
                        Version history
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Results;