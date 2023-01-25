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
  const[recipes,setRecipe]= useState([])
  const [cartItems, setCartItems] = useState([])
  const [singleRecipe, setSingleRecipe] = useState([])



  // function addToCart(recipe) {
  //   console.log(recipe)

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
          <RecipePage recipes={recipes} setRecipe={setRecipe} fetchSingleRecipe={fetchSingleRecipe}/>
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
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
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
