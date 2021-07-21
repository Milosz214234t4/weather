import React, {useState} from "react";
import "../ButtonsTemp/ButtonsTemp.scss"
function Plot({time, day, temperature, displayindex}) {
    let nextdayindex;
    let arrcel = [];
    let arrfar = [];
    let components =[];
    // console.log(day);
    for (let x = 0; x <= 40; x++){
       arrcel.push(Number.parseInt(temperature[displayindex] - 273.15));
       arrfar.push(Number.parseInt((temperature[displayindex] - 273.15) * 1.8 + 32))
    }
    for (let x = 0; x < 8; x++){
       
        if(time[x] > time[x+1]){
            nextdayindex = x+1;
        }
        
    }
    console.log(nextdayindex);
    for(let x = 0; x < 7; x++){
    components.push(React.createElement('h1',{style: {color: "red", backgroundColor: "blue"}}, 'My First React Code'));
    }
  return ( 
 <>{components}</>
  );
}

export default Plot;