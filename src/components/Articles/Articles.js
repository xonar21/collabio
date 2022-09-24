import React from "react";
import './Articles.css';
import branding from '../../images/branding.png';
import business from '../../images/business.png';
import startup from '../../images/startup.png';

function Articles() {
    
    return (
        <section className="articles wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <h2 className="articles__title">
                Read latest articles of Collab
            </h2>
            <div className="articles__groupCard">
                <div className="articles__card">
                    <img className="articles__img" src={branding}/>
                    <p className="articles__name articles__name_branding">
                        Branding
                    </p>
                    <p className="articles__text">
                        Branding with personality: What makes you stand out
                    </p>
                    <p className="articles__date">
                        April 22, 2022  5 min read
                    </p>
                </div>
                <div className="articles__card">
                    <img className="articles__img" src={branding}/>
                    <p className="articles__name articles__name_business">
                        Business
                    </p>
                    <p className="articles__text">
                        Is the generic visual brand guide outdated?
                    </p>
                    <p className="articles__date">
                        April 22, 2022   8 min read
                    </p>
                </div>
                <div className="articles__card">
                    <img className="articles__img" src={branding}/>
                    <p className="articles__name articles__name_startup">
                        Startup
                    </p>
                    <p className="articles__text">
                        30 ads that made our heads turn: Making ads that convert
                    </p>
                    <p className="articles__date">
                        April 22, 2022   4 min read
                    </p>
                </div>
            </div>
            
        </section>
    );
}
export default Articles;