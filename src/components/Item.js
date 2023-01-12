import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart]=useState(false)

  const cartClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove From Cart": "Add to Cart"
  function handleAddToCart(){
    setInCart(inCart=>!inCart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
