import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
            <section id="contact">
                <div id="fo">
                    <h2>Contact Me</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <input
                                id="message"
                                name="message"
                                rows="4"
                                required
                            ></input>
                        </div>
                        <button  type="submit">
                            Submit
                        </button>
                    </form>
                    <Link to={"/"} className="btn btn-primary">
                        Now Go HomePage
                    </Link>
                </div>
            </section>
        </>
    );
};
//  <Link to={"/"} className="btn btn-primary">
//      Now Go HomePage
//  </Link>;
export default About;
