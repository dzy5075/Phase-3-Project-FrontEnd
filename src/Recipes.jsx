import {useNavigate} from 'react-router-dom'
import {useState} from 'react';

function Recipes({recipes,postToCart,fetchSingleRecipe}){
    let navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false)

    function favoriteRecipe(id) {
        console.log(isFavorite)
        setIsFavorite(!isFavorite)
    console.log(id)
        fetch(`http://localhost:9292/recipes/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              favorite: isFavorite
            }),
          })
        }

    return(
       <>
        {recipes.map((recipe) =>{ 
            return(

                    <figure className = 'recipe' key = {recipe.id} id = {recipe.id}>
                        <img src={recipe.image} alt=""></img>
                        <figcaption>{recipe.name}</figcaption>
                        <button className= "buttons" onClick={()=>{postToCart(recipe)}}>Add to Cart</button>
                        {/* <button className= "buttons" onClick={() => }>Recipe Info</button> */}
                        <button className= "buttons" onClick={(e) => {
                            fetchSingleRecipe(recipe.id)
                            navigate('/singlerecipe')
                        }
                        }>Recipe Info</button>
                        <button className="buttons" onClick={(e) => {
                            console.log("HelloWorld!")
                            favoriteRecipe(recipe.id)
                        }}
                        >Favorite</button>
                    </figure>
                    )
        })}

   
        </>
    )
}

export default Recipes;


