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

      const extractData = (countryKey: string) => {
        const covidData = dataJson[countryKey]?.data;
        for (let i = covidData.length - 1; i >= 0; i--) {
          const hasVaccinationData = (covidData[i].people_vaccinated && covidData[i].people_vaccinated_per_hundred &&
            covidData[i].people_fully_vaccinated && covidData[i].people_fully_vaccinated_per_hundred) || covidData[i].total_boosters;

          if (hasVaccinationData) {
            return {...dataJson[countryKey], data: {...(covidData[i])}};
          }
        }
      }

      setSerbiaData(extractData("SRB"));
      setBosniaData(extractData("BIH"));
    }

    getCovidData();
  }, []);

  const createResourceLink = (title: string, link: string): JSX.Element => {
    return <a className="red-numbers"
              href={link}
              target="_blank"
              rel="noreferrer">{title}</a>
  }

  return (
    <>
      <Particles options={particlesOptions as ISourceOptions}/>
      <header className="header">
        <h1>Covid-19 Vaccinations News</h1>
        <h4 className="percentage-numbers">Data taken on {serbiaData?.data.date} from
          {createResourceLink(" Our World in Data", "https://ourworldindata.org/coronavirus")}
        </h4>
        <h5>Created by {createResourceLink(" GoodbyePlanet", "https://github.com/GoodbyePlanet")}
        </h5>
        <br/>
        <h5>Other similar data visualization sites:
          {createResourceLink(" Covid19-balkan", "https://covid19-balkan.com/")} -
          {createResourceLink(" Covid19 Vizualization Timeline", "https://covid19-vizualization-time-line.vercel.app/")}
        </h5>
      </header>
      <div className="app-container">
        <Country countryData={serbiaData as CovidCountry}/>
        <Country countryData={bosniaData as CovidCountry}/>
      </div>
    </>
  );
}

export default App;
