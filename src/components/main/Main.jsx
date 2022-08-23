import React, { Component } from "react";
import "./main.scss";

import Fade from "react-reveal/Fade";

class Main extends Component {
    render() {
        return (
            <section className="main">
                <div className="details-section">
                    <Fade top>
                        <p className="pt-2">Hi, my name is</p>
                    </Fade>
                    <Fade top>
                        <h1 className="heading">Muhammad Hassan</h1>
                    </Fade>
                    <Fade top>
                        <h1 className=" heading heading2">
                            I build things for the web.
                        </h1>
                    </Fade>
                    <div className="what-i-do details w-50 pt-5">
                        I’m a software engineer specializing in Full-Stack web
                        development,
                        <br /> Python development, and cloud computing(AWS) as
                        well. I love to do coding and learning new technologies.
                    </div>
                    <div className="skills-ref">
                        <a className="btn" href="#skills">
                            Check out my skills
                        </a>
                    </div>
                </div>
                <div className="dp">
                    <img src="" alt="" />
                </div>
            </section>
        );
    }
}

export default Main;
