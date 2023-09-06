import React, { useState, useEffect } from "react";
import classes from "./AvailiableMeals.module.css";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";
import { useFetchMeals } from "./ApiProvider";

export const AvailiableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useFetchMeals();

  useEffect(() => {
    const transformMeals = (data) => {
      setMeals(data);
    };

    fetchMeals(
      {
        url: "https://64ea398abf99bdcc8e676b68.mockapi.io/meals",
      },
      transformMeals
    );
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if(isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading meals ...</p>
      </section>
    );
  }

  console.log(error)
    if (error) {
      return (
        <section className={classes.mealsErr}>
          <p>{`Error! ${error}`}</p>
        </section>
      );
    }
  return (
    <section className={classes.meals}>
      <Card><ul>{mealsList}</ul></Card>
    </section>
  );
};
