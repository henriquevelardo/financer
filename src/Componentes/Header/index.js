import { Link } from "react-router-dom";
import MenuHamburguer from "../MenuHamburguer";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <MenuHamburguer />
      <Link to="./" className="link">
        <h1>Financer</h1>
      </Link>
      <h2>2023</h2>
    </header>
  );
}
