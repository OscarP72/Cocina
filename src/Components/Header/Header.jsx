import "./Header.css";

const Header = ({ logo, logoAlt, links}) => {
  return (
    <header>
      <img src={logo} alt={logoAlt}/>
      <nav>
        <ul>
          {links.map((link) =>(
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
