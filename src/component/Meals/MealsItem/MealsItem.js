import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    ctx.onAddItem(
      {
        id: props.id,
        name: props.name,
        price: props.price,
        amount,
      },
      amount
    );
  };

  return (
    <li className={classes.meal}>
      <section className={classes.left}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h4>{price} $</h4>
      </section>
      <section>
        <MealsItemForm onAddToCart={onAddToCartHandler} />
      </section>
    </li>
  );
};

export default MealsItem;
