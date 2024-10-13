import { borderRadius, fontSize } from "@mui/system";
import React from "react";
import SkillBar from 'react-skillbars';

const styleCard = {
  minHeight: "600px",
  paddingBottom: "50px",
  margin: "10px",
  width: "40%",
  borderRadius: "20px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",

  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  alignItems: "center",
}

const styleSkillbar = {
  paddingTop: "50px",
  width:"70%",
}

const styleColors = {
  bar: "#7b42bcff",
  title: {
    text: "#fff",
    background: "#2E073F"
  }
};

function SkillsetCard(props){
  
    const title = props.name;
    const skills = props.skills;


  return (
    <div style={styleCard}>
        <h2 style={{paddingTop:"50px", alignItems:"center", textAlign:"center"}}>{title}</h2>
        <div style={styleSkillbar}>
         <SkillBar skills={skills} height={20} colors={styleColors} symbolColor={"#2E073F"} animationDuration={1000}  animationThreshold={0.8}/>
        </div>
    </div>
  )
}

export default SkillsetCard;