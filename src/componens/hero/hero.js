import React from 'react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero--general">
                    <p>WELCOME TO THE CLUB</p>
                    <h1>Choose Your Programs,
                        <br/>Pick Your Meal,
                        <br/>Let’s Get Healthy.</h1>
                    <p>StayHealty provides Online Training, and Consultation About Diet and Exercise tailored based <br/>on user needs. We will provide a training model that can be accessed anytime and <br/>anywhere with the best trainers.</p>
                </div>
                <div className="des">
                    <button className="btn">Join Now</button>
                    <button className="btn">Contact Us</button>
                </div>
                <div className="hero--youtube">
                    <iframe width="860" height="615" src="https://www.youtube.com/embed/EzB8_STkIQ4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>

            </div>
        </section>
    );
};

export default Hero;