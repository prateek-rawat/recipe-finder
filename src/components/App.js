import React from "react";
import { useState } from "react";
import Structure from "./Structure";
import RecipeResults from "./RecipeResults";

const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [more, setMore] = useState("initial")

  const appId = "f69b3a69";
  const applicationKey = "9d63d62b41517d2dfecdd154b9f065bb";


  return (
    <div>
      <Structure
        inputValue={inputValue}
        setInputValue={setInputValue}
        appId={appId}
        applicationKey={applicationKey}
        recipes={recipes}
        setRecipes={setRecipes}
        more={more}
        setMore={setMore}
      />

      <RecipeResults
        recipes={recipes}
        more={more}
      />
    </div>
  )
};

export default App;
