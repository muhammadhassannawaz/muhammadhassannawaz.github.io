import React, { Component } from "react";
import "../base.scss";
import "./navbar.scss";
import logo from "../../images/logo6.png";
import Fade from "react-reveal/Fade";
class Navbar extends Component {
    state = {
        navbarShow: false,
    };
    navbarHandler = (event) => {
        const ul = document.querySelector(".navbar ul");
        const navbar = document.querySelector(".mobile-view");
        const toggler = document.querySelector(".toggler a");
        if (this.state.navbarShow === false) {
            ul.classList.add("active");
            toggler.classList.add("on");
            navbar.style.height = "100vh";
            this.state.navbarShow = true;
        } else {
            ul.classList.remove("active");
            navbar.style.height = "80px";
            toggler.classList.remove("on");

            this.state.navbarShow = false;
        }
    };
    render() {
        return (
            <div id="Navbar" className="navbar mobile-view">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="LOGO" />
                    </a>
                </div>
                {this.elem}
                <Fade top>
                    <div className="nav-links">
                        <ul>
                            <li>
                                <a href="#about">
                                    <span>01.</span> About
                                </a>
                            </li>
                            <li>
                                <a href="#skills">
                                    <span>02.</span> Skills
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="#experience">
                                    <span>03.</span> Experience
                                </a>
                            </li>
                            <li>
                                <a href="#projects">
                                    <span>04.</span> Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <span>05.</span> Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    className="btn"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1sy1J4HhShxLlVMG5WuPndCrwnBJ9BEhZ/view?usp=sharing"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </Fade>
                <div className="toggler">
                    <a onClick={this.navbarHandler} id="toggle">
                        <span></span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;
