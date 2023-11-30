import "./FooterStyles.css"

const Foot= () =>{
return(
    <div className="foot">
<div className="top">
<div>
    <h1>ItineraryIQ</h1>
    <p>Choose your favourite destiantion</p>
</div>
<div>
<a href= "/">
    <i className="fa-brands fa-facebook-square"></i>
</a>

<a href= "/">
    <i className="fa-brands fa-instagram-square"></i>
</a>

<a href= "/">
    <i className="fa-brands fa-behance-square"></i>
</a>

<a href= "/">
    <i className="fa-brands fa-twitter-square"></i>
</a>
</div>

</div>

<div className="bottom">
<div>

    <h4>Project</h4>
    <a href="/">Changelog</a>
    <a href="/">Status</a>
    <a href="/">License</a>
    <a href="/">All Versions</a>
</div>

<div>

    <h4>Community</h4>
    <a href="/">Github</a>
    <a href="/">Issues</a>
    <a href="/">Project</a>
    <a href="/">Twitter</a>
</div>
<div>

    <h4>Help</h4>
    <a href="/">Support</a>
    <a href="/">Toubleshooting</a>
    <a href="/">Contact Us</a>
   
</div>
<div>

    <h4>Others</h4>
    <a href="/">Terms of service</a>
    <a href="/">Privacy</a>
    <a href="/">Policy</a>
    
</div>

</div>

    </div>
);

}

export default Foot