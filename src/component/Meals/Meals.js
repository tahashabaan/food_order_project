import React, { Fragment } from 'react'
import MealsList from './MealsList/MealsList'
import SummaryMeals from './SummaryMeals/SummaryMeals'

const Meals = props => {
  return (
    <>
     <SummaryMeals/>
     <MealsList onSumbit={props.onSumbitItem}
      cartItem={props.cartItem}
     />
    </>

  )
}

Meals.propTypes = {}

export default Meals