import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const SingleRecipe = ({singleRecipe}) => {
    return ( 
        <>
                <video class="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="Food - 24999 (1).mp4" type="video/mp4" />
        </video>

            <figure className="single-recipe">
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
        
            <div id="instructions"><h4>Cooking Instructions:</h4><br/><p>{singleRecipe[0].instruction}</p></div>
        
        {/* <>
        <LiteYouTubeEmbed 
        id="L2vS_050c-M"
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
    </> */}

        </>
     );
}
 
export default SingleRecipe;