import React, { useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./main.css";

export default function App() {
  const url = "http://127.0.0.1:8000/get-flights/";
  const [flight_Number, setFlight_Number] = useState(null);
  const [departure_city, setDeparture_city] = useState("");
  const [departure_time, setDeparture_time] = useState("");
  const [arrival_city, setArrival_city] = useState("");
  const [isDisabled,setIsDisabled] = useState(true)
  const [buttonClass,setButtonClass] = useState("disabled")

  const getFlight = async (departure_city, departure_time, arrival_city) => {
    axios
      .get(url, {
        params: {
          departure_city: departure_city,
          arrival_city: arrival_city,
          departure_time: departure_time,
        },
      })
      .then((response) => {
        setDeparture_city("")
        setDeparture_time("")
        setArrival_city("")
        setFlight_Number(response.data.data);
      });
  };



  const handleDepartureCity = (e) => {
    e.preventDefault();
    setDeparture_city(e.target.value);
    if (departure_city && departure_time && arrival_city){
      setIsDisabled(false)
      setButtonClass("enabled")
    }
    else{
      setIsDisabled(true)
    }
    return e.target.value;
  };

  const handleArrivalCity = (e) => {
    e.preventDefault();
    setArrival_city(e.target.value);
    if (departure_city && departure_time && arrival_city){
      setIsDisabled(false)
      setButtonClass("enabled")

    }
    else{
      setIsDisabled(true)
    }
    return e.target.value;
  };

  const handleDepartureTime = (e) => {
    e.preventDefault();
    setDeparture_time(e.target.value);
    if (departure_city && departure_time && arrival_city){
      setIsDisabled(false)
      setButtonClass("enabled")
    }
    else{
      setIsDisabled(true)

    }
    return e.target.value;
  };

  return (
    <div className="app">
      <div className="whole-app">
        <div className="header">
          <h2>Flight Search App</h2>
          <div className="input-fields">
            <input
              type="text"
              placeholder="Departure City"
              onChange={handleDepartureCity}
            />
            <input
              type="text"
              placeholder="Arrival City"
              onChange={handleArrivalCity}
            />
            <input
              type="text"
              placeholder="Departure Time"
              onChange={handleDepartureTime}
            />
          </div>
          <button
          type="submit"
          className={buttonClass}
          disabled={isDisabled}
          onClick={() => {
            getFlight(departure_city, departure_time, arrival_city);
          }}
        >
          SEARCH
        </button>
        
        </div>
        <div className="card">
          <Card flight_Number={flight_Number} />
        </div>
      </div>
    </div>
  );
}
