import React, { useState } from "react";
import "../ButtonsNextDay/ButtonsNextDay.scss";
import Icon from "../Icon/Icon";

function ButtonsNextDay({
  displayindex,
  setDisplayindex,
  nextday,
  setNextday,
  time,
  temperature,
  id,
  day,
  isCelsius,
}) {
  let buttonsnextday = [];
  let nextdayindex;
  let minmaxtemp = [];
  let arrid = [];
  let temperatureunit;
  //  console.log(id)
  if (isCelsius) {
    temperatureunit = "°C";
  } else {
    temperatureunit = "°F";
  }
  //  console.log(displayindex);
  for (let x = 0; x < 8; x++) {
    if (time[x] > time[x + 1]) {
      nextdayindex = x + 1;
    }
  }
  for (let x = 0; x <= 40; x++) {
    // tablicadowyjebania.push(Number.parseInt(temperature[x] - 273.15));
    minmaxtemp.push(Number.parseInt(temperature[x] - 273.15));
    if (!isCelsius) {
      minmaxtemp[x] = Number.parseInt(minmaxtemp[x] * 1.8 + 32);
    }
  }
  function minmax(arr, begin, end) {
    arr = [].slice.apply(arr, [].slice.call(arguments, 1));
    return {
      min: Math.min.apply(Math, arr),
      max: Math.max.apply(Math, arr),
    };
  }

  function average(arr) {
    let sum = 0;
    arr.forEach(function (element, index, array) {
      sum = sum + element;
    });
    // console.log(sum / arr.length);
    return Number.parseInt(sum / arr.length);
  }

  // console.log(temperature);
  // console.log(nextdayindex);
  var dayone = minmax(minmaxtemp, 0, Number.parseInt(nextdayindex));
  var daytwo = minmax(
    minmaxtemp,
    Number.parseInt(nextdayindex),
    Number.parseInt(nextdayindex + 7)
  );
  var daythree = minmax(
    minmaxtemp,
    Number.parseInt(nextdayindex + 8),
    Number.parseInt(nextdayindex + 15)
  );
  var dayfour = minmax(minmaxtemp, nextdayindex + 16, nextdayindex + 23);
  var dayfive = minmax(minmaxtemp, nextdayindex + 24, nextdayindex + 31);


  var iddayonearr = id.slice(0, nextdayindex);
  let iddayone = average(iddayonearr);
  // console.log(iddayone);
  var iddaytwoarr = id.slice(nextdayindex + 1, nextdayindex + 9);
  let iddaytwo = average(iddayonearr);
  // console.log(iddaytwo);
  var iddaythreearr = id.slice(nextdayindex + 9, nextdayindex + 17);
  let iddaythree = average(iddaythreearr);
  // console.log(iddaythree);
  var iddayfourarr = id.slice(nextdayindex + 17, nextdayindex + 25);
  let iddayfour = average(iddayfourarr);

  var iddayfivearr = id.slice(nextdayindex + 25, nextdayindex + 33);
  let iddayfive = average(iddayfivearr);
  // console.log(day);
  // console.log(iddayfour);
  // console.log(id);
  arrid.push(iddayone, iddaytwo, iddaythree, iddayfour, iddayfive);
  // console.log(arrid);

  buttonsnextday.push(
    React.createElement(
      "button",
      {
        className: "plot plot-icon background-buttonnextday",
        id: "nextday-zero",
        onClick: () => {
          setDisplayindex(0);
          setNextday(0);
          background(0);

          
        },
      },
      React.createElement("p", { className: "p-buttons" }, `${day[0]}`),
      React.createElement(Icon, {
        id: arrid,
        displayindex: 0,
        nextday: true,
      }),

      React.createElement(
        "h3",
        { className: "tempmaxmin" },
        `${daytwo.max}${temperatureunit} ${daytwo.min}${temperatureunit}`
      )
    )
  );
  
  buttonsnextday.push(
    React.createElement(
      "button",
      {
        className: "plot plot-icon",
        id: "nextday-one",


        onClick: () => {
          setNextday(nextdayindex);
          setDisplayindex(nextdayindex);
          background(1);
        },
      },
      // React.createElement("h4", {}, `${day[nextdayindex]}`),
      React.createElement("p", { className: "p-buttons" }, `${day[nextdayindex]}`),
      React.createElement(Icon, {
        id: arrid,
        displayindex: 1,
        nextday: true,
      }),


      React.createElement(
        "h3",
        { className: "tempmaxmin" },
        `${daytwo.max}${temperatureunit} ${daytwo.min}${temperatureunit}`
      )
    )
  );

  buttonsnextday.push(
    React.createElement(
      "button",
      {
        className: "plot plot-icon",
        id: "nextday-two",

                onClick: () => {
          setNextday(nextdayindex + 8);
          setDisplayindex(nextdayindex + 8);
          background(2);
        },
      },
      React.createElement("p", { className: "p-buttons" }, `${day[nextdayindex+8]}`),
      React.createElement(Icon, {
        id: arrid,
        displayindex: 2,
      }),

      React.createElement(
        "h3",
        { className: "tempmaxmin" },
        `${daythree.max}${temperatureunit}  ${daythree.min}${temperatureunit}`
      )
    )
  );
  buttonsnextday.push(
    React.createElement(
      "button",
      {
        className: "plot plot-icon",
        id: "nextday-three",

        onClick: () => {
          setNextday(nextdayindex + 16);
          setDisplayindex(nextdayindex + 16);
          background(3);

        },
      },
      React.createElement("p", { className: "p-buttons" }, `${day[nextdayindex+16]}`),
      React.createElement(Icon, {
        id: arrid,
        displayindex: 3,
      }),

      React.createElement(
        "h3",
        { className: "tempmaxmin" },
        `${dayfour.max}${temperatureunit} ${dayfour.min}${temperatureunit}`
      )
    )
  );
  buttonsnextday.push(
    React.createElement(
      "button",
      {
        className: "plot plot-icon",
        id: "nextday-four",

        onClick: () => {
          setNextday(nextdayindex + 24);
          setDisplayindex(nextdayindex + 24);
          background(4);

        },
      },
      React.createElement("p", { className: "p-buttons" }, `${day[nextdayindex+24]}`),
      React.createElement(Icon, {
        id: arrid,
        displayindex: 4,
      }),

      React.createElement(
        "h3",
        { className: "tempmaxmin" },
        `${dayfive.max}${temperatureunit} ${dayfive.min}${temperatureunit}`
      )
    )
  );

  function background(id){
    console.log(id);
    let a = document.querySelector("#nextday-zero");
    let b = document.querySelector("#nextday-one");
    let c = document.querySelector("#nextday-two");
    let d = document.querySelector("#nextday-three");
    let e = document.querySelector("#nextday-four");
    if(id == 0){
     

      a.classList.add("background-buttonnextday");
      b.classList.remove("background-buttonnextday");
      c.classList.remove("background-buttonnextday");
      d.classList.remove("background-buttonnextday");
      e.classList.remove("background-buttonnextday");     
      
    }
    if(id == 1){
     

      b.classList.add("background-buttonnextday");
      a.classList.remove("background-buttonnextday");
      c.classList.remove("background-buttonnextday");
      d.classList.remove("background-buttonnextday");
      e.classList.remove("background-buttonnextday");  
      
    }
    if(id == 2){
     

      c.classList.add("background-buttonnextday");
      b.classList.remove("background-buttonnextday");
      a.classList.remove("background-buttonnextday");
      d.classList.remove("background-buttonnextday");
      e.classList.remove("background-buttonnextday");   
      
    }
    if(id == 3){
     

      d.classList.add("background-buttonnextday");
      b.classList.remove("background-buttonnextday");
      c.classList.remove("background-buttonnextday");
      a.classList.remove("background-buttonnextday");
      e.classList.remove("background-buttonnextday");  
      
    }
    if(id == 4){
     

      e.classList.add("background-buttonnextday");
      b.classList.remove("background-buttonnextday");
      c.classList.remove("background-buttonnextday");
      d.classList.remove("background-buttonnextday");
      a.classList.remove("background-buttonnextday");    
      
    }

  }

  return (
    <>
      <div className="container-plot" style={{ paddingTop: "30px" }}>
        {buttonsnextday}
      </div>
      <h2>{displayindex}</h2>
   
    </>
  );
}

export default ButtonsNextDay;
