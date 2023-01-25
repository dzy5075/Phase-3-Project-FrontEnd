const SingleRecipe = ({singleRecipe}) => {
    return ( 
        <>
            <figure>
            <img src={singleRecipe[0].image} alt=""></img>
            <figcaption>{singleRecipe[0].name}</figcaption>
            </figure>
        <table id="ingredients">
            <tr>
            <th>Ingredients</th>
            <th>Quantity</th>
            </tr>

            {singleRecipe[1].map((recipe) => {
                return(
                    <tr>
                    <td>{recipe.name}</td>
                    <td>{recipe.quantity}</td>
                    </tr>
                )
            })}
        </table>
        
            <div><h4>Cooking Instructions:</h4><p>{singleRecipe[0].instruction}</p></div>
        
        </>
     );
}
 
export default SingleRecipe;