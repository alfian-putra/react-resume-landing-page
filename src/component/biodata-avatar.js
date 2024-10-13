import React from "react";


const avatarStyle = {
    position: "relative",
    width: "200px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "50%"
};

function BiodataAvatar(props){

  return (
    <div style={avatarStyle}>
        <img src={props.image} style={{width: "100%", height: "auto"}}/>
    </div>
  )
}

export default BiodataAvatar;
