import logo from './logo.svg';
import { display } from '@mui/system';

//external lib
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
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
  display: "inline-black",
  cursor: "pointer"
}

const styleSub = {
  display: "inline-block"
}

function Contact() {
  const title = "WhatsApp"
  const value = ""

  return (
    <div>
        <div style={styleContainer}>
          <div style={styleSection}>
            <b>{title}</b>
            <div style={styleSub}>
              <p>+62 859 106 535 530</p>
              <div style={styleButton}>
                <CopyToClipboard text="+62 859 106 535 530">
                      <ContentCopyIcon fontSize='small'></ContentCopyIcon>
                </CopyToClipboard>
              </div>                
            </div>

            </div>
        </div>
    </div>
  );
}

export default Contact;
