import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";

function ItemDetail({ celulares }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(celulares, count);
  }

  if (celulares.category === "Accesorios") {
    return (
      <div className="card-detail">
        <div className="card-detail_img">
          <img src={celulares.imgurl} alt="Celulares img" />
          <div>
            <h2 className="modelTitle">{celulares.title}</h2>
            <p className="description">{celulares.description}</p>
          </div>
        </div>
        <h5 className="features">Características:</h5>
        <div className="data">
          <p>Marca: {celulares.brand}.</p>
          <p>Color: {celulares.color}.</p>
        </div>
        <p className="stock">Stock disponible: {celulares.stock} unidades.</p>
        <div className="card-detail_detail">
          <h4 className="price">$ {celulares.price}</h4>
        </div>
        {isInCart ? (
          <div className="buy">
            <Link to="/cart">
              <MyButton>Ir al Carrito</MyButton>
            </Link>
          </div>
        ) : (
          <ItemCount onAddToCart={onAddToCart} stock={celulares.stock} />
        )}
      </div>
    );
  } else {
    return (
      <div className="card-detail">
        <div className="card-detail_img">
          <img src={celulares.imgurl} alt="Celulares img" />
          <div>
            <h2 className="modelTitle">
              {celulares.brand} {celulares.title}
            </h2>
            <p className="description">{celulares.description}</p>
          </div>
        </div>
        <h5 className="features">Características:</h5>
        <div className="data">
          <p>Color: {celulares.color}.</p>
          <p>Cámara trasera: {celulares.camera}.</p>
          <p>Cámara frontal: {celulares.frontalCamera}.</p>
          <p>Pantalla: {celulares.screen}.</p>
          <p>Memoria RAM: {celulares.ram}.</p>
          <p>Memoria interna: {celulares.internalMemory}.</p>
          <p>Sistema operativo: {celulares.operatingSystem}.</p>
          <p>Procesador: {celulares.processor}.</p>
          <p>Batería: {celulares.batery}.</p>
        </div>
        <p className="stock">Stock disponible: {celulares.stock} unidades.</p>
        <div className="card-detail_detail">
          <h4 className="price">$ {celulares.price}</h4>
        </div>
        {isInCart ? (
          <div className="buy">
            <Link to="/cart">
              <MyButton>Ir al Carrito</MyButton>
            </Link>
          </div>
        ) : (
          <ItemCount onAddToCart={onAddToCart} stock={celulares.stock} />
        )}
      </div>
    );
  }
}

export default ItemDetail;
