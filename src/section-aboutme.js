import logo from './logo.svg';
import { display } from '@mui/system';

//import component
import BiodataAvatar from './component/biodata-avatar'
import BiodataBio from './component/biodata-bio';

// needed internal resource
import avatarImg from "./img/ava3.jpg";

const aboutmeStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "#7b42bcff", 
  width : "100%",
  paddingBottom: "100px"
};


function AboutMe() {
  const about = "Nama saya Alfian Eza Putra, biasa dipanggil Eza, saat ini saya adalah seorang mahasiswa di Universitas Terbuka jurusan Sistem Informasi \
                 selain melalui pendidikan formal dan pengalaman kerja, saya juga mengembangkan kemampuan lain di bidang teknologi informasi seperti : \
                 Python, React JS, dan Administering Linux." ;


  return (
    <div id='aboutme' style={aboutmeStyle}>
        <h1 style={{paddingTop: "100px", color:"white"}}>About Me</h1>
        <p style={{color:"white", margin : "5px", width : "700px" , overflowWrap : "break-word" , textAlign:  "center"}}>{about}</p>
    </div>
  );
}

export default AboutMe;
