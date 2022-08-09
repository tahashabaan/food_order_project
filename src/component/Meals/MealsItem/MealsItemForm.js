import React, { useContext, useRef, useState } from 'react';
import classes from './MealsItemForm.module.css'

const MealsItemForm = (props) => { 

   const [itemIsvalid, setItemIsvalid] = useState(true)

  const numberRef = useRef();
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmountNumber = +(numberRef.current.value)

    if(enteredAmountNumber <1 ||   enteredAmountNumber > 5  ) {
      setItemIsvalid(false)
      return}

      props.onAddToCart(enteredAmountNumber)
  }


  return (
    <form onSubmit={onSubmitHandler} 
     className={classes.form}>
      <div>
       <label htmlFor='number'>Amount</label>
       <input 
        ref={numberRef}
        max='5'
        min='1'
        type='number'
        id='number'
        defaultValue='1'/>
       </div> 
     <button > +Add </button>
      {!itemIsvalid && <p>please enter valided number(1,5)..</p>}
    </form>
  )
}

export default MealsItemForm