import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <section id="error-page">
                <div id="content">
                    <div className="content">
                        <h2 className="header">404</h2>
                        <h4>Sorry! Page not found</h4>
                        <p>
                            Ooops! It seems like the page you are trying to access doesnt exist.
                            If you believe there is an issue, feel free to report it, and we'll look into it.
                        </p>
                        <div className="btns">
                            <NavLink to="/">Return Home</NavLink>
                            <NavLink to="/contact">Report problem</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Error;