import React, { useEffect } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
    useEffect(() => {
        let hero_container = document.getElementById("hero_container");
        hero_container.style.display = "block";
    });
    return (
        <>
            <div className="main">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-heading">
                            Explore Your Next Adventure
                        </h1>
                        <p className="hero-description">
                            Discover breathtaking destinations and create
                            unforgettable memories.
                        </p>
                        <button className="explore-button">
                            <Link
                                style={{ listStyle: "none", color: "white" }}
                                to={"/DestinationSection"}
                            >
                                Explore Now
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="heading1">
                    <h1>OUR SERVICES</h1>
                    <i className="bi bi-activity"></i>
                </div>

                <div className="cardrow">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-airplane" />
                            </h5>
                            <h5 className="card-subtitle mb-2 text-body-secondary">
                                Air Tickets
                            </h5>
                            <hr />
                            <p className="card-text">
                                At our travel agency, you can book air tickets
                                to any world destination. We also provide online
                                ticket booking via our website in just a couple
                                of steps.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-book-half"></i>{" "}
                            </h5>
                            <h5 className="card-subtitle mb-2 text-body-secondary">
                                Voyages & Cruises
                            </h5>
                            <hr />
                            <p className="card-text">
                                Besides regular tours and excursions, we also
                                offer a variety of cruises & sea voyages for
                                different customers looking for awesome
                                experiences.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-building"></i>
                            </h5>
                            <h5 className="card-subtitle mb-2 text-body-secondary">
                                Hotel Bookings
                            </h5>
                            <hr />
                            <p className="card-text">
                                We offer a wide selection of hotel ranging from
                                5-star ones to small properties located
                                worldwide so that you could book a hotel you
                                like.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-umbrella-fill"></i>
                            </h5>
                            <h5 className="card-subtitle mb-2 text-body-secondary">
                                Tailored Summer Tours
                            </h5>
                            <hr />
                            <p className="card-text">
                                Our agency provides varied tours <br />{" "}
                                including tailored summer <br />
                                tours for clients who are searching for an
                                exclusive and memorable vacation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
