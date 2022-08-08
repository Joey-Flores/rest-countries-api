import { useState } from "react";
import Wrapper from "../UI/Wrapper";
import classes from "./FilterbyRegion.module.css";

function FilterbyRegion(props) {
  const [openDropdown, setOpenDropdown] = useState(false);

  function clickHandler() {
    setOpenDropdown((current) => !current);
  }

  function twoFuncClick(e) {
    clickHandler();
    props.selectHandler(e);
  }

  return (
    <div className={classes.dropdown}>
      <button onClick={clickHandler} className={classes.dropbtn}>
        <span>Filter by Region</span>
        <i className="fa-solid fa-sort-down"></i>
      </button>
      {openDropdown && (
        <div onClick={twoFuncClick} className={classes.dropdown_content}>
          <a href="#">Africa</a>
          <a href="#">America</a>
          <a href="#">Asia</a>
          <a href="#">Europe</a>
          <a href="#">Oceania</a>
        </div>
      )}
    </div>
  );
}

export default FilterbyRegion;
