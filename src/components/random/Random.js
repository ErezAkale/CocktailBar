import React, { useState, useEffect } from "react";
import axios from "axios";

export const Random = () => {
  const [RandomDrinkData, setRandomDrinkData] = useState(null);

  useEffect(() => {
    const getRandom = () => {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((Response) => {
          setRandomDrinkData(Response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getRandom();
  }, []);

  return (
    <div>
      {/* {JSON.stringify(RandomDrinkData)} */}
      {RandomDrinkData && (
        <div className="random-drink">
          <h2>Recommended cocktails</h2>
          <h3>{RandomDrinkData.drinks[0]?.strDrink}</h3>
          <img
            src={RandomDrinkData.drinks[0]?.strDrinkThumb}
            alt={RandomDrinkData.drinks[0]?.strDrink}
          />
        </div>
      )}
    </div>
  );
};
