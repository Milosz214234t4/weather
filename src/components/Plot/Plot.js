import React, {useState} from "react";
import "../Plot/Plot.scss"
function Plot({time, day, temperature,setDisplayindex, displayindex, nextday, setNextday}) {
    let nextdayindex;
    let arrcel = [];
    let arrfar = [];
    let components =[];
    let buttonsnextday =[];
    
    // console.log(day);
    for (let x = 0; x <= 40; x++){
       arrcel.push(Number.parseInt(temperature[x] - 273.15));
       arrfar.push(Number.parseInt((temperature[x] - 273.15) * 1.8 + 32));
    }
    for (let x = 0; x < 8; x++){
       
        if(time[x] > time[x+1]){
            nextdayindex = x+1;

        }
        
    }
    let max = Math.max(...arrcel);
    // console.log(max);
    // console.log(arrcel);
    // console.log(temperature);
    // console.log(nextdayindex);
    console.log(day)
    for(let x = 0; x < 7; x++){
    components.push(React.createElement('button', 
    {
      style: {height:(Number.parseInt(arrcel[x+nextday]) * 2) + 10}, className: "plot",
      onClick: () => {setDisplayindex(x+nextday)}}, ""));
    }
    buttonsnextday.push(React.createElement('button', {

        className: "plot",
        onClick: () => {setDisplayindex(0)}}, ""));
        buttonsnextday.push(React.createElement('button', {

          className: "plot",
          onClick: () => {setNextday(nextdayindex); setDisplayindex(nextdayindex)}}, ""));

          buttonsnextday.push(React.createElement('button', {

            className: "plot",
            onClick: () => {setNextday(nextdayindex+8); setDisplayindex(nextdayindex+8)}}, ""));
            buttonsnextday.push(React.createElement('button', {

              className: "plot",
              onClick: () => {setNextday(nextdayindex+16); setDisplayindex(nextdayindex+16)}}, ""));
  

   
  return ( <>
 <div className = "container-plot">{components}</div>
 <div className = "container-plot">{buttonsnextday}</div>
 <h2>{displayindex}</h2>
</>
  );
}

export default Plot;