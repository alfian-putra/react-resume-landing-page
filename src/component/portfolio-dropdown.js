import React, { useState } from "react";
import {
    DropdownMenu,
    DropdownItem,
    Dropdown,
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



const styleDropdown = {
    width : "700px",
    padding: "5px",
    fontSize: "16px",
}

const styleLine = {
    width : "750px",
    padding: "5px",
    paddingLeft : "20px",
    /*
    borderStyle:"solid",
    borderColor: "#7b42bcff",
    borderWidth: "2px",
    */
    borderRadius : "10px",
    backgroundColor: "white",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)"

}

const styleItem = {
    width : "700px",
}

function PortfolioDropdown(props){
    //example
     const name = props.name
     const ls = props.list
    
    //const ls = props.list;

    let list_menu = [];

    Object.entries(ls).map(entry => {
        let label = entry[0];
        let link = entry[1];
        list_menu.push(
            <DropdownItem style={styleItem}>
                <a href={link} target="_blank">{label}</a>
            </DropdownItem>
        )
    })


    return (
        <div id="line" style={styleLine}>

            <Dropdown /*icon='angle down'
                      fluid*/
                      icon = ""
                      text={props.name} 
                      style={styleDropdown}
            >

                <DropdownMenu>
                {
                    list_menu
                }       
                </DropdownMenu>
            </Dropdown>
        </div>
 
    )
}

export default PortfolioDropdown;