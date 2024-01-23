import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import Login from "./Login";
import Signup from "./Singnup";
import RecipeDetails from "../Components/RecipeDetails";
import PrivateRoutes from "./PrivateRoutes";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<PrivateRoutes><RecipeDetails/></PrivateRoutes>} />
      </Routes>
    </div>
  );
};

export default Allroutes;
