import "./about.scss";
import React, { Component } from "react";
import dp from "../../images/DP.jpg";
import Zoom from "react-reveal/Zoom";

class About extends Component {
    render() {
        return (
            <section id="about" className="About-Me">
                <div className="dp">
                    <img className="dp-img" src={dp} alt="Muhammad Hassan" />
                </div>
                <div className="details-wrapper">
                    <Zoom>
                        <span className="heading-wrapper mb-3">
                            <span className="line"></span>
                            <span className="heading3 ">
                                <span>01.</span> About Me
                            </span>
                        </span>
                        <p className="details">
                            Hello! My name is <b>Muhammad Hassan</b> and I enjoy
                            creating things that live on the internet. My
                            interest in web development started back in 2017
                            when I decided to try editing custom Tumblr themes —
                            turns out hacking together a custom reblog button
                            taught me a lot about HTML, CSS, & JavaScript!
                        </p>
                        <p className="details">
                            Fast-forward to today, and I’ve had the privilege of
                            working at an{" "}
                            <a
                                className="primary-color"
                                target="_blank"
                                rel="noreferrer"
                                href="https://mafah.co/"
                            >
                                MAFAH Software House
                            </a>{" "}
                            , a start-up, a huge corporation, and on{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="primary-color"
                                href="https://www.fiverr.com/muhammadhass548?source=gig_page"
                            >
                                Fiverr
                            </a>{" "}
                            and Freelancing.
                        </p>
                        <p className="details">
                            {" "}
                            My main focus these days is to secure my future and
                            work in some great Software House so I can continue
                            learning and sharpening my skills.
                        </p>
                        <p className="details">
                            I am currently working at{" "}
                            <a
                                className="primary-color"
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.epazz.com/"
                            >
                                Epazz Software House
                            </a>{" "}
                            in Lahore as a Python and Odoo Senior Developer.
                        </p>
                    </Zoom>
                </div>
            </section>
        );
    }
}

export default About;
