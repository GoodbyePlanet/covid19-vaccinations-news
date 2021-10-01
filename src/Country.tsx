import React from "react";
import {CovidCountry} from "./types";

interface Props {
  countryData: CovidCountry;
}

const Country = ({countryData}: Props): JSX.Element => {
  const TWO_DAYS_AGO = 2;

  const vaccinatedOneDose = (): number => {
    return countryData?.data[countryData.data.length - TWO_DAYS_AGO].people_vaccinated as number;
  }

  const vaccinatedOneDosePopulationPercentage = (): number => {
    return countryData?.data[countryData.data.length - TWO_DAYS_AGO].people_vaccinated_per_hundred as number;
  }

  const vaccinatedTwoDoses = (): number => {
    return countryData?.data[countryData.data.length - TWO_DAYS_AGO].people_fully_vaccinated as number;
  }

  const vaccinatedTwoDosesPopulationPercentage = (): number => {
    return countryData?.data[countryData.data.length - TWO_DAYS_AGO].people_fully_vaccinated_per_hundred as number;
  }

  const vaccinatedMoreThanTwoDoses = (): number => {
    return countryData?.data[countryData.data.length - TWO_DAYS_AGO].total_boosters as number;
  }

  const formatNumber = (digit: number): string => digit?.toLocaleString();

  return (
    <>
      <div className="container">
        <div className="population-container">
          <h1>{countryData?.location}</h1>
          <h2> Population</h2>
          <h2 className="red-numbers">{formatNumber(countryData?.population as number)}</h2>
          <h4>% of Population <span className="percentage-numbers">{formatNumber(vaccinatedOneDosePopulationPercentage())}</span></h4>
        </div>
        <div className="vaccinated-one-dose-container">
          <h2>Vaccinated (at least 1 dose)</h2>
          <h2 className="red-numbers">{formatNumber(vaccinatedOneDose())}</h2>
          <h4>% of Population <span className="percentage-numbers">{formatNumber(vaccinatedTwoDosesPopulationPercentage())}</span></h4>
        </div>
        <div className="vaccinated-two-doses-container">
          <h2>Vaccinated (received 2 doses)</h2>
          <h2 className="red-numbers">{formatNumber(vaccinatedTwoDoses())}</h2>
          <h4>Received more than 2 doses <span
            className="percentage-numbers">{formatNumber(vaccinatedMoreThanTwoDoses()) || "¯\\_(ツ)_/¯"}</span></h4>
        </div>
      </div>
    </>
  );
}

export default Country;