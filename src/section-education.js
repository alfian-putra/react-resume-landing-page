import logo from './logo.svg';
import { display } from '@mui/system';

//import component
import BiodataAvatar from './component/biodata-avatar'
import BiodataBio from './component/biodata-bio';

// needed internal resource
import EducationExperientItem from './component/education-experient-item';

const educationStyle = {
  paddingTop: "100px",
  paddingBottom: "100px",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "#7b42bcff", 
  width : "100%",
};

const itemStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  gap: "10px", 
  paddingTop: "70px"
};

const containerStyle = {
  width: "70%",
  paddingLeft: "10%",
  paddingRight: "10%",
  marginLeft: "5%"
}

function EducationExperience() {
  /*
    const institution= "State Vocational High School 3 Yogyakarta"
    const year = "2016-2019"
    const desc = "Network and Computer Engineering"

    let education = [["institustion", "year", "desc"],
                     ["State Vocational High School 3 Yogyakarta", "2016-2019", "Network and Computer Engineering"]]
  */

  //item list
  const education = [["SMK N 3 Yogyakarta", "2016 - 2019", "Teknik Komputer & Jaringan"],
                     ["Universitas Terbuka", "2024 - sekarang", "Sistem Informasi"]]
  const experience = [["Rumah Mesin", "2019 (Oktober - Desember)", "Desainer Grafis (Internship)"],
                      ["Labs247", "2022 - 2024", "Developer Platform Big Data (Apache Ambari)"],
                    ]

  //listing item
  let list_education = []

  let list_experience = []

  //listing education
  education.forEach( i => {
    list_education.push(
      <EducationExperientItem institution={i[0]}
                              year={i[1]}
                              desc={i[2]} />
    )
  })

  //listing work experience
  experience.forEach( i => {
    list_experience.push(
      <EducationExperientItem institution={i[0]}
                              year={i[1]}
                              desc={i[2]} />
    )
  })

  return (
    <div style={educationStyle}>
      <h1 style={{color: "white", textAlign: "center"}}>Education &</h1>
      <h1 style={{color: "white", textAlign: "center", marginTop: "0px"}}>Work Experience</h1>
      <div style={itemStyle}>
         <div style={containerStyle}>
            {
              list_education
            }
         </div>
         <div style={{
            borderLeft: "3px dotted white",
            height: "80%",
            position: "absolute",
            left: "50%",
            marginLeft: "-3px"
         }}>
         </div>
         <div style={containerStyle}>
            {
                list_experience
            }

         </div>
      </div>
    </div>

  );
}

export default EducationExperience;
