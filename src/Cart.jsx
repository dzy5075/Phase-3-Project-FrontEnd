// import Recipes from "./Recipes";
import { useEffect } from "react";

const Cart = ({cartItems, setCartItems}) => {

    const fetchCartItems = async() => {
        let req = await fetch('http://localhost:9292/cart_items')
        let res   = await req.json()        
        setCartItems(res)
        console.log(cartItems)
    }
    useEffect(() =>{
        fetchCartItems()
    },[])

    return (
        <>
                <video class="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="Vegetable Stand - 151 (3).mp4" type="video/mp4" />
        </video>
        <div id = 'cart'>user cart that holds a list of all grocery items
            {cartItems.map((cartItem) =>{
                return (
                    console.log(cartItem.recipe_id)
                )
            })}
        </div>
        </>

     );
}
 
export default Cart;