import Soneva from "../assests/sonevaorig.avif"
import Soneva1 from "../assests/soneva2.avif"
import greece1 from "../assests/greece1.avif"
import greece2 from "../assests/greece2.avif"
import falls1 from "../assests/falls1.avif"
import falls2 from "../assests/falls2.avif"
import "./Destinationstyles.css"
import DestinationData from "./DestinationData"
const Destination = () =>{
    return (
<div className="destination">
    <h1>Popular Destination</h1>
    <p>Travelling is food for soul and nourishment for mind</p>

<DestinationData
className="first-des"
heading="Soneva, Maldives"
text=" Soneva Maldives, epitomizing barefoot luxury, offers an unparalleled escape on private islands like Kunfunadhoo. Notable for its commitment to sustainability, the resort features exquisite overwater and beachfront villas, gourmet dining, and rejuvenating spa experiences. Surrounded by the breathtaking beauty of the Maldives, Soneva provides a harmonious blend of opulence and eco-conscious living. Indulge in a world where luxury meets nature's embrace at Soneva Maldives. Dive into crystal-clear waters, unwind on pristine beaches, and relish in the eco-friendly opulence that defines an unforgettable Maldivian retreat."
img1={Soneva}
img2={Soneva1}

/>


<DestinationData
className="first-des-reverse"
heading="Santorini, Greece"
text=" Santorini, Greece, is an enchanting paradise that beckons travelers with its timeless allure. Perched on the Aegean Sea, this captivating island is renowned for its iconic whitewashed buildings, contrasting vividly against the deep blue sea and sky. Santorini's sunsets are legendary, casting a mesmerizing glow over the caldera, creating a romantic ambiance that is simply unparalleled. With its charming villages, delectable Mediterranean cuisine, and unique volcanic landscapes, Santorini promises an immersive experience that blends cultural richness with breathtaking scenery. Explore historic ruins, unwind on sun-kissed beaches, and savor local delicacies amidst a setting that feels like a dream turned into reality. Santorini is not just a destination; it's a journey into the heart of Greek beauty and hospitality."
img1={greece1}
img2={greece2}

/>

<DestinationData

heading="Niagara Falls, Canada"
className="last-dest-normal"
text=" Discover the awe-inspiring wonder of Niagara Falls in Canada, where nature's grandeur takes center stage in a captivating display of power and beauty. As you stand on the precipice, feel the mist on your face and witness the majestic cascade of water plunging into the river below. The iconic Horseshoe Falls, illuminated by vibrant lights at night, creates a mesmerizing spectacle. Beyond the falls, explore charming Niagara Parks, indulge in world-class cuisine, and experience the thrill of nearby attractions like the Niagara SkyWheel. Immerse yourself in the magic of this natural marvel, where every moment is a breathtaking encounter with the forces of nature."
img1={falls1}
img2={falls2}

/>
</div>

    );
};

export default Destination