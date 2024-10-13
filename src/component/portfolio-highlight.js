import React from "react";

import "./portfolio-highlight-style.css";


function PortfolioHighligh(props){
    /*
    const logo = LogoPrometheus;
    const title = "Node Exporter, Prometheus, & Grafana";
    const link = "https://www.google.com"
    */
  const logo = props.logo
  const title = props.title
  const link = props.link

  return (
    <div>
        <a href={link} target="_blank">
            <div id="container">        
                <img src={logo} id="logo"/>   
                <div id="overlay"></div>     
                <div id="title"><b>{title}</b></div>
            </div>
        </a>  
    </div>


  )
}

export default PortfolioHighligh;