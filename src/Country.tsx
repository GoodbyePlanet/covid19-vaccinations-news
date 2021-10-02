import React from "react";
import {CovidCountry} from "./types";

interface Props {
  countryData: CovidCountry;
}

const Country = ({countryData}: Props): JSX.Element => {
  const formatNumber = (digit: number): string => digit?.toLocaleString();

  return (
    <>
      <div className="container">
        <div className="population-container">
          <h1>{countryData?.location}</h1>
          <h2> Population</h2>
          <h2 className="red-numbers">{formatNumber(countryData?.population as number)}</h2>
        </div>
        <div className="vaccinated-one-dose-container">
          <h2>Vaccinated (at least 1 dose)</h2>
          <h2 className="red-numbers">{formatNumber(countryData?.data?.people_vaccinated as number)}</h2>
          <h4>% of Population <span
            className="percentage-numbers">{formatNumber(countryData?.data?.people_vaccinated_per_hundred as number)}</span>
          </h4>
        </div>
        <div className="vaccinated-two-doses-container">
          <h2>Vaccinated (received 2 doses)</h2>
          <h2 className="red-numbers">{formatNumber(countryData?.data?.people_fully_vaccinated as number)}</h2>
          <h4>% of Population <span
            className="percentage-numbers">{formatNumber(countryData?.data?.people_fully_vaccinated_per_hundred as number)}</span>
          </h4>
          <br/>
          <h4>Received more than 2 doses <span
            className="percentage-numbers">{formatNumber(countryData?.data?.total_boosters as number) || "¯\\_(ツ)_/¯"}</span></h4>
        </div>
      </div>
    </>
  );
}

export default Country;