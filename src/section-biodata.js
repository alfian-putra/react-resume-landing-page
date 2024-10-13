import logo from './logo.svg';
import { display } from '@mui/system';

//import component
import BiodataAvatar from './component/biodata-avatar'
import BiodataBio from './component/biodata-bio';

// needed internal resource
import avatarImg from "./img/ava3.jpg";

const bioStyle = {
  height : "75vh",
  display: "flex",
  justifyContent : "center",
  alignItems : "center"
};

const bioItemStyle = {
  marginTop : "0px",
  marginLeft : "50px",
  marginRight : "50px",

};

function Biodata() {
  const name = "Alfian Eza Putra" ;
  const whoami = "Platform Developer" ;
  const bio = "Saya adalah developer platform Ambari yang berfungsi untuk memudahkan manajemen service big data \
               seperti : Hadoop, Zookeeper, Hive, HBase, dll. Selain itu saya juga melakukan pengelolaan VM pada KVM \
               dan juga tugas lain seperti debugging, porting python 2 ke python 3, dll." ;
  const image = avatarImg

  return (
    <div className='bio' style={bioStyle}>
      <span style={bioItemStyle}><BiodataAvatar image={image}/></span>
      <span style={bioItemStyle}><BiodataBio name={name} 
                                              whoami={whoami}
                                              bio={bio}
                                              />
      </span>
    </div>
  );
}

export default Biodata;
