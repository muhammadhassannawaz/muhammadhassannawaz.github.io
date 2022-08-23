import React, { Component } from "react";
import "./footer.scss";
import Fade from "react-reveal/Fade";

class Footer extends Component {
    render() {
        return (
            <section id="contact" className="footer">
                <Fade bottom>
                    <p classname="primary-color primary-text">
                        05. What's Next?
                    </p>
                    <h1 className="heading">Get In Touch</h1>
                    <p className="details">
                        I am currently looking for a great opportunity, and I
                        want to be a part of some software company forever. So I
                        can sharpen the skills I have and learn more. I wanted
                        to be successful in my life.
                    </p>
                    <a
                        className="btn my-4"
                        href="mailto:hassan4243884@gmail.com"
                    >
                        Say Hello
                    </a>
                    <div className="attribute primary-text details">
                        Designed & Built by{" "}
                        <b className="primary-color">Muhammad Hassan</b>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Footer;
