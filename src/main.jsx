import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Alimentos from "./pages/Alimentos/Alimentos.jsx";
import AnalisisNutricional from "./pages/AnalisisNutricional/AnalisisNutricional.jsx";
import Recetas from "./pages/Recetas/Recetas.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/analisisNutricional" element={<AnalisisNutricional />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
