import "./App.css"
import {useState} from "react";
import RecipePage from "./RecipePage";
import Cart from "./Cart";
import NavBar from "./NavBar"
import Search from "./Search"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleRecipe from "./SingleRecipe";


function App() {
  const[recipes,setRecipe]= useState([])
  const [toCart, setToCart] = useState([])

  const addToCart = (recipes) => {
    setToCart([...toCart,recipes])
  }

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <>
          <RecipePage recipes={recipes} setRecipe={setRecipe} addToCard={addToCart}/>
          </>
      
      },
      {
        path:'/singlerecipe',
        element: 
        <>
        <NavBar/>
        <SingleRecipe/>
        </>
      },
      {
        path: '/cart',
        element:
        <>
        <NavBar/>
        <Cart recipes={recipes} addToCard={addToCart}/>
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
