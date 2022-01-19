import React from "react";

function About({title, aboutText, imgSrc ="https://via.placeholder.com/215"}){
    return(
        <aside>
            <img src={imgSrc} alt= {title} />
            <p>{aboutText}</p>
        </aside>
    )
}


export default About;