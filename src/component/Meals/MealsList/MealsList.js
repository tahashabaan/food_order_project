import React from 'react'
import Card from '../../UI/Card/Card'
import MealsItem from '../MealsItem/MealsItem'
import classes from './MealsList.module.css'

const MealsList = (props) => {

  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ]
  return (
    <Card className={classes.list}>
      <ul>
        {DUMMY_MEALS.map((meal) => <MealsItem
          key={meal.id}
          name={meal.name}
          id={meal.id}
          description={meal.description}
          price={meal.price} 
         />)}
      </ul>
    </Card>
    
  )
}

export default MealsList