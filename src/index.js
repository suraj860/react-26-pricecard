
import React from "react";
import ReactDOM from "react-dom";

import Card from "../src/components/card";
import services from "../src/components/services"

// inserting props from service file and later using map method to loop over it in renderDom 

function elements(items){
  return( <Card
  key={items.cost}
    plan = {items.plan}
    cost={items.cost}
    duration={items.duration}
    service1={items.service1}
    service2={items.service2}
    service3={items.service3}
    service4={items.service4}
    service5={items.service5}
    service6={items.service6}
    service7={items.service7}
    service8={items.service8}/>)
}

ReactDOM.render(
<div className="parentDiv"> 

{services.map(elements)}
</div>,
document.getElementById("root"));