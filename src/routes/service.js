import Me from "../components/Me";
import Navbar from "../components/Navbar";
import Aboutimg from "../assests/services.avif"
import Foot from "../components/Foot";
import Trip from "../components/Trip";
function Service(){
    return(
        <>
        
        <Navbar />  
        <Me

        cName="me-mid"
        Meimg={Aboutimg}
        title="Service"

        btnClass="hide"
        />
        <Trip/>
        <Foot/>
        </>
    );

}

export default Service;