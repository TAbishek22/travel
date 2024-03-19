import React from "react";
import "./Destination.css";
const DestinationSection = () => {
    return (
        <>
            <div className="maincontent">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                src="https://media.istockphoto.com/id/637079976/photo/tourists-at-taj-mahal.jpg?s=1024x1024&w=is&k=20&c=b3cfYt7V8gO0qMAmgROZ0Dg1k0fc-1dd2PHOiiwGm1Q="
                                class="d-block w-100"
                                alt="..."
                                style={{ width: "100%", height: "700px" }}
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Taj Mahal</h5>
                                <p>
                                    Some representative placeholder content for
                                    the first slide.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                src="https://images.unsplash.com/photo-1674981489818-f12299e4208a?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                class="d-block w-100"
                                alt="..."
                                style={{ width: "100%", height: "700px" }}
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Tanjore Temple</h5>
                                <p>
                                    Some representative placeholder content for
                                    the second slide.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                id="large"
                                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                class="d-block w-100"
                                alt="..."
                                style={{ width: "100%", height: "700px " }}
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>London Paris</h5>
                                <p>
                                    Some representative placeholder content for
                                    the third slide.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default DestinationSection;
