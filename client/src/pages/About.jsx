import React from "react";
import { useAuth } from "../store/Auth";
import Typewriter from 'typewriter-effect';

const About = () => {
    const {user}=useAuth();
    return (
        <>
        
            <main>
            <div className="moving-text">
            <Typewriter
            options={{
                autoStart:true,
                loop:true,
                delay:50,
                strings:["For specific requirements fill out the Requirement-Form after logging in and we will get back to you."]
            }}
            />
            </div>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Welcome to our website {user.username}</p>
                            <h1>Why Choose Us?</h1>
                            <p>
                                Every Customer is Special:
                                Contact us through WhatsApp/ Instagram/ Facebook/ Google or direct call and brief us about you whole requirement. We will also explain you our procedures in detail
                            </p>
                            <p>
                                Fill the requirement form:
                                You can easily register with us online and then filling the requirement form or by visiting our office, whatever is convenient to you and helps you trust us.
                            </p>
                            <p>
                                Receive the profile for any mentioned services:
                                Based on the requirement mentioned by you, we will share the profile of employee that fits into your specifications
                            </p>
                            <p>
        
                                To make process smooth, we first schedule Audio/Video Call for Interview purpose, so you definitely know the candidate before they arrive at your place. You can clearly have all discussions related to work and fees.
                            </p>
                            <p>
                                Receive Candidate’s verification file:
                                
                            </p>
                            <p>For any query click on Connect now button</p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                            </div>
                        </div>
                        <div className="about-img">
                            <img
                                src="/images/about4.png"
                                alt="coding together"
                                width="500px"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;


