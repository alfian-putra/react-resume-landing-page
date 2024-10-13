import React, { useState } from "react";
import Position from "rsuite/esm/internals/Overlay/Position";

const allStyle = {
    paddingLeft: "10px",
    display: "flex",
    alignItems : "start"
}
const bulletStyle = {
    paddingRight: "50px",
    width: "20px",
    color: "white",
}

function EducationExperientItem(props){
    /*
    const institution= "State Vocational High School 3 Yogyakarta"
    const year = "2016-2019"
    const desc = "Network and Computer Engineering"
    */
    const institution= props.institution
    const year = props.year
    const desc = props.desc

    return (
    <div style={allStyle}>
        <div style={bulletStyle}>
            <h3>►</h3>
        </div>
        <div>
            <div style={{maxWidth: "500px" , color: "white", paddingBottom:"10px"}}>
                <h3>{institution}</h3>
            </div>
            <div style={{
                 display: "flex",
            }}>
                <div style={{color: "yellow" }}>
                    {year}
                </div>
                <div style={{color: "white" , paddingLeft: "20px", paddingBottom:"20px"}}>
                    {desc}
                </div>
            </div>
        </div>
    </div>
    )
}

export default EducationExperientItem;