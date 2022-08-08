import Wrapper from "../UI/Wrapper";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <Wrapper className={classes.text}>
        <h1>Where in the world?</h1>
        <div onClick={props.themeHandler} className={classes.darkMode}>
          <i className="fa-regular fa-moon"></i>
          <h4>Dark Mode</h4>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
