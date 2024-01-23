import { useEffect, useState } from "react";
import Search from "../Components/Search";
import RecipeList from "../Components/RecipeList";
import { getRecipes } from "../Services/api";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState('pasta');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getSearchedResult();
    }, [searchedQuery])

    const getSearchedResult = async () => {
        let result = await getRecipes(searchedQuery);
        if (result && result.recipes) {
            setRecipes(result.recipes);
        }
    }

    return (
        <div className="recipeemain">
            <Search setSearchedQuery={setSearchedQuery} />
            <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
        </div>
    )
}

export default Recipes;
