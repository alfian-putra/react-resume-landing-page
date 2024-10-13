import React, { useEffect } from "react";
import ReactDOM from "react-dom";
//import ReactCardCarousel from "react-card-carousel";
import SkillsetCard from "./component/skillset-card";


import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';


const styleSkillset = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingTop: "100px",
  paddingBottom: "100px"
}

const styleCard = {
  height: "500px",
  paddingBottom: "50px",
  width: "40%",
  borderRadius: "20px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const styleCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

function Skillset(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  // listing
  /*
      Example
          let list = { 
                "programming": [
                { type: 'Java', level: 85 },
                { type: 'Javascript', level: 75 },
                { type: 'Javascript', level: 75 },
                { type: 'Javascript', level: 75 },
                { type: 'Javascript', level: 75 },
              ],
                "DevOps": [
                { type: 'Java', level: 85 },
                { type: 'Javascript', level: 75 },
                { type: 'Javascript', level: 75 },
                { type: 'Javascript', level: 75 },
                { type: 'Javascript', level: 75 },
              ],
        }
  */

  const list = 
  {
    "Programming & RDBMS" : [
      { type: 'Python', level: 40 },
      { type: 'React JS', level: 35 },
      { type: 'Bash Scripting', level: 55 },
      { type: 'Java (SpringBoot)', level: 35 },
      { type: 'git', level: 50 },
      { type: 'MariaDB', level: 30 },
      { type: 'PostgresQL', level: 40 }
    ],
    "DevOps & Server" : [
      { type: 'Kerberos (FreeIPA & AD)', level: 50 },
      { type: 'Grafana', level: 20 },
      { type: 'Linux (Fedora)', level: 50 },
      { type: 'Windows', level: 30 },
      { type: 'KVM', level: 40 },
      { type: 'VirtualBox', level: 35 },
      { type: 'Terraform', level: 30 },
      { type: 'Docker', level: 45 },
      { type: 'Ansible', level: 35 },
    ],
    "Big Data" : [
      { type: 'Hadoop', level: 40 },
      { type: 'Zookeeper', level: 40 },
      { type: 'Ambari', level: 55 },
      { type: 'Hive', level: 35 },
      { type: 'HBase', level: 20 },
      { type: 'Airflow', level: 50 },
      { type: 'Nifi', level: 40 },
      { type: 'Kafka', level: 35 },
      { type: 'Spark', level: 35 },
      { type: 'Druid', level: 20 },
      { type: 'Superset', level: 10 },
    ]
  }

  //generate element
  let list_tab = []
  let list_page = []
  let default_tab = Object.keys(list)[0]
  

  Object.entries(list).map(entry => {
    let tab = entry[0];
    let content = entry[1];
    list_tab.push(
      <Tab label={tab} value={tab} />
    );
    list_page.push(
      <TabPanel value={tab}><div style={styleCenter}><SkillsetCard name={tab} skills={content}/></div></TabPanel>
    );
  })

  console.log(default_tab)
  const [value, setValue] = React.useState(default_tab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={styleSkillset}>
      <h1 style={{margin : "5px", paddingBottom : "50px"}}>Skillset</h1>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', alignItems:"center" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              {/* <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" /> */
              
                list_tab
              }
            </TabList>
          </Box>
          
          {/* <TabPanel value="1"><div style={styleCenter}><SkillsetCard /></div></TabPanel>
          <TabPanel value="2"><div style={styleCenter}><SkillsetCard /></div></TabPanel>
          <TabPanel value="3"><div style={styleCenter}><SkillsetCard /></div></TabPanel> */
          
            list_page
          }
        </TabContext>
      </Box>
    </div>
  );
}

export default Skillset;
