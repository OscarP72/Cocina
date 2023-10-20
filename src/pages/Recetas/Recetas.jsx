import "./Recetas.css";
import { useState, useEffect } from "react";

const Recetas = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);

  const getItems = async () => {
    const YOUR_APP_ID = "9e9e1d2c";
    const YOUR_APP_KEY = "ffef92e20691c00963fe7a041e762e09";
    const query = "q:";

    const data = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&page=${page}&limit=30`
    );
    const dataJSON = await data.json();
    setItems(dataJSON.hits);
  };
  useEffect(() => {
    getItems();
  }, []);

 
  return (
    <main className="recetario">
      <ul className="galeria">
        {items.map((item) => (
          <li key={item.source}>
            <img src={item.recipe.image} alt={item.recipe.label} />
            <h4>{item.recipe.title}</h4>
            <h2>{item.recipe.label}</h2>
            <h4>{item.recipe.ingredientLines}</h4>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Recetas;
