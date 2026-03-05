import { Link } from "react-router-dom";
import Styles from "./Header.module.css";

const Header = () => (
  <Link to="/" className={Styles.logo}>
    <h1 className={Styles.logoText}>
      Royal<span className={Styles.logoAccent}>Food</span>
    </h1>
  </Link>
);

export default Header;
