import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemlist.css";
import { getItemsByCategory, getItemsOrdered } from "../../Services/firestore";
import Loader from "../Loaders/Loader";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [celularess, setCelularess] = useState(null);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    if (!idCategory) {
      let respuesta = await getItemsOrdered();
      setCelularess(respuesta);
    } else {
      let respuesta = await getItemsByCategory(idCategory);
      setCelularess(respuesta);
      console.log({ idCategory });
    }
  }

  useEffect(() => {
    getItemsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCategory]);

  return (
    <div>
      {celularess ? (
        <ItemList celularess={celularess} />
      ) : (
        <Loader size={100} color="#07E82B" speed={1.8} />
      )}
    </div>
  );
}

export default ItemListContainer;
