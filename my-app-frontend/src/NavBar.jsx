import {useNavigate} from 'react-router-dom'

function NavBar ({search,setSearch}){
    let navigate = useNavigate();
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    return(
        <nav>
            <div className = "banner">
                <div className = "logo">
                    <img onClick={() => {navigate('/')}} src="/QuickCart Logo.png" alt="QuickCart" href="/"/> 
                </div>
                <input type = "text" className = "recipe_search" value = {search} onChange = {handleSearch} placeholder="Filter"/> <br/>
                <button onClick={() => {navigate('/Cart')}} className = "Cart"> Cart </button> 
            </div>
        </nav>
    )
}

export default NavBar