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
        <div id = 'cart'>user cart that holds a list of all grocery items
            {cartItems.map((cartItem) =>{
                return (
                    console.log(cartItem.recipe_id)
                )
            })}
        </div>
     );
}
 
export default Cart;