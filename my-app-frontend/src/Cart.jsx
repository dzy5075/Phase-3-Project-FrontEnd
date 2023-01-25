import Recipes from "./Recipes";

const Cart = ({recipes, addToCart}) => {
    return ( 
        <div id = 'cart'>user cart that holds a list of all grocery items
            <Recipes key = {recipes.idMeal} recipes = {recipes}/>

        </div>
     );
}
 
export default Cart;