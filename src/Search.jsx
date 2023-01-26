function Search ({search,setSearch,setDropDown}){
    
  
    return( 
        
          

    <div id = "searchbar" >
    <input type = "text" className = "recipe_search" value = {search} onChange = {(e) => {setSearch(e.target.value)}} placeholder="Filter"/> <br/>
    <select name="filter" onChange={(e) => setDropDown(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Beef">Beef</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Chicken">Chicken</option>
          <option value="Goat">Goat</option>
          <option value="Lamb">Lamb</option>
          <option value="Pasta">Pasta</option>
          <option value="Pork">Pork</option>
          <option value="SeaFood">SeaFood</option>
          <option value="Side">Side</option>
          <option value="Starter">Starte</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Dessert">Dessert</option>
        </select>
    </div>

    )
}

export default Search