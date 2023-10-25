import React, { useState, useEffect } from "react";

const Recetas = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Nuevo estado para la receta seleccionada
  const itemsPerPage = 10;
  const YOUR_APP_ID = "9e9e1d2c";
  const YOUR_APP_KEY = "ffef92e20691c00963fe7a041e762e09";
  const query = "q:";

  const getItems = async () => {
    const startIndex = (page - 1) * itemsPerPage;
    const data = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=${startIndex}&to=${startIndex + itemsPerPage}`
    );
    const dataJSON = await data.json();
    setItems(dataJSON.hits);
  };

  useEffect(() => {
    getItems();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <main className="recetario">
      {selectedRecipe ? ( 
        <div className="imagen-sola">
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.label}
            className="imagen-receta"
          />
          <h4>{selectedRecipe.label}</h4>
          <h4>{selectedRecipe.ingredientLines.join(", ")}</h4>
          <button onClick={() => setSelectedRecipe(null)}>Cerrar</button>
        </div>
      ) : (
        <ul className="galeria">
          {items.map((item) => (
            <li key={item.recipe.uri}>
              <img
                src={item.recipe.image}
                alt={item.recipe.label}
                onClick={() => setSelectedRecipe(item.recipe)} 
                className="imagen-receta"
              />
              <h4>{item.recipe.label}</h4>
            </li>
          ))}
        </ul>
      )}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </main>
  );
};

export default Recetas;


