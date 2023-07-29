import Logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import "../Header/header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={Logo} alt="logo" />
      </Link>

      <div className="right-header">
        <Link to={"/pokemons"}>Pokemons</Link>

        <Link to={"/types"}>Types</Link>
      </div>
    </div>
  );
}
