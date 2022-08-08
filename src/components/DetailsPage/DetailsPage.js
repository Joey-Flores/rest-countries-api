import Wrapper from "../UI/Wrapper";
import classes from "./DetailsPage.module.css";

function DetailsPage(props) {
  const iso = require("iso-3166-1");

  return (
    <Wrapper>
      <Wrapper className={classes.container}>
        <span onClick={props.clickHandler}>
          <i className="fa-solid fa-arrow-left-long"></i>
          <p>Back</p>
        </span>
        <div className={classes.detailsContainer} key={props.data.id}>
          <img src={props.data.flag}></img>
          <div>
            <div className={classes.topDetails}>
              <div className={classes.locationDetails}>
                <h2>{props.data.countryName}</h2>
                <p>
                  <b>Native Name: </b>
                  {props.data.nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {new Intl.NumberFormat().format(props.data.population)}
                </p>
                <p>
                  <b>Region: </b>
                  {props.data.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {props.data.subRegion}
                </p>
                <p>
                  <b>Capital: </b>
                  {props.data.capital}
                </p>
              </div>
              <div className={classes.otherDetails}>
                <p>
                  <b>Top Level Domain: </b>
                  {props.data.tld}
                </p>
                <p>
                  <b>Currencies: </b>
                  {props.data.currencies}
                </p>
                <p>
                  <b>Languages: </b>
                  {props.data.languages.join(", ")}
                </p>
              </div>
            </div>
            <div className={classes.borderCountries}>
              <h2>Border Countries:</h2>
              <div>
                {props.data.borderCountries == undefined && <p>N/A</p>}
                {props.data.borderCountries != undefined &&
                  props.data.borderCountries.map((bc) => (
                    <p key={bc}>{iso.whereAlpha3(bc).country || "N/A"}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
}

export default DetailsPage;
