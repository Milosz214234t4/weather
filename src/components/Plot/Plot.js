import React, {useState} from "react";
import "../Plot/Plot.scss"
import { ArrowUp} from 'react-bootstrap-icons';
function Plot({time, temperature,pop, setDisplayindex, nextday, tempbutton, precbutton, isCelsius, windspeed, winddeg, setPlotunit, plotunit, bordercolor, setBordercolor, maxplot, setMaxplot}) {
    let nextdayindex;
    let components =[];
    let hour = [];
    let plotdata = [];
    let winddata = [];
    let plotdescription = [];
    let maxvalue;
    // console.log(windspeed);
    // console.log(temperature);   
    if(tempbutton||precbutton){
     

      for (let x = 0; x <= 40; x++){
        plotdescription.push(Number.parseInt(temperature[x] - 273.15));
        plotdata.push(Number.parseInt(temperature[x] - 273.15));
     }
     maxvalue = Number.parseInt(Math.max(...temperature) - 273.15);
     setMaxplot(maxvalue);
    if(tempbutton){
      setBordercolor("yellow")
      if(isCelsius){
      
       setPlotunit('°C')
      }
      else{
        for (let x = 0; x <= 40; x++){
          plotdescription[x] = Number.parseInt(plotdescription[x] * 1.8 + 32);
       }
     
     
       setPlotunit('°F');

      }
      }
    else if(precbutton){
      plotdescription = [];
      plotdata = [];
      setBordercolor("blue")
      for (let x = 0; x <= 40; x++){
        plotdata.push(pop[x]);
        plotdescription.push(pop[x]);
     }
     maxvalue = 0;
    maxvalue = Math.max(...pop);
    setMaxplot(maxvalue);

    console.log(maxvalue);
    // maxvalue = 100;
    setPlotunit('%')
    }
    for(let x = 0; x < 8; x++){
         
      components.push(React.createElement('div', 
      { 
        style: {height:(plotdata[x+nextday]/maxvalue ) * 50 + 10, background: bordercolor  }, className: "plot", background: {bordercolor},
        onClick: () => {setDisplayindex(x+nextday)}}, React.createElement('legend', {}, <>{plotdescription[x+nextday]}{plotunit}</>)));
      }
  }
    else{
      // setBordercolor("white")
      if(isCelsius){
       for (let x = 0; x <= 40; x++){
          plotdata.push(Number.parseInt(windspeed[x]));
       }
    maxvalue = Number.parseInt(Math.max(...windspeed));
    setPlotunit("km/h")

      }
      else{
        for (let x = 0; x <= 40; x++){
          plotdata.push(Number.parseInt(windspeed[x] * 1.61));
       }
    maxvalue = Number.parseInt(Math.max(...windspeed) * 1.61);
    setPlotunit("mph")

      }
    for(let x = 0; x < 8; x++){
      // components.push(React.createElement('legend', {onClick: () => {setDisplayindex(x+nextday)}},
      //  <>{plotdata[x+nextday]}{plotunit}</>))
      //dodac tutaj if z zamiana jednostek
     components.push(React.createElement(ArrowUp,
       {
        style:{rotate: winddeg[x+nextday]  + "deg", }, className:"arrow", onClick: () => {setDisplayindex(x+nextday)}
       },
       ));   
    winddata.push(React.createElement('span', {}, <>{plotdata[x+nextday]}{plotunit}</>))
      }
      }

     
    
    
    
    
  
    for (let x = 0; x < 8; x++){
      hour.push(React.createElement('span', {}, <>{time[x+nextday]}:00</>))

        if(time[x] > time[x+1]){
            nextdayindex = x+1;

        }
        
    }
    
      
  
  
              
                return(
                  <>
                  <div className = "container-plot">
                    {winddata}
                  </div>
                  <div className = "container-plot">
                   
                    {components}
                  </div>
                  <div className= "container-plot hour">{hour}</div>
                 
                
                 </>
                )
              
   
 
}

export default Plot;