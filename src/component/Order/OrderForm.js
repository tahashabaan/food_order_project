import { useState } from "react";

import classes from "./OrderForm.module.css";

const OrderForm = ({ onHideOrderForm }) => {
  // const [name, setName] = useState({ value: "", isClicked: false });
  // const [street, setStreet] = useState({ value: "", isClicked: false });
  // const [postal, setPostal] = useState({ name: "", isClicked: false });
  // const [city, setCity] = useState({ name: "", isClicked: false });
  const [inputVal, setInputVal] = useState({
    name: "",
    street: "",
    postal: "",
    city: "",
  });
  const [inputBlur, setInputBlur] = useState({
    name: false,
    street: false,
    postal: false,
    city: false,
  });

  const inputValHandler = (e) => {
    setInputVal((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const inputBlurHandler = (e) => {
    setInputBlur((prev) => ({ ...prev, [e.target.id]: true }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name: inputVal.name,
      city: inputVal.city,
      street: inputVal.street,
      postal: inputVal.postal,
    };

    const userBlur = {
      name: inputBlur.name,
      city: inputBlur.city,
      street: inputBlur.street,
      postal: inputBlur.postal,
    };

    setInputVal({
      name: "",
      street: "",
      postal: "",
      city: "",
    });

    console.log(userData);
    console.log(userBlur);
  };

  const isNameInValid = inputVal.name.trim() === "" && inputBlur.name;
  const isStreetInValid = inputBlur.street && inputVal.street.trim() === "";
  const isPostalInValid =
    inputBlur.postal &&
    inputVal.postal.trim() === "" &&
    inputVal.postal.length < 5;
  const isCityInValid = inputBlur.city && inputVal.city.trim() == "";

  let formIsValid =
    !isNameInValid || !isStreetInValid || !isPostalInValid || !isCityInValid;
  return (
    <form className={classes["order_form"]} onSubmit={submitHandler}>
      <div className={`${classes.control} ${isNameInValid ? classes.err : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputValHandler}
          onBlur={inputBlurHandler}
        />
      </div>

      <div
        className={`${classes.control} ${isStreetInValid ? classes.err : ""}`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={inputValHandler}
          onBlur={inputBlurHandler}
        />
      </div>
      <div
        className={`${classes.control} ${isPostalInValid ? classes.err : ""}`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={inputValHandler}
          onBlur={inputBlurHandler}
        />
      </div>
      <div className={`${classes.control} ${isCityInValid ? classes.err : ""}`}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={inputValHandler}
          onBlur={inputBlurHandler}
        />
      </div>
      <div className={classes.actions}>
        <button type="submit">Confirm</button>
        <button onClick={onHideOrderForm}>Cancel</button>
      </div>
    </form>
  );
};

export default OrderForm;
