import Me from "../components/Me";
import Navbar from "../components/Navbar";
import Aboutimg from "../assests/contact.avif"
import Foot from "../components/Foot";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
        <>
        
        <Navbar />  
        <Me

        cName="me-mid"
        Meimg={Aboutimg}
        title="Contact"

        btnClass="hide"

        />
        <ContactForm/>
         <Foot/>
        </>
    );

}

export default Contact;