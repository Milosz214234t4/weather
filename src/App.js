import './App.css';
import axios from "axios";
import React, {useState} from "react";
import Icon from './components/Icon/Icon';
import { Search, X, Sun, CloudLightningRain, CloudDrizzle, CloudHaze, CloudRainHeavy, CloudSnow, ArrowUp} from 'react-bootstrap-icons';

import RightTop from './components/RightTop/RightTop';
import "./components/general.scss"
import Temperature from './components/Temperature/Temperature';
import ButtonsTemp from './components/ButtonsTemp/ButtonsTemp';
import Pophumwind from './components/Pophumwind/Pophumwind';
import ButtonsPlot from './components/ButtonsPlot/ButtonsPlot';
import Plot from './components/Plot/Plot';

function App() {

  const [city, setCity] = useState("");
  const [responsecod, setResponsecod] = useState(0);
  const[displayindex, setDisplayindex] = useState(0);
  const [unit, setUnit] = useState("km/h");
  const [isCelsius, setIsCelsius]  = useState(true);
  const [tempbutton, setTempbutton] = useState(true);
  const [precbutton, setPrecbutton] = useState(false);
  const [windbutton, setWindbutton] = useState(false);
  const [weatherData, setweatherdata] = useState({time: [],
  description: [],
  id: [],
  pop: [],
  hum: [],
  windspeed: [],
  winddeg: [],
  timezone: "",
  time: [],
  day: []
  });
  // let arrtime =[];
  // let arrdescription = [];
  // let arrid =[];
  // let arrtemperature = [];
  // let arrpop = [];
  // let arrhum = [];
  // let arrwindspeed = [];
  // let arrwinddeg = [];


  function getWeatherData(city) {
    setweatherdata(prevState => {return {        ...prevState,
      time: [],
      description:[],
      id:[],
      temperature: [],
      pop:[],
      hum:[],
      windspeed: [],
      winddeg: [],
      timezone: "",
      time: [],
      day: []
      
      
}    });
    // arrtime = [];
    // arrdescription = [];
    // arrid = [];
    // arrtemperature =[];
    // arrpop = [];
    // arrhum = [];
    // arrwindspeed = [];
    // arrwinddeg = [];
    if(city)
    {
     

      axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=57cad30057821db5c25882045c6db1c2`,

      })

          .then((response) => {
            console.log(response.data.city.timezone);
          // console.log(response.status);
          // console.log(Number.parseInt(response.status) === 200)
          // console.log(response.data.list[0].dt);
          setResponsecod(Number.parseInt(response.status));
          var d = new Date();
          var n = d.getUTCHours();
    
          var offset = response.data.city.timezone / 3600;
          var timeincity = n + offset;
          console.log(timeincity);
          if(timeincity > 24){
            timeincity = timeincity%24;
            if (day > 6){
              day = 0;
            }
            else{
            day = day + 1;
          }}

          var day = d.getDay();
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

          setweatherdata(prevState => {return {        ...prevState,
            timezone: [...prevState.timezone, response.data.city.timezone],
           


             
}    }


);
        
          for(let x = 0; x < 40; x++){
            // console.log(response.data.list[x].dt_txt)
            
           
            setweatherdata(prevState => {return {        ...prevState,
            
             description: [...prevState.description, response.data.list[x].weather[0].description],
             id: [...prevState.id, response.data.list[x].weather[0].id],
             temperature: [...prevState.temperature, response.data.list[x].main.temp],
             pop: [...prevState.pop, Number.parseInt(response.data.list[x].pop * 100)],
             hum: [...prevState.hum, response.data.list[x].main.humidity],
             windspeed: [...prevState.windspeed, response.data.list[x].wind.speed],
             winddeg: [...prevState.winddeg, response.data.list[x].wind.winddeg],
             time: [...prevState.time, timeincity],
             day: [...prevState.day, days[day]],




              
}    }


);
timeincity = timeincity + 3;
 if(timeincity > 24){
   timeincity = timeincity%24;
   if (day > 6){
     day = 0;
   }
   else{
   day = day + 1;
 }
}


          }
              
    })
    .catch((error) => {
      console.log(error);
      setCity("");
      
      
      
          
          
});


           

        
           
        
          
      
         
    }
  }
  return (
    <div className="container">
      <div className = "input-div">
          <input
          className="input-text"
          type="text"
          placeholder="City-name"
  
          onChange={(e) => setCity(e.target.value)}
          value={city}
     
  />  
   <X
            className = "clean-button"
            onClick={() => {

              setCity("");
              
              // latlon(lat, lon)
              // setError(false);
             


          }}

            />
   <button className="cityname"
                  onClick={() => {

                      getWeatherData(city);
                      setCity(city);
                      
                      // latlon(lat, lon)
                      // setError(false);
                     


                  }}

          >
            
            <Search
            className = "search-button"
           
            />
            </button>
            </div>

         {(responsecod === 200) ? (
          <>
          <RightTop
           city = {city}
           day = {weatherData.day}
           time = {weatherData.time}
           description ={weatherData.description}
           displayindex = {displayindex}
      
          />
          <div className = "left">
          <Icon
          id = {weatherData.id}
          displayindex={displayindex}
          />
          <Temperature
          temperature = {weatherData.temperature}
          displayindex = {displayindex}
          isCelsius = {isCelsius}
          />
          <ButtonsTemp
          isCelsius = {isCelsius}
          setIsCelsius = {setIsCelsius}
          unit = {unit}
          setUnit = {setUnit}
          />
          <Pophumwind
          pop = {weatherData.pop}
          hum = {weatherData.hum}
          windspeed={weatherData.windspeed}
          displayindex={displayindex}
          isCelsius={isCelsius}
          unit = {unit}
          />
         
          </div>
          <ButtonsPlot
          tempbutton = {tempbutton}
          precbutton = {precbutton}
          windbutton = {windbutton}
          setTempbutton = {setTempbutton}
          setPrecbutton = {setPrecbutton}
          setWindbutton = {setWindbutton}
          />
          <>
          </>
          <Plot
          time ={weatherData.time}
          day = {weatherData.day}

          temperature={weatherData.temperature}
          displayindex={displayindex}
          
         
         
          

          />
          </>
      ) : (
        <></>
      )}
        
<>

</>
    </div>
    
  );
                }

export default App;
