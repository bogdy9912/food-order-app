import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          // handle error
        }

        const meals = await response.json();
        setLoadedMeals([...meals]);
      } catch (err) {
        // handle err
      }
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem id={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
