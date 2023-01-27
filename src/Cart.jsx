// import Recipes from "./Recipes";
import { useEffect } from "react";

const Cart = ({cartItems, setCartItems, addToCart, setAddToCart}) => {

    



    
    // const recipes = cartItems[0]
    // console.log(recipes)
    // recipes.map(rec =>{
    //     return(
    //         console.log(rec)
    //     )
    // })

    // const ingredients = cartItems[1]
    // ingredients.map(ingredient =>{
    //     return(
    //         console.log(ingredient)
    //     )
    // })

    const recipe = cartItems[0].map(rec =>{
        // console.log(recipes)
            return(
                <figure className = 'recipe'>
                    <img src = {rec.image} alt={rec.name}/>
                    <figcaption>{rec.name}</figcaption>
                    </figure>
                
            )
        })

        const ingredients = cartItems[1].map(ingre =>{
            return(
                console.log(ingre.name),
                console.log(ingre.quantity),
                console.log(ingre.aisle)

            )
        })

    return (
        <>
                <video class="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="Vegetable Stand - 151 (3).mp4" type="video/mp4" />
        </video>
        <div id = 'cart'> 
        {recipe}
        </div>
        </>
     );
}
 
export default Cart;