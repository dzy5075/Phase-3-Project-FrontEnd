import "./App.css"
import {useState} from "react";
import RecipePage from "./RecipePage";
import Cart from "./Cart";
import NavBar from "./NavBar"
import Search from "./Search"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import SingleRecipe from "./SingleRecipe";


function App() {
  
  const [cartItems, setCartItems] = useState([])
  const [singleRecipe, setSingleRecipe] = useState([])
  //const [addToCart,setAddToCart] = useState([])


  const postToCart = async(recipe) => {
    console.log(recipe.id)
    let req = await fetch('http://localhost:9292/cart_items',{ 
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify({
        recipe_id: recipe.id
        }),
    })
    let res = await req.json()        
    // setAddToCart(res)
    console.log(res)
}
// useEffect(() =>{
//     postToCart()
// },[])


  // function addToCart(recipe) {
  //   // console.log(recipe)
  //   // setToCart([...toCart,recipes])
  // }

  function fetchSingleRecipe(id) {
    console.log(id)
    fetch(`http://localhost:9292/recipes/${id}`)
    .then(res => res.json())
    .then(res => setSingleRecipe(res))
    console.log(singleRecipe)
}

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <>
          <RecipePage  fetchSingleRecipe={fetchSingleRecipe} postToCart={postToCart}/>
          </>
      
      },
      {
        path:'/singlerecipe',
        element: 
        <>
        <NavBar/>
        <SingleRecipe singleRecipe={singleRecipe} />
        </>
      },
      {
        path: '/cart',
        element:
        <>
        <NavBar/>
        <Cart cartItems={cartItems} setCartItems={setCartItems} postToCart={postToCart}/>
        </>
        
      },
      {
        path:'*',
        element: <h1>404 not found!</h1>
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider router = {router} />


    </div>
  );
}

export default App;
