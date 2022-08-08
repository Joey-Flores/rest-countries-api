import { useState, useEffect } from "react";
import FilterbyRegion from "../Filter/FilterbyRegion";
import Wrapper from "../UI/Wrapper";
import classes from "./SearchField.module.css";

function SearchField(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const axios = require("axios").default;

  async function getInfo() {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${enteredValue}`
      );
      setEnteredValue("");
      const data = [
        {
          id: Math.random(),
          flag: res.data[0].flags.png,
          countryName: res.data[0].name.common,
          population: res.data[0].population,
          region: res.data[0].region,
          capital: res.data[0].capital,
          nativeName: Object.entries(res.data[0].name.nativeName)[0][1].common,
          subRegion: res.data[0].subregion,
          tld: res.data[0].tld[0],
          currencies: Object.values(res.data[0].currencies)[0].name,
          languages: Object.values(res.data[0].languages),
          borderCountries: res.data[0].borders,
        },
      ];
      props.recieveData(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function allCountries(loc) {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/${loc}`);
      let data = res.data.map((country) => {
        const container = {};

        container.id = Math.random();
        container.flag = country.flags.png;
        container.countryName = country.name.common;
        container.population = country.population;
        container.region = country.region;
        container.capital = country.capital;
        if (country.name.nativeName) {
          container.nativeName =
            Object.entries(country.name.nativeName)[0][1].common || "";
        }
        container.subRegion = country.subregion;
        container.tld = country.tld;
        container.borderCountries = country.borders;
        if (country.languages) {
          container.languages = Object.values(country.languages);
        }
        if (country.currencies) {
          container.currencies = Object.values(country.currencies)[0].name;
        }

        return container;
      });

      const shuffle = data.sort(() => 0.5 - Math.random());
      let res10 = shuffle.slice(0, 8);
      props.recieveData(res10);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    allCountries("all");
  }, []);

  useEffect(() => {
    if (props.region) {
      allCountries(`region/${props.region}`);
    }
  }, [props.region]);

  function submitHandler(event) {
    event.preventDefault();
    getInfo();
  }

  function searchHandler(event) {
    setEnteredValue(event.target.value);
  }

  function blurHandler() {
    setEnteredValue("");
  }

  return (
    <div>
      <Wrapper className={classes.searchAndFilter}>
        <form className={classes.form} onSubmit={submitHandler}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            onBlur={blurHandler}
            className={classes.searchBar}
            type="text"
            placeholder="Search for a country..."
            value={enteredValue}
            onChange={searchHandler}
          ></input>
        </form>
        <FilterbyRegion selectHandler={props.selectHandler} />
      </Wrapper>
    </div>
  );
}

export default SearchField;
