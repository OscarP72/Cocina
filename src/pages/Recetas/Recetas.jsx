import "./Recetas.css";
import { useState, useEffect } from "react";
 

const Recetas = ()=>{
const [items, setItems] = useState([]);
const [loaded, setLoaded] = useState (false);



const getItems =async () =>{
    const data = await fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=9e9e1d2c&app_key=ffef92e20691c00963fe7a041e762e09&diet=balanced&imageSize =NORMALES");
    const dataJSON = await data.json();
    setItems(dataJSON.tags);
};
useEffect(() => {
    getItems();
},[]);



    return <main>Recetas</main>
}
export default Recetas;