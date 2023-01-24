import "./App.css"
import RecipePage from "./RecipePage";
import Cart from "./Cart";
import NavBar from "./NavBar"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleRecipe from "./SingleRecipe";


function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RecipePage />
      },
      {
        path:'/singlerecipe',
        element: <SingleRecipe />
      },
      {
        path: '/cart',
        element:<Cart />
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
