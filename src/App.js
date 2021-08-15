import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Icon from "./components/Icon/Icon";
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

import RightTop from "./components/RightTop/RightTop";
import "./components/general.scss";
import Temperature from "./components/Temperature/Temperature";
import ButtonsTemp from "./components/ButtonsTemp/ButtonsTemp";
import Pophumwind from "./components/Pophumwind/Pophumwind";
import ButtonsPlot from "./components/ButtonsPlot/ButtonsPlot";
import Plot from "./components/Plot/Plot";
import ButtonsNextDay from "./components/ButtonsNextDay/ButtonsNextDay";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";

function App() {
  const [Error, setError] = useState(true);
 const [errormessage, setErrormessage] = useState("");
  const [city, setCity] = useState("");
  const [responsecod, setResponsecod] = useState(0);
  const [displayindex, setDisplayindex] = useState(0);

  const [nextday, setNextday] = useState(0);
  const [unit, setUnit] = useState("km/h");
  const [isCelsius, setIsCelsius] = useState(true);
  const [tempbutton, setTempbutton] = useState(true);
  const [precbutton, setPrecbutton] = useState(false);
  const [windbutton, setWindbutton] = useState(false);
  const [plotunit, setPlotunit] = useState("km/h");
  const [maxplot, setMaxplot] = useState("");
  const [bordercolor, setBordercolor] = useState("yellow");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const [cityname, setCityname] = useState("");
  const [numberButton, setNumberButton] = useState(1);
  const [weatherData, setweatherdata] = useState({
    time: [],
    description: [],
    id: [],
    pop: [],
    hum: [],
    windspeed: [],
    winddeg: [],
    timezone: "",
    time: [],
    day: [],
  });

  // let arrtime =[];
  // let arrdescription = [];
  // let arrid =[];
  // let arrtemperature = [];
  // let arrpop = [];
  // let arrhum = [];
  // let arrwindspeed = [];
  // let arrwinddeg = [];

  return (
    <div className="container">
      <div className="input-div">
        <input
          className="input-text"
          type="text"
          placeholder="City-name"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onChange={(e) => setCityname(e.target.value)}
          value={cityname}
        />
        <X
          className="clean-button"
          onClick={() => {
            setCity("");
            setCityname("")
            // latlon(lat, lon)
            // setError(false);
          }}
        />
        <button
          className="cityname"
          onClick={() => {
            setCity(cityname);
            getWeatherData(cityname);
            setCityname(cityname);


            // latlon(lat, lon)
            // setError(false);
          }}
        >
          <Search className="search-button" />
        </button>
      </div>

      {responsecod  ? (
        <>
          <RightTop
            city={city}
            day={weatherData.day}
            time={weatherData.time}
            description={weatherData.description}
            nextday={nextday}
            displayindex={displayindex}
            responsecod={responsecod}
            Error={Error}
          />
          <div className="left">
            <Icon
              id={weatherData.id}
              displayindex={displayindex}
              Error={Error}
            />
            <Temperature
              temperature={weatherData.temperature}
              displayindex={displayindex}
              isCelsius={isCelsius}
              Error= {Error}
            />
            <ButtonsTemp
              isCelsius={isCelsius}
              setIsCelsius={setIsCelsius}
              unit={unit}
              setUnit={setUnit}
              Error= {Error}

            />
            <Pophumwind
              pop={weatherData.pop}
              hum={weatherData.hum}
              windspeed={weatherData.windspeed}
              displayindex={displayindex}
              isCelsius={isCelsius}
              unit={unit}
              Error= {Error}

            />
          </div>
          <ButtonsPlot
            tempbutton={tempbutton}
            precbutton={precbutton}
            windbutton={windbutton}
            setTempbutton={setTempbutton}
            setPrecbutton={setPrecbutton}
            setWindbutton={setWindbutton}
            numberButton = {numberButton}
            setNumberButton = {setNumberButton}
            Error= {Error}

          />
          <></>
          <Plot
            time={weatherData.time}
            temperature={weatherData.temperature}
            pop={weatherData.pop}
            setDisplayindex={setDisplayindex}
            nextday={nextday}
            tempbutton={tempbutton}
            precbutton={precbutton}
            isCelsius={isCelsius}
            windspeed={weatherData.windspeed}
            winddeg={weatherData.winddeg}
            setPlotunit={setPlotunit}
            plotunit={plotunit}
            bordercolor={bordercolor}
            setBordercolor={setBordercolor}
            maxplot={maxplot}
            setMaxplot={setMaxplot}
            Error={Error}
          />
          <ButtonsNextDay
            displayindex={displayindex}
            setDisplayindex={setDisplayindex}
            nextday={nextday}
            setNextday={setNextday}
            time={weatherData.time}
            temperature={weatherData.temperature}
            id={weatherData.id}
            day={weatherData.day}
            isCelsius={isCelsius}
            Error={Error}
          />
         
        </>
      ) : (
        <></>
    
      )}

      <></>
      <ErrorComponent
          Error={Error}
          errormessage={errormessage}
          />
    </div>
  );
  function getWeatherData(city) {
    setweatherdata((prevState) => {
      return {
        ...prevState,
        time: [],
        description: [],
        id: [],
        temperature: [],
        pop: [],
        hum: [],
        windspeed: [],
        winddeg: [],
        timezone: "",
        time: [],
        day: [],
      };
    });
    setDisplayindex(0);
    setNextday(0);
    setPlotunit("km/h");
    setBordercolor("yellow");
    // arrtime = [];
    // arrdescription = [];
    // arrid = [];
    // arrtemperature =[];
    // arrpop = [];
    // arrhum = [];
    // arrwindspeed = [];
    // arrwinddeg = [];
    if (city) {
      axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=57cad30057821db5c25882045c6db1c2`,
      })
        .then((response) => {
          // console.log(response.data.city.timezone);
          // console.log(response.status);
          // console.log(Number.parseInt(response.status) === 200)
          // console.log(response.data.list[0].dt);
         
          // setResponsecod(Number.parseInt(response.status));
        if(Number.parseInt(response.status) === 200){
          setResponsecod(true); 
          setError(false);
          setErrormessage("")

        }
        else{
          setResponsecod(false);
          setError(true);
        }
          var d = new Date();
          var n = d.getUTCHours();
          var day = d.getDay();
          // console.log(response.data.city.coord.lat);
          console.log(response.data.city.coord.lom);
          // console.log(response.data.city.coord.lat)
          setLat(Number.parseInt(response.data.city.coord.lat));
          setLon(Number.parseInt(response.data.city.coord.lon));
          // console.log(lat, lon);
          var offset = response.data.city.timezone / 3600;
          var timeincity = n + offset;
          var day = d.getDay();
          console.log(weatherData.day);
          // console.log(timeincity);

          // var day = d.getDay();
          var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];

          
          setweatherdata((prevState) => {
            return {
              ...prevState,
              timezone: [...prevState.timezone, response.data.city.timezone],
            };
          });

          for (let x = 0; x < 40; x++) {
            // console.log(response.data.list[x].dt_txt)

            setweatherdata((prevState) => {
              return {
                ...prevState,

                description: [
                  ...prevState.description,
                  response.data.list[x].weather[0].description,
                ],
                id: [...prevState.id, response.data.list[x].weather[0].id],
                temperature: [
                  ...prevState.temperature,
                  response.data.list[x].main.temp,
                ],
                pop: [
                  ...prevState.pop,
                  Number.parseInt(response.data.list[x].pop * 100),
                ],
                hum: [...prevState.hum, response.data.list[x].main.humidity],
                windspeed: [
                  ...prevState.windspeed,
                  response.data.list[x].wind.speed,
                ],
                winddeg: [...prevState.winddeg, response.data.list[x].wind.deg],
                time: [...prevState.time, timeincity],
                day: [...prevState.day, days[day]],
              };
            });
            timeincity = timeincity + 3;
            if (timeincity > 24) {
              timeincity = timeincity % 24;
              if (day > 5) {
                day = 0;
              } else {
                day = day + 1;
              }
            }
          }
        })
        .catch((error) => {
          console.log(error.message);
          setCity("");
          setError(true);
         setErrormessage(error.message);
        });
    }
  }
}

export default App;
