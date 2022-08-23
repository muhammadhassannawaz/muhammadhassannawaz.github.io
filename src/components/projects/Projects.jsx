import React, { Component } from "react";
import "./projects.scss";
import chatroom from "../../images/ChatRoom.jpg";
import TodoApp from "../../images/ToDOAPP.jpg";
import weather from "../../images/weather.jpg";
import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";

class Projects extends Component {
    render() {
        return (
            <section id="projects" className="projects">
                <div className="heading3 main-heading mt-2 py-3">
                    <Jello>
                        <span>
                            <span className="primary-color primary-text ">
                                04.
                            </span>{" "}
                            Some of my Work
                        </span>
                    </Jello>
                    <div className="line"></div>
                </div>
                <div className="details mb-4">
                    Here is the demo of my short projects in my learning and
                    experienced journey. I am currently working on Facebook Ad
                    Library API as well as other scrapping Projects.
                </div>
                <Fade left>
                    <div class="project-container">
                        <div class="project">
                            <div class="project-content">
                                <div class="project-label">
                                    Featured Project
                                </div>
                                <h4 class="project-title">
                                    A Simple Chat Room
                                </h4>
                                <div class="project-details">
                                    <p className="details">
                                        I created this project just to practice
                                        with the{" "}
                                        <span className="primary-color">
                                            Django Authentication and
                                            Authorization.
                                        </span>{" "}
                                        This is my very first project in Django.
                                        and I used Django forms, URLs, CBV,
                                        Mixins, CustomUserModel, Custom models,
                                        and many more. The frontend of this
                                        project is developed using simple HTML5
                                        and CSS.
                                    </p>
                                    <ul>
                                        <li>Python</li>
                                        <li>Django</li>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="project-img">
                                <img src={chatroom} />
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div class="project-container">
                        <div class="project">
                            <div class="project-img">
                                <img src={weather} alt="" />
                            </div>
                            <div class="project-content">
                                <div class="project-label">
                                    Featured Project
                                </div>
                                <h4 class="project-title">Weather App</h4>
                                <div class="project-details">
                                    <p className="details">
                                        This project shows the usage of API'S. I
                                        created this project using Weather API
                                        to better understand the API
                                        requirements. Now I can easily create
                                        API as well as use them for post
                                        requests, get requests, and put requests
                                    </p>
                                    <ul>
                                        <li>Python</li>
                                        <li>Django</li>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>API</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div class="project-container">
                        <div class="project">
                            <div class="project-content">
                                <div class="project-label">
                                    Featured Project
                                </div>
                                <h4 class="project-title">A Simple TODO APP</h4>
                                <div class="project-details">
                                    <p className="details">
                                        This project shows the use case of
                                        database operations like create, update,
                                        delete, and add data to a database and
                                        relations between tables and fields. I
                                        used Django for this project too and for
                                        the frontend simple HTML and CSS.
                                    </p>
                                    <ul>
                                        <li>Python</li>
                                        <li>Django</li>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>Database</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="project-img">
                                <img src={TodoApp} alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div class="project-container">
                        <div class="project">
                            <div class="project-img">
                                <img
                                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt=""
                                />
                            </div>
                            <div class="project-content">
                                <div class="project-label">
                                    Featured Project
                                </div>
                                <h4 class="project-title">
                                    YouTube Subscriber Bot
                                </h4>
                                <div class="project-details">
                                    <p className="details">
                                        This was kind of big project for me as
                                        the idea was to create a real{" "}
                                        <span className="primary-color">
                                            YouTube Subscriber
                                        </span>{" "}
                                        app for the startups. This app needs a
                                        community of 1000 people and then it
                                        will start the process of subscribing.
                                        This BOT will open random channels for
                                        each person and and open its link on the
                                        chrome bro uuing ssing selenium. and
                                        then it willopete the the process of
                                        subscribing.
                                    </p>
                                    <ul>
                                        <li>Python</li>
                                        <li>Selenium</li>
                                        <li>PyQT5</li>
                                        <li>LOGIC</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Projects;
