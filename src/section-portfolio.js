import logo from './logo.svg';
import { display } from '@mui/system';

//import component
import PortfolioDropdown from './component/portfolio-dropdown';
import PortfolioHighlight from './component/portfolio-highlight';

//logo
import LogoPrometheus from "./img/prometheus.svg";
import LogoReact from "./img/react.png";
import LogoAirflow from "./img/aiirflow.svg";
import LogoTerra from "./img/terraform.svg";

const stylePortfolio = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  paddingBottom: "100px",
  paddingTop: "100px"
}

const styleHighlight = {
  paddingTop : "30px",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
}

const styleHighlightItem = {
  
}

const styleDropdown = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  paddingTop : "40px"
}

const styleDropdownItem = {
  paddingBottom : "20px",
}



function Portfolio() {

  // HIGHLIGHT LIST
    /*
        EXAMPLE
        import LogoPrometheus from "../img/prometheus.svg";

        const logo = LogoPrometheus;
        const title = "Node Exporter, Prometheus, & Grafana";
        const link = "https://www.google.com"

        const highlight = [[logoObject, "title", link],
                          [LogoPrometheus, "Node Exporter, Prometheus, & Grafana", "https://www.google.com"]]
    */  
  // can be contain 4 - 5
 

  const highlight = 
  [
      [LogoPrometheus, "Node Exporter, Prometheus, & Grafana", "https://github.com/alfian-putra/grafana-prometheus-node_exporter/blob/main/README.md"],
      [LogoReact, "React JS Resume Landing Page", "https://github.com/alfian-putra/react-resume-landing-page"],
      [LogoAirflow, "Big Data : Service Installation & Data Orchestration", "https://github.com/alfian-putra/big-data/tree/main"],
  ]

  //DROPDOWN LIST
    /*
        EXAMPLE
        const name = "programming"
        const ls = {"1":"https://www.google.com" , "2":"b" , "3":"c"}

        const dropdown = [["name", {"this":"link_this", "is":"link_is", "list":"link_list"}]]

        NOTE
        use full url, for ecxample : https://www.google.com
    */

  // generate list
  const dropdown = 
  [
    [
      "ReactJS, HTML, & CSS ",
      {
        "Resume Landing Page React":"https://github.com/alfian-putra/react-resume-landing-page",
        "Resume HTML & CSS":"https://github.com/alfian-putra/resume-landing-page",
      }
    ],
    [
      "Python",
      {
        "Flask React Fetch API":"https://github.com/alfian-putra/flask_react_fetch_api",
        "Design Pattern":"https://github.com/alfian-putra/python-design-pattern",
        "EDFS":"https://github.com/alfian-putra/edfs",
      }
    ],
    [
      "Data Engineering",
      {
        "Machine Learning":"https://github.com/alfian-putra/machine-learning",
        "Big Data":"https://github.com/alfian-putra/big-data",
      }
    ],
    [
      "DevOps & Server Management",
      {
        "OpenTofu | Terraform":"https://github.com/alfian-putra/opentofu",
        "VM & Server Administration":"https://github.com/alfian-putra/VM-and-Server-administration",
        "Grafana, Prometheus, & Node Exporter on Fedora": "https://github.com/alfian-putra/grafana-prometheus-node_exporter/blob/main/README.md"
      }
    ],
    [
      "Java",
      {
        "SpringBoot Note":"https://github.com/alfian-putra/springboot_note/blob/main/README.md",
        "SpringBoot : Google Authentication":"https://github.com/alfian-putra/external-auth",
        "SpringBoot : Authentication Using Data From PostgresQL ":"https://github.com/alfian-putra/spring-security-auth",
      }
    ],
  ]
  
  // generate highlight portfolioHighlight
  let list_highlight = []
  
  highlight.forEach(i => {
    list_highlight.push(
      <span style={styleHighlightItem}> <PortfolioHighlight logo={i[0]} 
                                                            title={i[1]}
                                                            link={i[2]}
      /> </span>
    )
  })

  // generate dropdown PortfolioDropdown
  let list_dropdown = []

 dropdown.forEach(i => {
  list_dropdown.push(
    <span style={styleDropdownItem}> <PortfolioDropdown name={i[0]}
                                                        list={i[1]}/> </span> 
  )
 })

  return (
    <div style={stylePortfolio}>
      <h1 style={{margin : "5px"}}>Portfolio</h1>
      <div style={styleHighlight}>
          {
            list_highlight
          }
      </div>
      <div style={styleDropdown}>
          {
            list_dropdown
          } 
      </div>
    </div>
  );
}

export default Portfolio;
