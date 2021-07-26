import React, {useState} from "react";
import "../Plot/Plot.scss"
import { ArrowUp} from 'react-bootstrap-icons';

function Plot({time, day, temperature,pop, setDisplayindex, displayindex, nextday, tempbutton, precbutton, windbutton, isCelsius, setNextday, windspeed, winddeg, setPlotunit, plotunit}) {
    let nextdayindex;
    let components =[];
    let hour = [];
    let buttonsnextday =[];
    let plotdata = [];
    let maxvalue;
    console.log(windspeed);
    console.log(winddeg);   
    if(tempbutton||precbutton){
    if(tempbutton){
      if(isCelsius){
        for (let x = 0; x <= 40; x++){
          plotdata.push(Number.parseInt(temperature[x] - 273.15));
       }
       maxvalue = Number.parseInt(Math.max(...temperature) - 273.15);
       setPlotunit('km/h')
      }
      else{
        for (let x = 0; x <= 40; x++){
          plotdata.push(Number.parseInt((temperature[x] - 273.15) * 1.8 + 32));
       }
       maxvalue = Number.parseInt(Math.max(...temperature) - 272.15 * (1.8+32));
       setPlotunit('mph')

      }
      }
    else if(precbutton){
      for (let x = 0; x <= 40; x++){
        plotdata.push(pop[x]);
     }
    maxvalue = Math.max(...pop);
    setPlotunit('%')
    }
    for(let x = 0; x < 8; x++){
         
      components.push(React.createElement('fieldset', 
      { 
        style: {height:(plotdata[x+nextday]/maxvalue ) * 40  }, className: "plot",
        onClick: () => {setDisplayindex(x+nextday)}}, React.createElement('legend', {}, <>{plotdata[x+nextday]}{plotunit}</>)));
      }
  }
    else{
       for (let x = 0; x <= 40; x++){
          plotdata.push(windspeed[x]);
       }
    maxvalue = Math.max(...windspeed);
    for(let x = 0; x < 8; x++){
      components.push(React.createElement('legend', {}, <>{plotdata[x+nextday]}{plotunit}</>))
      //dodac tutaj if z zamiana jednostek
        
    }
      }

     
    
    
    
    
  
    for (let x = 0; x < 8; x++){
      hour.push(React.createElement('span', {}, <>{time[x+nextday]}:00</>))

        if(time[x] > time[x+1]){
            nextdayindex = x+1;

        }
        
    }
    
      
    buttonsnextday.push(React.createElement('button', {

        className: "plot",
        onClick: () => {setDisplayindex(0); setNextday(0)}}, ""));
        buttonsnextday.push(React.createElement('button', {

          className: "plot",
          onClick: () => {setNextday(nextdayindex); setDisplayindex(nextdayindex)}}, ""));

          buttonsnextday.push(React.createElement('button', {

            className: "plot",
            onClick: () => {setNextday(nextdayindex+8); setDisplayindex(nextdayindex+8)}}, ""));
            buttonsnextday.push(React.createElement('button', {

              className: "plot",
              onClick: () => {setNextday(nextdayindex+16); setDisplayindex(nextdayindex+16)}}, ""));
  
              if (tempbutton || precbutton) {
                return(
                  <>
  
                  <div className = "container-plot">
                    
                    {components}
                  </div>
                  <div className= "container-plot hour">{hour}</div>
                 
                  <div className = "container-plot">{buttonsnextday}</div>
                  <h2>{displayindex}</h2>
                 </>
                )
              } else {
                return(<>
                  <div className = "container-plot">
                  {components}
                </div>
                 <div className= "container-plot hour">{hour}</div>
                    </>
                  )
              }
   
 
}

export default Plot;