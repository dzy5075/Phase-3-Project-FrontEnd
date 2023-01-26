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
                    <div className='right-btns'>
                        <button onClick={() => {navigate('/Cart')}} className = "Cart"> Cart </button>
                        
                        
                        <button onClick={(e) => {
                            console.log("hello!")
                            fetch("http://localhost:9292/cart_items", {
                                method: "DELETE",
                            })
                        }}
                    > New Cart </button>

                    </div>
                   
                </div>
            </div>
        </nav>
    )
}

export default NavBar