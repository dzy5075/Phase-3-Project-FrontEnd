import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";
import {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Search from "./Search"

const RecipePage = ({postToCart,fetchSingleRecipe}) => {
const [search, setSearch] = useState("")
const[recipes,setRecipe]= useState([])
const[dropDown,setDropDown] = useState("All")

    

    const fetchRecipe = async() => {
        let req = await fetch('http://localhost:9292/recipes')
        let res   = await req.json()        
        setRecipe(res)
        
    } 

    useEffect(() =>{
        fetchRecipe()
    },[])

    const filteredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(search.toLowerCase())
    }
    )

    const dropDownRecipes = filteredRecipes.filter(recipe => {
        return
    })



    return ( 
        <>
        <div>
        
        <video class="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="Food - 24999 (1).mp4" type="video/mp4" />
        </video>
        
        <div id='recipe-page'>
        <NavBar/>
        <Search search={search} setSearch={setSearch} setDropDown={setDropDown} />
        {/* <PotentialFeaturedRecipe? /> */}
         {/* <PotentialRandomizerMultipleRecipes? /> */}
        <Recipes recipes = {filteredRecipes} fetchSingleRecipe={fetchSingleRecipe} postToCart={postToCart}/>
        </div>
        
        </div>
        </>
     );
}
 
export default RecipePage;