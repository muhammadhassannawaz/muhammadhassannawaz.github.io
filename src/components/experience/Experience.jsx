import React, { Component } from "react";
import "./experience.scss";
import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";

class Experience extends Component {
    toggleActive = (id, event) => {
        let active_el = document.querySelectorAll(".active");
        active_el.forEach((element) => {
            element.classList.remove("active");
        });
        document.getElementById(id).classList += " active";
        event.target.classList += " active";
    };

    render() {
        return (
            <section id="experience" className="experience-wrapper">
                <div className="heading3 main-heading mt-5 py-3">
                    <Jello>
                        <span>
                            <span className="primary-color primary-text ">
                                03.
                            </span>{" "}
                            Where I’ve Worked
                        </span>
                    </Jello>
                    <div className="line"></div>
                </div>

                <div className="wrapper">
                    <Fade left>
                        <div className="titles primary-color primary-text">
                            <button
                                onClick={(e) => this.toggleActive("epazz", e)}
                                className="title active"
                            >
                                Epazz
                            </button>
                            <button
                                onClick={(e) => this.toggleActive("mafah", e)}
                                className="title"
                            >
                                MAFAH
                            </button>
                            <button
                                onClick={(e) => this.toggleActive("ztabs", e)}
                                className="title"
                            >
                                ZTABS
                            </button>
                            <button
                                onClick={(e) =>
                                    this.toggleActive("freelancing", e)
                                }
                                className="title"
                            >
                                Freelancing
                            </button>
                        </div>
                    </Fade>
                    <div id="epazz" className="details-wrapper active">
                        <Fade right>
                            <div className="heading3">
                                Python Developer{" "}
                                <span className="primary-color">@ Epazz</span>
                            </div>
                            <div className="details date primary-text  pb-3">
                                January 2022 - Present
                            </div>
                            <div className="details">
                                <ul>
                                    <li>
                                        Write modern, performant, maintainable
                                        code for a diverse array of client and
                                        internal projects
                                    </li>
                                    <li>
                                        Work with a variety of different
                                        languages, platforms, frameworks, and
                                        content management systems such as
                                        JavaScript, XML, SCSS, ODOO, Django, and
                                        WordPress.
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <div id="mafah" className="details-wrapper ">
                        <Fade bottom>
                            <div className="heading3">
                                Full-Stack Web Developer{" "}
                                <span className="primary-color">@ MAFAH</span>
                            </div>
                            <div className="details date primary-text  pb-3">
                                July 2021 - December 2021
                            </div>
                            <div className="details">
                                <ul>
                                    <li>
                                        Write modern, performant, maintainable
                                        code for a diverse array of client and
                                        internal projects
                                    </li>
                                    <li>
                                        Work with a variety of different
                                        languages, platforms, and frameworks
                                        such as JavaScript, PHP, Wordpress,
                                        MySQL, ReactJS, HTML, CSS, and ES6+.
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <div id="ztabs" className="details-wrapper ">
                        <Fade bottom>
                            <div className="heading3">
                                Front-End Web Developer{" "}
                                <span className="primary-color">@ ZTABS</span>
                            </div>
                            <div className="details date primary-text  pb-3">
                                January 2021 - July 2021
                            </div>
                            <div className="details">
                                <ul>
                                    <li>
                                        Write modern, performant, maintainable
                                        code for a diverse array of client and
                                        internal projects
                                    </li>
                                    <li>
                                        Work with a variety of frontEnd
                                        programming languages such as HTML, CSS,
                                        JS and Bootstrap.
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <div id="freelancing" className="details-wrapper ">
                        <Fade bottom>
                            <div className="heading3">
                                Python/AWS/Web Developer{" "}
                                <span className="primary-color">
                                    @ FIVERR / Companies
                                </span>
                            </div>
                            <div className="details date primary-text  pb-3">
                                january 2019 - December 2020
                            </div>
                            <div className="details">
                                <ul>
                                    <li>
                                        Write modern, performant, maintainable
                                        code for a diverse array of client and
                                        internal projects
                                    </li>
                                    <li>
                                        Work with AWS assignments, Python
                                        Scripting, Python Scrapping, Django,
                                        ReactJS, FrontEND, BackEnd,
                                        Django-Rest-Framework, SCSS, and Many
                                        more.
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
