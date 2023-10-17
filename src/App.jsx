import "./App.css";
import Header from "./Components/Header/Header";
import logo from "./assets/logo.jpg"
import { links } from "./data/data";
import Footer from "./Components/Footer/Footer";

const App = () => {

  return <>
  <Header logo={logo} logoAlt="Logo de Juegos" links={links}/>
  <main></main>
  <Footer/>
  </>;
};

export default App;
