import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const reqConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", reqConfig, []);

  if (isLoading) {
    return <p className="center">Loading meals</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
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
