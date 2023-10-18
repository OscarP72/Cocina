import { NavLink } from "react-router-dom";
import "./Header.css";


const Header = ({ logo, logoAlt, links}) => {
  return (
    <header>
      <img src={logo} alt={logoAlt}/>
      <nav>
        <ul>
          {links.map((link) =>(
            <li key={link.name}>
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
