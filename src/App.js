import "./App.css"
import {useState,useEffect} from "react";
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

const fetchCartItems = async() => {
  let req = await fetch('http://localhost:9292/cart_items')
  let res   = await req.json()        
  setCartItems(res)
  console.log(cartItems)
}
useEffect(() =>{
  fetchCartItems()
},[])


  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <>
          <RecipePage  fetchSingleRecipe={fetchSingleRecipe} postToCart={postToCart} fetchCartItems = {fetchCartItems}/>
          </>
      
      },
      {
        path:'/singlerecipe',
        element: 
        <>
        <NavBar fetchCartItems = {fetchCartItems}/>
        <SingleRecipe singleRecipe={singleRecipe} />
        </>
      },
      {
        path: '/cart',
        element:
        <>
        <NavBar fetchCartItems={fetchCartItems}/>
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
