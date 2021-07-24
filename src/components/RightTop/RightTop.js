import axios from "axios";
import React, {useState} from "react";
import "../RightTop/RightTop.scss"
function RightTop({city, day,time,description,nextday, displayindex}) {
//  console.log(description);
//  console.log(time[displayindex]);


  return (
    <div className="right">
  <h1>{city}</h1>
  <h2>{day[displayindex]}, {time[displayindex]}:00</h2>
  <h2>{description[displayindex]}</h2>

    </div>
  );
}

export default RightTop;