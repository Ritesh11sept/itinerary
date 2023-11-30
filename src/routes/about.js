import Me from "../components/Me";
import Navbar from "../components/Navbar";
import Aboutimg from "../assests/northerm.avif"
import Foot from "../components/Foot";
import AboutUS from "../components/AboutUS";
function About(){

    return(
        <>
     
         <Navbar />  
        <Me

        cName="me-mid"
        Meimg={Aboutimg}
        title="About Us"

        btnClass="hide"
        />
        <AboutUS/>
       <Foot/>
        </>
    );

}

export default About;