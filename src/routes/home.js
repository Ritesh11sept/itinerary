 import Navbar from "../components/Navbar"
import Me from "../components/Me";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Foot from "../components/Foot";

 
function Home(){
    return(
        <>
        <Navbar />  
        <Me

        cName="me"
        Meimg="https://images.unsplash.com/photo-1696446701725-82e084aa8167?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Foot/>
        </>
    );

}

export default Home;