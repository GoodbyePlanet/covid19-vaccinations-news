import React, {useEffect, useState} from 'react';
import Particles from "react-tsparticles";
import {ISourceOptions} from "tsparticles";

import particlesOptions from "./particles.json";

import './App.css';
import Country from "./Country";
import {CovidCountry} from "./types";

const App = (): JSX.Element => {
  const [serbiaData, setSerbiaData] = useState<CovidCountry>();
  const [bosniaData, setBosniaData] = useState<CovidCountry>();

  useEffect(() => {
    const getCovidData = async () => {
      const data = await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json');
      const dataJson = await data.json();

      console.log(dataJson)

      setSerbiaData(dataJson.SRB);
      setBosniaData(dataJson.BIH);
    }

    getCovidData();
  }, []);

  return (
    <>
      <Particles options={particlesOptions as ISourceOptions}/>
      <header className="header">
        <h1>Covid-19 Vaccinations News</h1>
      </header>
      <div className="app-container">
        <Country countryData={serbiaData as CovidCountry}/>
        <Country countryData={bosniaData as CovidCountry}/>
      </div>
    </>
  );
}

export default App;
