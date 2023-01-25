import {useNavigate} from 'react-router-dom'

function Recipes({recipes,addToCart,fetchSingleRecipe}){
    let navigate = useNavigate();


    return(
       <>
        {recipes.map((recipe) =>{ 
            return(

                    <figure className = 'recipe' key = {recipe.id} id = {recipe.id}>
                        <img src={recipe.image} alt=""></img>
                        <figcaption>{recipe.name}</figcaption>
                        <button className= "buttons" onClick={()=>{addToCart(recipe)}}>Add to Cart</button>
                        {/* <button className= "buttons" onClick={() => }>Recipe Info</button> */}
                        <button className= "buttons" onClick={(e) => {
                            fetchSingleRecipe(recipe.id)
                            navigate('/singlerecipe')
                        }
                        }>Recipe Info</button>
                    </figure>
                    )
        })}

   
        </>
    )
}

export default Recipes;


