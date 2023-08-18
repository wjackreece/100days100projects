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
    // <div>
    //   <ul>
    //     <li key={meal.idMeal}>{meal.strArea}</li>
    //   </ul>
    // </div>
    <div className="wrapper">
      <div className="container">
        <header>
          <h1>Feeling hungry?</h1>
          <h2>Get a random meal by clicking below</h2>
          <button> Get Meal &#127828;</button>
        </header>
        <main>
          <div className="pic-info-ingredients">
            <div>image</div>
            <ul>
              <li>Category: </li>
              <li>Area: </li>
              <li>Tags: </li>
            </ul>

            <div>
              <h3>Ingredients:</h3>
              <ul>
                <li>ingredient - amount</li>
              </ul>
            </div>
          </div>
          <div className="food-info">
            <h1 className="food-title">title</h1>
            <p className="food-instructions">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati quos debitis doloremque expedita quia consequatur odio
              quasi, sed repellendus asperiores animi esse soluta maiores nulla?
              Sequi nostrum earum maiores similique. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Deleniti quos eligendi tenetur odio
              amet? Voluptatum recusandae praesentium, inventore rem, eveniet
              obcaecati ipsa iste non maiores, architecto consequuntur sapiente
              minus eligendi?Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos odio odit dicta labore asperiores necessitatibus. Quis
              culpa possimus tenetur tempora fugiat labore? Saepe perspiciatis
              at id magnam quidem! Vero, totam.
            </p>
          </div>
        </main>
        <footer className="video-recipe">
          <h1 className="video-recipe-title">Video Recipe</h1>
          <div className="video-recipe-clip">Food Prep Video</div>
        </footer>
      </div>
    </div>
  );
}

export default DataFetching;
