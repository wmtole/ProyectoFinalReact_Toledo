import React from "react";
import Item from "./Item";
import "./itemlist.css";

function ItemList({ celularess }) {
  return (
    <div>
      <p className="title">Bienvenidos a nuestra tienda online.</p>
      <p className="list">Nuestros productos:</p>
      <div className="item-list">
        {celularess.map((celulares) => {
          return (
            <Item
              key={celulares.id}
              id={celulares.id}
              imgurl={celulares.imgurl}
              title={celulares.title}
              price={celulares.price}
              category={celulares.category}
              brand={celulares.brand}
              discount={celulares.discount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(ItemList);
