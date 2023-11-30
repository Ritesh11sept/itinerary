import "./TripStyles.css";
import TripData from "./TripData";
import trip1 from "../assests/amazon.avif"
import trip2 from "../assests/London.avif"
import trip3 from "../assests/taj.avif"
function Trip(){

return(
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You need six months of vacation, twice a year.</p>
   <div className="tripcard">
    <TripData
    image={trip1}
    heading="Journey into the Amazon"
    text="Embark on a breathtaking adventure into the heart of the Amazon Rainforest, where nature reveals its most vibrant and untouched wonders. Explore lush, emerald canopies, encounter exotic wildlife in their natural habitat, and navigate winding rivers that lead to hidden corners of this biodiversity hotspot. Immerse yourself in the unparalleled beauty of the Amazon, where every step unveils a new chapter in the story of Earth's most diverse and awe-inspiring ecosystem."
    />

<TripData
    image={trip2}
    heading="Discover London's timeless charm"
    text="London: an enchanting blend of history, culture, and modern allure. Immerse yourself in the allure of London, a city where historic landmarks, cultural treasures, and modern vibrancy converge to offer an unforgettable journey through time and sophistication."
    />

<TripData
    image={trip3}
    heading="Embark on a cultural pilgrimage to the iconic Taj Mahal"
    text="Discover the mesmerizing allure of the Taj Mahal, an architectural masterpiece that stands as a testament to eternal love. Marvel at the intricate marble craftsmanship, wander through the lush gardens, and immerse yourself in the rich history of this cultural gem in the heart of India. A visit to the Taj is a journey into the sublime, where every moment resonates with the echoes of a bygone era."
    />
   </div>
    </div>
);
}
export default Trip;