import { useEffect, useState } from "react"
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
export const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const userID = useGetUserID();
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get("http://localhost:3001/recipes")
                setRecipes(response.data)
console.log(response.data);
            }
            catch (err) {
                console.error(err)
            }
        }
       
        fetchRecipe();
       
    }, [])


    return <div><h1>Recipes</h1>
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe._id}>
                    <div>
                        <h2>{recipe.name}</h2>
                    </div>
                   
                    <div className="instructions">
                        <p>{recipe.instructions}</p>
                    </div>
                  
                    <img src={recipe.imageUrl} alt={recipe.name} />
                    <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
                </li>
            ))}</ul></div>
}