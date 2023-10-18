import { useLoaderData } from "react-router-dom";
import Banner from "../sections/Banner";
import Navbar from "../sections/Navbar";
import BrandCard from "./BrandCard";
import Footer from "../sections/Footer";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>

           <div className="mt-12">
            <h2 className="text-5xl text-center font-bold text-red-500">OUR <span className="text-5xl font-bold italic text-amber-600">BRANDS</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 pb-16 w-11/12 mx-auto">
            {
                brands.map(brand=><BrandCard key={brand.id} brand={brand}></BrandCard> )
            }
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;