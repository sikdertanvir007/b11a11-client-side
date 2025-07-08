import { Helmet } from "react-helmet-async";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const CategoriesPage = () => {
  return (
    <div>
      <Helmet> <title> Categories | MegaMerx</title></Helmet>
        <div><Navbar></Navbar></div>
    <div className="px-4 md:px-6 max-w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20">
     
      <Categories></Categories>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default CategoriesPage;
