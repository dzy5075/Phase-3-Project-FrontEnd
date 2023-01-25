import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";
import { useEffect,useState } from "react";
import NavBar from "./NavBar";

const RecipePage = () => {
    const[recipes,setRecipe]= useState([])

    const fetchRecipe = async() => {
        let req = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        let res   = await req.json()
        console.log(res.meals)
        
        setRecipe(res.meals)
        
    } 

    useEffect(() =>{
        fetchRecipe()
    },[])

    

    return ( 
        <>
        <div>
        
        <video id="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="Food - 24999 (1).mp4" type="video/mp4" />
        </video>
        
        <div id='recipe-page'>
        <NavBar />
        <Recipes key = {recipes.idMeal} recipes = {recipes}/>
        {/* <Singlerecipe /> */}
        </div>
        
        </div>
        </>
     );
}
 
export default RecipePage;