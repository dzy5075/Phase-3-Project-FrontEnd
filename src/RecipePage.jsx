import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";
import {useEffect} from "react";
import NavBar from "./NavBar";
import Search from "./Search"

const RecipePage = ({recipes,setRecipe,postToCart,fetchSingleRecipe}) => {
    

    const fetchRecipe = async() => {
        let req = await fetch('http://localhost:9292/recipes')
        let res   = await req.json()        
        setRecipe(res)
        
    } 

    useEffect(() =>{
        fetchRecipe()
    },[])

    

    return ( 
        <>
        <div>
        
        <video class="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="Food - 24999 (1).mp4" type="video/mp4" />
        </video>
        
        <div id='recipe-page'>
        <NavBar/>
        <Search/>
        {/* <PotentialFeaturedRecipe? /> */}
         {/* <PotentialRandomizerMultipleRecipes? /> */}
        <Recipes recipes = {recipes} fetchSingleRecipe={fetchSingleRecipe} postToCart={postToCart}/>
        </div>
        
        </div>
        </>
     );
}
 
export default RecipePage;