import React, { useEffect } from "react";
import ReactDOM from "react-dom";
//import ReactCardCarousel from "react-card-carousel";
import CertificateCard from "./component/certificate-card";

//certificate image
import GlAws from "./img/certificate/gl_aws.jpg";
import KaggleML from "./img/certificate/kaggle_ml.png";
import KagglePD from "./img/certificate/kaggle_pd.png";
import KagglePY from "./img/certificate/kaggle_py.png";
import LnKernelLogging from "./img/certificate/ln_kernel_logging.jpg";
import LnOsForensics from "./img/certificate/ln_os_forensics.jpg";
import UdemyDP from "./img/certificate/udemy_dp.jpg";
import UdemyNode from "./img/certificate/udemy_nodejs.jpg";
import UdemyOAuth2 from "./img/certificate/udemy_oauth2.jpg";
import VSGA from "./img/certificate/vsga.jpg";


const styleLayout = {
  height: "fit-content",
  width: "100%",
  paddingTop: "100px",
  paddingBottom: "100px",

  marginInline: "auto",
  backgroundColor: "#f3f3f3ff"

}

const styleGrid = {
  display: "grid",
  padding: "20px",

  gridTemplateRows: "fit-content",
  gridAutoRows: "fit-content",
  gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
  gap: "10px",

  width: "200vh",
  minWidth: "90vh",
  marginInline: "auto",

  maxWidth: "fit-content",
  marginInline: "auto"
}

const styleGridItem = {
  padding: "20px",
  fontSize: "30px",
  textAlign: "center",

  width: "auto",

  
  maxWidth: "fit-content",
  marginInline: "auto"
}


function Certificate(props) {
  /*
    EXAMPLE

    const image = cert_aws;
    const title = "AWS for Beginner"

    certificate_list = [[ImageObject, "Title of Certificate"],
                        [cert_aws], "AWS for Beginner"]
  */

  const certificate_list = 
  [
    [GlAws , "AWS For Beginners"],
    [KaggleML , "Intro to Machine Learning"],
    [KagglePD , "Pandas"],
    [KagglePY , "Python"],
    [LnKernelLogging , "Linux: Kernels and Logging for System Administration"],
    [LnOsForensics , "Operating System Forensics"],
    [UdemyDP  , "Design Patterns in Python"],
    [UdemyNode  , "NodeJS"],
    [UdemyOAuth2 , "Spring Security 6 "],
    [VSGA  , "Junior Mobile Programmer"]
  ]

  //generate list
  let certificates = []

  certificate_list.forEach(i => {
    certificates.push(
      <div style={styleGridItem}> <CertificateCard image={i[0]} title={i[1]}/> </div>
    )
  })
  return (
    <div style={styleLayout}>
      <h1 style={{margin : "5px", paddingBottom : "50px", width: "100%", textAlign:"center"}}>Certificate</h1>
      <div style={styleGrid}>
        {
          certificates
        }
      </div>
    </div>
  );
}

export default Certificate;
