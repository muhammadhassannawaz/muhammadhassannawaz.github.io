import React, { Component } from "react";
import "./lines.scss";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoCodepen } from "react-icons/io5";
import { IconContext } from "react-icons";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { SiFiverr } from "react-icons/si";
import Fade from "react-reveal/Fade";

class Lines extends Component {
    render() {
        return (
            <div className="lines primary-text">
                <Fade bottom>
                    <div className="left">
                        <div className="links">
                            <a
                                _blank="true"
                                target="_blank"
                                href="https://www.linkedin.com/in/muhammad-hassan-4611a6228/"
                                className="link"
                            >
                                <IconContext.Provider
                                    value={{
                                        className: "react-icon",
                                    }}
                                >
                                    <IoLogoLinkedin />
                                </IconContext.Provider>
                            </a>
                            <a
                                _blank="true"
                                target="_blank"
                                href="https://github.com/Hassan4243884"
                                className="link"
                            >
                                <IconContext.Provider
                                    value={{
                                        className: "react-icon",
                                    }}
                                >
                                    <IoLogoGithub />
                                </IconContext.Provider>
                            </a>
                            <a
                                _blank="true"
                                target="_blank"
                                href="https://www.fiverr.com/muhammadhass548"
                                className="link"
                            >
                                <IconContext.Provider
                                    value={{
                                        className: "react-icon",
                                    }}
                                >
                                    <SiFiverr />
                                </IconContext.Provider>
                            </a>

                            <a
                                _blank="true"
                                target="_blank"
                                href="https://web.facebook.com/MuhammadHassan884/"
                                className="link"
                            >
                                <IconContext.Provider
                                    value={{
                                        className: "react-icon",
                                    }}
                                >
                                    <IoLogoFacebook />
                                </IconContext.Provider>
                            </a>

                            <a
                                _blank="true"
                                target="_blank"
                                href="https://codepen.io/hassan-at-work"
                                className="link"
                            >
                                <IconContext.Provider
                                    value={{
                                        className: "react-icon",
                                    }}
                                >
                                    <IoLogoCodepen />
                                </IconContext.Provider>
                            </a>
                        </div>
                        <div className="line"></div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="right">
                        <div className="email">
                            <a href="mailto:hassan4243884@gmail.com">
                                hassan4243884@gmail.com
                            </a>
                        </div>
                        <div className="line"></div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Lines;
