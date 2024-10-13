import React, { useState } from "react";
import './biodata-bio-style.css';

function BiodataBio(props){

    return (
    <div>
        <h2 style={{ color: '#7b42bcff' , margin : "5px"}}>{props.name}</h2>
        <h1 style={{margin : "5px"}}>{props.whoami}</h1>
        <p style={{margin : "5px", width : "500px" , overflowWrap : "break-word"}}> {props.bio} </p>    

        <div id="buttonSection">
            <div id="button">
                <a  id="bStyle" href="https://www.linkedin.com/in/alfian-eza-putra-481005289/" target="_blank">
                <b>LinkedIn</b>
                </a>
            </div>

            <div id="button">
                <a  id="bStyle" href="https://github.com/alfian-putra" target="_blank">
                <b>Github</b>
                </a>
            </div>
        </div>
    </div>

    )
}

export default BiodataBio;
