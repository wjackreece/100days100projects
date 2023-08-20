import React, { useState, useEffect } from "react";
import axios from "axios";

import "./DataFetching.css";

function DataFetching() {
  const [meal, setMeal] = useState([]);
  const [video, setVideo] = useState("");
  const [tags, setTags] = useState("");

  function handleClick() {
    window.location.reload();
    console.log("You clicked submit.");
  }

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const { meals } = res.data;
        const { strYoutube } = meals[0];
        const { strTags } = meals[0];
        console.log("strTags", meals[0].strTags);
        setMeal(meals[0]);
        setVideo(strYoutube.replace("watch?v=", "embed/"));
        setTags(strTags.replaceAll(",", ", "));
        console.log("strTags", meals[0].strTags);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h1>Feeling hungry?</h1>
          <h2>Get a random meal by clicking below</h2>
          <button type="button" class="btn btn-primary" onClick={handleClick}>
            Get Meal &#127828;
          </button>
        </header>
        <main className="main-container">
          <div className="pic-info-ingredients">
            <div>
              <img
                className="meal-image"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>
            <ul className="meal-CAT">
              {meal.strCategory !== null && (
                <li>
                  <span className="meal-CAT-item">Category:</span>{" "}
                  {meal.strCategory}
                </li>
              )}

              <li>
                <span className="meal-CAT-item">Area:</span> {meal.strArea}
              </li>
              {meal.strTags !== null && (
                <li>
                  <span className="meal-CAT-item">Tags:</span> {tags}
                </li>
              )}
            </ul>

            <div>
              <h3>Ingredients:</h3>
              <ul className="meal-ingredients">
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
