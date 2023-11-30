import "./mestyles.css";
function Me(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="meImg" src={props.Meimg}/>
           
           <div className="me-text">
            <h1>{props.title}</h1>
            <p>{props.text}
            </p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText}
            </a>
           </div>
            </div> 
        
        </>
    );

}

export default Me;