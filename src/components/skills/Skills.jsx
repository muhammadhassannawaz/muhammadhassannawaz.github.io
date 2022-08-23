import React, { Component } from "react";
import "./skills.scss";
import python_logo from "../../images/icons/python.png";
import react_logo from "../../images/icons/react.png";
import js_logo from "../../images/icons/js.png";
import html from "../../images/icons/html.png";
import css from "../../images/icons/css.png";
import aws from "../../images/icons/aws.png";
import django from "../../images/icons/django.png";
import sass from "../../images/icons/sass.png";
import wordpress from "../../images/icons/wordpress.png";
import bootstrap from "../../images/icons/bootstrap.png";
import photoshop from "../../images/icons/photoshop.png";
import php from "../../images/icons/php.png";
import mysql from "../../images/icons/mysql.png";
import postgresql from "../../images/icons/postgresql.png";
import ruby from "../../images/icons/ruby.png";
import jquery from "../../images/icons/jquery.png";
import mui from "../../images/icons/mui.png";
import odoo from "../../images/icons/odoo2.png";
import github from "../../images/icons/github.png";
import bash from "../../images/icons/bash.png";

import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";

class Skills extends Component {
    render() {
        return (
            <section id="skills" className="skills pb-3">
                <div className="heading3 main-heading mt-5 py-3">
                    <Jello>
                        <span>
                            <span className="primary-color primary-text ">
                                02.
                            </span>{" "}
                            What I do
                        </span>
                    </Jello>
                    <div className="line"></div>
                </div>
                <div className="details">
                    I am from Pakistan and currently living in Lahore. Because
                    of having a hard time. I could not study more but IC'S. But
                    I learned different programming languages and became an
                    expert in them. And coding has become my passion.
                </div>

                <h1 className="heading3 mt-5 primary-color primary-text">
                    Expert
                </h1>
                <div className="skills-wrapper">
                    <Fade bottom>
                        <div className="skill">
                            <div className="logo">
                                <img src={python_logo} alt="Python" />
                            </div>
                            <div className="title">Python</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={django} alt="Django" />
                            </div>
                            <div className="title">Django</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={js_logo} alt="JavaScript" />
                            </div>
                            <div className="title">JavaScript</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={react_logo} alt="ReactJS" />
                            </div>
                            <div className="title">ReactJS</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={html} alt="HTML" />
                            </div>
                            <div className="title">HTML5</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={css} alt="CSS" />
                            </div>
                            <div className="title">CSS3</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={sass} alt="SASS" />
                            </div>
                            <div className="title">SASS</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={bootstrap} alt="bootstrap" />
                            </div>
                            <div className="title">Bootstrap5</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={mui} alt="mui" />
                            </div>
                            <div className="title">Material UI</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={wordpress} alt="wordpress" />
                            </div>
                            <div className="title">Wordpress</div>
                        </div>
                    </Fade>
                </div>
                <h1 className="heading3 mt-5 primary-color primary-text">
                    Intermediate
                </h1>
                <div className="skills-wrapper">
                    <Fade bottom>
                        <div className="skill">
                            <div className="logo">
                                <img src={aws} alt="AWS" />
                            </div>
                            <div className="title">AWS</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={github} alt="github" />
                            </div>
                            <div className="title">Github</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={odoo} alt="odoo" />
                            </div>
                            <div className="title">Odoo</div>
                        </div>

                        <div className="skill">
                            <div className="logo">
                                <img src={photoshop} alt="photoshop" />
                            </div>
                            <div className="title">Photoshop</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={jquery} alt="jquery" />
                            </div>
                            <div className="title">Jquery</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={php} alt="php" />
                            </div>
                            <div className="title">PHP</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={mysql} alt="mysql" />
                            </div>
                            <div className="title">MySQL</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={bash} alt="bash" />
                            </div>
                            <div className="title">Linux</div>
                        </div>
                        <div className="skill">
                            <div className="logo">
                                <img src={postgresql} alt="postgresql" />
                            </div>
                            <div className="title">Postgresql</div>
                        </div>

                        <div className="skill">
                            <div className="logo">
                                <img src={ruby} alt="ruby" />
                            </div>
                            <div className="title">Ruby</div>
                        </div>
                    </Fade>
                </div>

                <div className="details my-3">
                    I have basic knowledge of Ruby, and I also worked with
                    firebase, scripting, Docker, web scraping and many more.
                </div>
            </section>
        );
    }
}

export default Skills;
