import axios from "axios";
import React, { useState } from "react";
import "../RightTop/RightTop.scss";
function RightTop({ city, day, time, description, nextday, displayindex, responsecod, Error }) {
   console.log(responsecod === 200);
   console.log(Number.parseInt(responsecod));
   let x = Number.parseInt(responsecod);
   console.log(x === 200);
   if(x !== 200){
     let a = document.querySelector(".right");
     console.log(a);
   }
   console.log(Error);
  //  console.log(time[displayindex]);
  return (<>
    <div className="right">
    {!Error  ? (
        <>
      <h1>{city}</h1>
      <h2>
        {day[displayindex]}, {time[displayindex]}:00
      </h2>
      <h2>{description[displayindex]}</h2>
      </>
       ) : (
        <></>
    
      )}
    </div>
    
  </>
  );
}

export default RightTop;
