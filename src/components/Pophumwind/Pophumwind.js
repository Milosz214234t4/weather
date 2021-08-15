import React, { useState } from "react";
import "../Pophumwind/Pophumwind.scss";

function Pophumwind({ pop, hum, windspeed, displayindex, isCelsius, unit, Error }) {
  // console.log(pop);
  // console.log(hum);
  // console.log(windspeed);
  if(!Error){
  return (
    <div className="container-pophumwind">
      <h4>Precipitation: {pop[displayindex]}%</h4>
      <h4>Humidity: {hum[displayindex]}%</h4>
      {isCelsius ? (
        <>
          <h4>
            Wind: {Number.parseInt(windspeed[displayindex])} {unit}
          </h4>
        </>
      ) : (
        <>
          <h4>
            Wind: {Number.parseInt(windspeed[displayindex] * 1.61)} {unit}
          </h4>
        </>
      )}
    </div>
  );
      }
      else{
        return(
          <></>
        )
      }
}

export default Pophumwind;
