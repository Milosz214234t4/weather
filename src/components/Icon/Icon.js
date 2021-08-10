import React, { useState } from "react";
import {
  Search,
  X,
  Sun,
  CloudLightningRain,
  CloudDrizzle,
  CloudHaze,
  CloudRainHeavy,
  CloudSnow,
  ArrowUp,
} from "react-bootstrap-icons";
import "../Icon/Icon.scss";
function Icon({ id, displayindex }) {
  // console.log(id);
  // console.log(displayindex);
  //    console.log(displayindex);
  //    console.log(id[displayindex]);

  let a = Number.parseInt(id[displayindex]);
  //    console.log(a);
  //    console.log(id[displayindex])
  if (a > 799) {
    return <Sun className="icon"></Sun>;
  } else if (a > 200 && a < 233) {
    // console.log("miedzy 200 a 233")
    return <CloudLightningRain className="icon" />;
  } else if (a > 299 && a < 322) {
    // console.log("miedzy 300 a 323");
    return <CloudDrizzle className="icon" />;
  } else if (a > 499 && a < 532) {
    // console.log("miedzy 500 a 532");
    return <CloudRainHeavy className="icon" />;
  } else if (a > 599 && a < 624) {
    // console.log("miedzy 600 a 625");
    return <CloudSnow className="icon" />;
  } else if (a > 700 && a < 781) {
    // console.log("miedzy 700 a 781");
    return <CloudHaze className="icon" />;
  } else {
    return <CloudLightningRain className="icon"></CloudLightningRain>;
  }
}

export default Icon;
