import {useNavigate} from 'react-router-dom'

function Recipes({recipes}){
    let navigate = useNavigate();
    return(
       <>
        {recipes.map((recipe) =>{ 
            return(

                    <figure className = 'recipe'>
                        <img src={recipe.strMealThumb} alt=""></img>
                        <figcaption>{recipe.strMeal}</figcaption>
                        <button>Add to Cart</button>
                        <button onClick={() => {navigate('/singlerecipe')}}>Recipe Info</button>
                    </figure>
                    )
        })}

   
        </>
    )
}

export default Recipes;


