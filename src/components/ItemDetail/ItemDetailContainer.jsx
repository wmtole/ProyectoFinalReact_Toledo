import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";

function ItemDetailContainer() {
  const [celulares, setCelulares] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idItem } = useParams();

  async function getItemsAsync() {
    getSingleItem(idItem).then((respuesta) => {
      setCelulares(respuesta);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getItemsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader size={100} color="#07E82B" speed={1.8} />;

  return <ItemDetail celulares={celulares} />;
}

export default ItemDetailContainer;
