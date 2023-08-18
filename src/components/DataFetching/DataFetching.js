import React, { useState, useEffect } from "react";
import axios from "axios";

import "./DataFetching.css";

function DataFetching() {
  const [meal, setMeal] = useState([]);
  const [video, setVideo] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const { meals } = res.data;
        const { strYoutube } = meals[0];
        console.log(meals[0]);
        setMeal(meals[0]);

        setVideo(strYoutube.replace("watch?v=", "embed/"));
        console.log("video", video);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h1>Feeling hungry?</h1>
          <h2>Get a random meal by clicking below</h2>
          <button> Get Meal &#127828;</button>
        </header>
        <main>
          <div className="pic-info-ingredients">
            <div>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            <ul>
              <li>Category: {meal.strCategor}</li>
              <li>Area: {meal.strArea}</li>
              <li>Tags: {meal.strTags}</li>
            </ul>

            <div>
              <h3>Ingredients:</h3>
              <ul>
                <li>
                  {meal.strIngredient1}- {meal.strMeasure1}
                </li>
              </ul>
            </div>
          </div>
          <div className="food-info">
            <h1 className="food-title">{meal.strMeal}</h1>
            <p className="food-instructions">{meal.strInstructions}</p>
          </div>
        </main>
        <footer className="video-recipe">
          <h1 className="video-recipe-title">Video Recipe</h1>
          <div className="video-recipe-clip">
            <iframe
              width="560"
              height="315"
              src={video}
              title="Youtube Player"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DataFetching;
