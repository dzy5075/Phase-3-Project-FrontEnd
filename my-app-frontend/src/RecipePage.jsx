import Recipes from "./Recipes";
import SingleRecipe from "./SingleRecipe";
import {useEffect} from "react";
import NavBar from "./NavBar";
import Search from "./Search"

const RecipePage = ({recipes,setRecipe,addToCart,fetchSingleRecipe}) => {
    

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
        
        <video id="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="Food - 24999 (1).mp4" type="video/mp4" />
        </video>
        
        <div id='recipe-page'>
        <NavBar/>
        <Search/>
        <Recipes recipes = {recipes} fetchSingleRecipe={fetchSingleRecipe}/>
        {/* <Singlerecipe /> */}
        </div>
        
        </div>
        </>
     );
}
 
export default RecipePage;