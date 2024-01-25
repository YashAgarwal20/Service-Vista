import React from "react";
import "./footer.css"

const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <>
            <footer>
                <a href="https://www.linkedin.com/in/yashagarwal20/" className="contacts">@YashAgarwal {year}</a>
            </footer>
        </>

    );

}

export default Footer;
