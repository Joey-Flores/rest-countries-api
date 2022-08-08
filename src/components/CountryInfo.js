function CountryInfo(props) {
  return (
    <div>
      <h3>{props.countryName}</h3>
      <h5>
        <b>Population: </b> {new Intl.NumberFormat().format(props.population)}
      </h5>
      <h5>
        <b>Region: </b>
        {props.region}
      </h5>
      <h5>
        <b>Capital: </b>
        {props.capital}
      </h5>
    </div>
  );
}

export default CountryInfo;
