import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/food")
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Food Menu</h1>

      {foods.length === 0 ? (
        <p>Loading food items...</p>
      ) : (
        foods.map((food) => (
          <div key={food.id}>
            <h3>{food.name}</h3>
          </div>
        ))
      )}

    </div>
  );
}

export default App;