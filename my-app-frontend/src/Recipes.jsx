import {useNavigate} from 'react-router-dom'

function Recipes({recipes,addToCart}){
    let navigate = useNavigate();
    return(
       <>
        {recipes.map((recipe) =>{ 
            return(

                    <figure className = 'recipe'>
                        <img src={recipe.strMealThumb} alt=""></img>
                        <figcaption>{recipe.strMeal}</figcaption>
                        <button className= "buttons" onClick={()=>{addToCart(recipe)}}>Add to Cart</button>
                        <button className= "buttons" onClick={() => {navigate('/singlerecipe')}}>Recipe Info</button>
                    </figure>
                    )
        })}

   
        </>
    )
}

export default Recipes;


