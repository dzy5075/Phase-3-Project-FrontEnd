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
                    <img onClick={() => {navigate('/')}} src="/QuickCart Logo.png" alt="QuickCartLogo" href="/"/> 
                </div>
                <div classname = "cartlogo">
                <button onClick={() => {navigate('/Cart')}} className = "Cart"> Cart </button> 
                </div>
            </div>
        </nav>
    )
}

export default NavBar