import Receipes from "./Recipes";
import SingleReceipe from "./SingleReceipe";

const ReceipePage = () => {
    return ( 
        <>
        <div>takes in all of the receipes and sends them down</div>
        <Receipes />
        <SingleReceipe />
        </>
     );
}
 
export default ReceipePage;