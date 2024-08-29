import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const reqConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", reqConfig, []);

  if (isLoading) {
    return <p>Loading meals</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem id={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
