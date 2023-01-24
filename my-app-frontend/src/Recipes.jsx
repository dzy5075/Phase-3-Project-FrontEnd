function Receipes({receipes}){

    return(
       <>
          
        {receipes.map((receipe) =>{ 
            return(

                    <figure className = 'receipe'>
                        <img src={receipe.strMealThumb} alt=""></img>
                        <figcaption>{receipe.strMeal}</figcaption>
                    </figure>
                    )
        })}

   
            </>
    )
}

export default Receipes;