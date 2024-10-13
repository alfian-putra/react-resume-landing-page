import { borderRadius, fontSize } from "@mui/system";
import React, { useState } from "react";
import "./certificate-card-style.css"



function CertificateCard(props){
  const image = props.image;
  const title = props.title;

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
          <div id="card" onClick={toggle}>
              <img src={image} id="image"/>
              <b><div id="certificateTitle">{title}</div></b>
          </div>
          <div id="popup_background" style={{ visibility: isOpen ? "visible" : "hidden",
          }}>
            <div id="popup_container">
                <img src={image} id="popup_image"/>
                <div id="popup_close" onClick={toggle}>&times;</div>
            </div>
          </div>
    </div>

  )
}

export default CertificateCard;