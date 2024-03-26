import React from 'react';
import Card from '../../UI/Card/Card';

import classes from './SummaryMeals.module.css'

const SummaryMeals = () => {
  return (
    <Card className={classes.summary}>
      <h1>Delicious Food, Delivered To You</h1>
      <p>choose Your Favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home </p>

      <p>All our meals are cooked with high-qualit ingredients, just-in-time and of course by experienced chefs! </p>
    </Card>
  )
}

export default SummaryMeals;