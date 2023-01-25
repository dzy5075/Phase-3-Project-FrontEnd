function Search ({search,setSearch}){
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    return(    
    <div id = "searchbar" >
    <input type = "text" className = "recipe_search" value = {search} onChange = {handleSearch} placeholder="Filter"/> <br/>
    </div>
    )
}

export default Search