import React, {useState} from "react";
import "../Temperature/Temperature.scss";
function Temperature({temperature, displayindex, isCelsius}) {
    // console.log(temperature[displayindex])
    if(isCelsius){
        return(<h2 className="temperature-value">{Number.parseInt(temperature[displayindex] - 273.15)}</h2>);
    }
    else{
        return(<h2 className="temperature-value">{Number.parseInt((temperature[displayindex] - 273.15) * 1.8 + 32)}</h2>);

  }
}

export default Temperature;