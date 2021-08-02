import React, {useState} from "react";
import "../Pophumwind/Pophumwind.scss"

function ButtonsNextDay({displayindex, setDisplayindex, nextday, setNextday, time, temperature, id, day }) {
   let buttonsnextday = [];
   let nextdayindex;
   let maxtempdayone = [];
   let tablicadowyjebania = [];
   console.log(displayindex);
   for (let x = 0; x < 8; x++){
   

      if(time[x] > time[x+1]){
          nextdayindex = x+1;

      }
      
  }
  for (let x = 0; x <= 40; x++){
    tablicadowyjebania.push(Number.parseInt(temperature[x] - 273.15));
 }
  function minmax(arr, begin, end) {
    arr = [].slice.apply(arr, [].slice.call(arguments, 1));
    return {
        'min' : Math.min.apply(Math, arr),
        'max' : Math.max.apply(Math, arr)
    }
}
// console.log(temperature);
console.log(nextdayindex);
var dayone = minmax(tablicadowyjebania, 0, Number.parseInt(nextdayindex));
var daytwo = minmax(tablicadowyjebania, Number.parseInt(nextdayindex), Number.parseInt(nextdayindex+7));
var daythree = minmax(tablicadowyjebania, Number.parseInt(nextdayindex+8), Number.parseInt(nextdayindex+15));
var dayfour = minmax(tablicadowyjebania, nextdayindex + 16, nextdayindex + 23);
// console.log(dayone);
// console.log(daytwo);
// console.log(daythree);
console.log(dayfour);


buttonsnextday.push(React.createElement('button', {

    className: "plot",
    onClick: () => {setDisplayindex(0); setNextday(0)}}, ""));
    buttonsnextday.push(React.createElement('button', 
    {

      className: "plot",
      onClick: () => {setNextday(nextdayindex); setDisplayindex(nextdayindex)}},
      React.createElement('h1', {}, `${dayone.max} ${dayone.min}`)
      ));

      buttonsnextday.push(React.createElement('button', {

        className: "plot",
        onClick: () => {setNextday(nextdayindex+8); setDisplayindex(nextdayindex+8)}}, ""));
        buttonsnextday.push(React.createElement('button', {

          className: "plot",
          onClick: () => {setNextday(nextdayindex+16); setDisplayindex(nextdayindex+16)}}, ""));


  return (
   <>
                     <div className = "container-plot">{buttonsnextday}</div>
                  <h2>{displayindex}</h2>

   </>
  );
}

export default ButtonsNextDay;