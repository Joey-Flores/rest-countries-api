import CountryInfo from "../CountryInfo";
import Flag from "../Flag";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.cardContainer}>
      {props.data.map((item) => (
        <div
          key={item.id}
          className={classes.card}
          onClick={() => props.clickHandler(item)}
        >
          <Flag src={item.flag} />
          <CountryInfo
            countryName={item.countryName}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        </div>
      ))}
    </div>
  );
}

export default Card;
