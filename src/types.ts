export interface CovidCountry {
  location: string;
  population: number;
  cardiovasc_death_rate: number;
  data: CovidMeta[];
}

export interface CovidMeta {
  date: string;
  total_tests: number;
  total_tests_per_thousand: number;
  new_tests?: number;
  new_tests_per_thousand?: number;
  total_cases?: number;
  new_cases?: number;
  total_cases_per_million?: number;
  new_cases_per_million?: number;
  total_deaths?: number;
  new_deaths?: number;
  total_deaths_per_million?: number;
  total_vaccinations?: number;
  people_vaccinated?: number;
  total_vaccinations_per_hundred?: number;
  people_vaccinated_per_hundred?: number;
  new_vaccinations?: number; // New COVID-19 vaccination doses administered (only calculated for consecutive days)
  people_fully_vaccinated?: number;
  people_fully_vaccinated_per_hundred?: number;
  total_boosters?: number; // Total number of COVID-19 vaccination booster doses administered (doses administered beyond the number prescribed by the vaccination protocol)
  total_boosters_per_hundred?: number;
}