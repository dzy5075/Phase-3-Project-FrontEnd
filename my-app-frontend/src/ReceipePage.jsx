import Receipes from "./Recipes";
import SingleReceipe from "./SingleReceipe";
import { useEffect,useState } from "react";

const ReceipePage = () => {
    const[receipes,setReceipe]= useState([])

    const fetchReceipe = async() => {
        let req = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        let res   = await req.json()
        console.log(res.meals)
        
        setReceipe(res.meals)
        
    } 

    useEffect(() =>{
        fetchReceipe()
    },[])

    

    return ( 
        <>
        <div id='receipe-page'>
        <Receipes key = {receipes.idMeal} receipes = {receipes}/>
        {/* <SingleReceipe /> */}
        </div>
            
        </>
     );
}
 
export default ReceipePage;