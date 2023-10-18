import "./App.css";
import Header from "./Components/Header/Header";
import logo from "./assets/logo.png";
import { links } from "./data/data.js";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {

  return <>
  <Header logo={logo} logoAlt="Logo de Recetas" links={links}/>
  <Outlet/>
  <Footer/>
  </>;
};

export default App;
