import "./App.css"
import ReceipePage from "./ReceipePage";
import Cart from "./Cart";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleReceipe from "./SingleReceipe";


function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <ReceipePage />
      },
      {
        path:'/singlerecipe',
        element: <SingleReceipe />
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
