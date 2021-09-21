
// created component card using function component

function Card(props){
    let cost;
    let uncheck,times ;
  
    // various conditions for the check mark
    if(props.cost === "$0"){
        cost = "text-muted"
        uncheck = "fas fa-times"
        times = "fas fa-times"
    }else if(props.cost === "$9"){
        cost = "one-muted"
        uncheck ="fas fa-check"
        times = "fas fa-times"  
    }else{
        cost ="unmuted"
        uncheck ="fas fa-check"
        times ="fas fa-check"
    }

    // returneing the card function
    return(
        <>
        <div className="card">
            <div className="card-head">
            <h5  className="title">{props.plan}</h5>
            <h6  className="month">{props.cost}<span>/{props.duration}</span></h6>
            <hr />
            </div>
            <div className="card-body">
                <ul type= "none">
                    <li><i className="fas fa-check"></i><strong>{props.service1}</strong></li>
                    <li><i className="fas fa-check"></i>{props.service2}</li>
                    <li><i className="fas fa-check"></i>{props.service3}</li>
                    <li><i className="fas fa-check"></i>{props.service4}</li>
                    <li className = {cost}><i className = {uncheck}></i>{props.service5}</li>
                    <li className = {cost}><i className = {uncheck}></i>{props.service6}</li>
                    <li className = {cost}><i className = {uncheck}></i>{props.service7}</li>
                    <li className = {props.cost=== "$0" ? "text-muted":props.cost==="$9" ? "aa":null} ><i  className = {times}></i>{props.service8}</li>  
                </ul>
               
            </div>
            <button className="btn">BUY</button>
        </div>
        </>
    )
}

export default Card;