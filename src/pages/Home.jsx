import { useLoaderData } from "react-router-dom";
import Banner from "../sections/Banner";
import Navbar from "../sections/Navbar";
import BrandCard from "./BrandCard";
import Footer from "../sections/Footer";
import Contact from "./Contact";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div className="bg-slate-600">
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
           <div>
           <section className="why-us-section bg-cyan-800 pt-6 pb-20">
            <div className="container mx-auto text-center">
                <div className="flex justify-center items-center"><img className="w-1/5" src="https://i.ibb.co/R7MgbJw/Open-Doodles-Chilling.png" alt="" /></div>
                <h2 className="text-3xl font-bold text-red-300 mb-4">Why Choose Us</h2>
                <p className="text-slate-300 mb-8">
                    We're dedicated to providing the best fashion and apparel experience for our customers. Here's why you should choose us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="feature">
                        <div className="feature-icon text-primary">
                            <i className="fas fa-shopping-bag fa-3x"></i>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
                        <p className="text-slate-300">
                            Explore a wide range of clothing and accessories, from casual to formal wear.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature">
                        <div className="feature-icon text-primary">
                            <i className="fas fa-star fa-3x"></i>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Quality & Style</h3>
                        <p className="text-slate-300">
                            We offer high-quality products that are not only stylish but also comfortable to wear.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature">
                        <div className="feature-icon text-primary">
                            <i className="fas fa-truck fa-3x"></i>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
                        <p className="text-slate-300">
                            Enjoy fast and reliable shipping, ensuring your orders reach you promptly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
           </div>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;