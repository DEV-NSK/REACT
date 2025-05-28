import Recipes from "./data.jsx";
import "./App.css";

const App = () => {
  return (
    <div id="container">
      <h1>FOOD-RECIPES</h1>
      <div className="card-container">
        {Recipes.map((item, index) => {
          return (
            <div className="card">
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>
              <span>
                <b>Cuisine - </b>
                {item.cuisine}
              </span>
              <p>
                <b>MealTpye -</b>
                {item.mealType}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
