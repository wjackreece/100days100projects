import React, { useState, useEffect } from "react";
import axios from "axios";

import "./DataFetching.css";
import { Meal_Endpoints } from "../../Controller";

function DataFetching() {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    Meal_Endpoints.map((url) => {
      axios
        .get(url)
        .then((res) => {
          console.log(res.data.meals[0]);
          setMeal(res.data.meals[0]);
        })
        .catch((err) => console.log(err));
    });
    // axios
    //   .get("https://www.themealdb.com/api/json/v1/1/categories.php")
    //   .then((res) => {
    //     console.log(res.data);
    //     // setPost(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <div>
      <ul>
        <li key={meal.idMeal}>{meal.strArea}</li>
      </ul>
    </div>
  );
}

export default DataFetching;
