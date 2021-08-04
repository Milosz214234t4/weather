import React, {useState} from "react";
import "../ButtonsNextDay/ButtonsNextDay.scss"
import Icon from "../Icon/Icon";

function ButtonsNextDay({displayindex, setDisplayindex, nextday, setNextday, time, temperature, id, day, isCelsius }) {
   let buttonsnextday = [];
   let nextdayindex;
   let minmaxtemp = [];
   let arrid = [];
   let temperatureunit;
  //  console.log(id)
   if(isCelsius){
     temperatureunit = "°C"
   }
   else{
     temperatureunit = "°F"
   }
  //  console.log(displayindex);
   for (let x = 0; x < 8; x++){
   

      if(time[x] > time[x+1]){
          nextdayindex = x+1;

      }
      
  }
  for (let x = 0; x <= 40; x++){
    // tablicadowyjebania.push(Number.parseInt(temperature[x] - 273.15));
    minmaxtemp.push(Number.parseInt(temperature[x] - 273.15));
    if(!isCelsius){
      minmaxtemp[x] =Number.parseInt(minmaxtemp[x] * 1.8 + 32);    }
   
 }
  function minmax(arr, begin, end) {
    arr = [].slice.apply(arr, [].slice.call(arguments, 1));
    return {
        'min' : Math.min.apply(Math, arr),
        'max' : Math.max.apply(Math, arr)
    }
}

function average(arr){
  let sum = 0;
  arr.forEach(function(element, index, array) {
    sum = sum + element;  
  });
console.log(sum/arr.length);
return Number.parseInt(sum/arr.length);
}

// console.log(temperature);
// console.log(nextdayindex);
var dayone = minmax(minmaxtemp, 0, Number.parseInt(nextdayindex));
var daytwo = minmax(minmaxtemp, Number.parseInt(nextdayindex), Number.parseInt(nextdayindex+7));
var daythree = minmax(minmaxtemp, Number.parseInt(nextdayindex+8), Number.parseInt(nextdayindex+15));
var dayfour = minmax(minmaxtemp, nextdayindex + 16, nextdayindex + 23);

var iddayonearr = id.slice(0, nextdayindex);
let iddayone = average(iddayonearr);
// console.log(iddayone);
var iddaytwoarr = id.slice(nextdayindex+1, nextdayindex + 9);
let iddaytwo = average(iddayonearr);
// console.log(iddaytwo);
var iddaythreearr = id.slice(nextdayindex+9, nextdayindex + 17);
let iddaythree = average(iddaythreearr);
// console.log(iddaythree);
var iddayfourarr = id.slice(nextdayindex+17, nextdayindex+25);
let iddayfour = average(iddayfourarr);

// console.log(iddayfour);
// console.log(id);
arrid.push(iddayone, iddaytwo, iddaythree, iddayfour);
console.log(arrid)

buttonsnextday.push(React.createElement('button',
 {

    className: "plot",
    onClick: () => {setDisplayindex(0); setNextday(0)}}, 
    React.createElement(Icon,
     {id: arrid,
      displayindex:0
    }, 
     ),       React.createElement('h3', {className:"tempmaxmin" }, `${daytwo.max}${temperatureunit} ${daytwo.min}${temperatureunit}`)
     ));
 buttonsnextday.push(React.createElement('button', 
    {

      className: "plot",
      onClick: () => {setNextday(nextdayindex); setDisplayindex(nextdayindex)}},
      React.createElement('h3', {className:"tempmaxmin" }, `${daytwo.max}${temperatureunit} ${daytwo.min}${temperatureunit}`)
      ));

      buttonsnextday.push(React.createElement('button', {

        className: "plot",
        onClick: () => {setNextday(nextdayindex+8); setDisplayindex(nextdayindex+8)}}, 
        React.createElement('h3', {className:"tempmaxmin" }, `${daythree.max}${temperatureunit}  ${daythree.min}${temperatureunit}`)

        ));
        buttonsnextday.push(React.createElement('button', {

          className: "plot",
          onClick: () => {setNextday(nextdayindex+16); setDisplayindex(nextdayindex+16)}},
          React.createElement('h3', {className:"tempmaxmin" }, `${dayfour.max}${temperatureunit} ${dayfour.min}${temperatureunit}`)

          ));


  return (
   <>
                     <div className = "container-plot">{buttonsnextday}</div>
                  <h2>{displayindex}</h2>
                <Icon
                id = {arrid}
                displayindex={0}
                />
                 <Icon
                id = {arrid}
                displayindex={1}
                />
                 <Icon
                id = {arrid}
                displayindex={2}
                />
                 <Icon
                id = {arrid}
                displayindex={3}
                />

   </>
  );
}

export default ButtonsNextDay;