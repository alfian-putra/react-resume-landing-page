import logo from './logo.svg';
import { display } from '@mui/system';
import { useState } from "react";

//external lib
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { CopyToClipboard } from 'react-copy-to-clipboard';

//import component
import BiodataAvatar from './component/biodata-avatar'
import BiodataBio from './component/biodata-bio'; 

// needed internal resource
import avatarImg from "./img/ava3.jpg";

const styleContact = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "#333333ff", 
  height :"fit-content",
  width : "100%",
  color:"white"
};

const styleContainer = {
  paddingBottom: "100px"
}

const styleSection = {
  paddingBottom : "20px"
}

const styleButton = {
  display: "inline-block",
  cursor: "pointer"
}

const styleValue = {
  display: "inline-block",
  paddingRight: "10px"
}

function Contact() {

  return (
    <div style={styleContact}>

        <h1 style={{margin : "5px", paddingBottom:"50px", paddingTop: "100px"}}>Contact</h1>
        <div style={styleContainer}>
          <div style={styleSection}>
            <b>WhatsApp</b>
            <div>
              <div style={styleValue}><p><a href="https://wa.me/+62859106535530"  target="_blank" style={{color: "white", cursor: "pointer"}}>+62 859 106 535 530</a></p></div>
              <div style={styleButton} onClick={() => alert("Copied")}>
                <CopyToClipboard text="+62859106535530">
                      <ContentCopyIcon fontSize='small'></ContentCopyIcon>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div style={styleSection}>
            <b>E-Mail</b>
            <div>
              <div style={styleValue}><p>alfianezaputra@gmail.com</p></div>
              <div style={styleButton}  onClick={() => alert("Copied")}>
                <CopyToClipboard text="alfianezaputra@gmail.com">
                      <ContentCopyIcon fontSize='small'></ContentCopyIcon>
                </CopyToClipboard>
              </div>

            </div>
          </div>
          <div style={styleSection}>
            <b>Github</b>
            <div>
              <div style={styleValue}><p>alfian-putra</p></div>
              <div style={styleButton}>
                <a href="https://github.com/alfian-putra"  target="_blank" style={{color: "white"}}>
                      <OpenInNewIcon fontSize='small'></OpenInNewIcon>
                </a>
              </div>
            </div>
          </div>
          <div style={styleSection}>
            <b>Location</b>
            <p>Bale Asri, Pereng Dawe, Balecatur, Gamping, Sleman, D.I. Yogyakarta.</p>
          </div>
        </div>
    </div>
  );
}

export default Contact;
