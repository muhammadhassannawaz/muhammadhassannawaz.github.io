import React, { Component } from "react";
import "./preloader.css";

class PreLoader extends Component {
    render() {
        return (
            <section className="preloader">
                <div className="loader"></div>
            </section>
        );
    }
}

export default PreLoader;
