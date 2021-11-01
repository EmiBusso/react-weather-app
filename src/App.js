import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Buenos Aires" />
        
        <footer>
          This project was coded by{" "}
          <a href="https://mystifying-archimedes-2ecfd3.netlify.app/">
            {" "}
            Emilia Busso{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/EmiBusso/react-weather-app"
            target="_blanck"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
