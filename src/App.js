import { useState } from "react";

import classes from "./App.module.css";
import SearchField from "./components/SearchField/SearchField";
import Header from "./components/Header/Header";
import Card from "./components/CountryCard/Card";
import DetailsPage from "./components/DetailsPage/DetailsPage";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [activeCard, setActiveCard] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState("light");

  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function selectHandler(e) {
    console.log(e.target.innerText);
    setRegion(e.target.innerText);
  }

  function recieveData(data) {
    setSearchData(data);
  }

  function clickHandler(object) {
    setActiveCard(object);
    setIsShown((current) => !current);
  }

  return (
    <div className={classes.app} data-theme={theme}>
      <Header themeHandler={themeHandler} />
      {!isShown && (
        <>
          <SearchField
            recieveData={recieveData}
            region={region}
            selectHandler={selectHandler}
          />
          <Card data={searchData} clickHandler={clickHandler} />
        </>
      )}
      {isShown && <DetailsPage data={activeCard} clickHandler={clickHandler} />}
    </div>
  );
}

export default App;
