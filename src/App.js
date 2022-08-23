import React, { Component } from "react";
import "./components/base.scss";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Side_Lines from "./components/Side_Lines";
import Footer from "./components/footer/Footer";

class App extends Component {
    state = {
        lastScroll: 0,
    };

    componentDidMount = () => {
        window.addEventListener("scroll", (event) => {
            const navbar = document.getElementById("Navbar");
            if (
                window.scrollY < this.state.lastScroll &&
                !("fix" in navbar.classList)
            ) {
                navbar.classList.add("fix");
            } else {
                navbar.classList.remove("fix");
            }
            if (window.scrollY === 0) {
                navbar.classList.remove("fix");
            }
            this.setState({ lastScroll: window.scrollY });
        });
    };
    render() {
        return (
            <div className="App">
                <Side_Lines />
                <Navbar />
                <Main />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Footer />
            </div>
        );
    }
}

export default App;
