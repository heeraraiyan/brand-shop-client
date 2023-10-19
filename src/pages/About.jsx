import { Link } from "react-router-dom";
import Navbar from "../sections/Navbar";


const About = () => {
    return (
        <div className="bg-slate-600">
            <Navbar></Navbar>

            <div className="mt-6">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Ct6SY3R/wave-haikei.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-3xl font-bold">About Our <br></br><span className="text-amber-600 italic text-5xl">FASHION </span>4 <span className="text-4xl text-red-700 italic"> TOMORROW</span></h1>
                            <p className="mb-5">
                                We are passionate about fashion and apparel, and we're dedicated to bringing you the latest trends and styles. Our mission is to help you express your unique personality through clothing and accessories.
                            </p>
                            <p className="mb-5">
                                With a wide range of products with six popular Brands( Nike, Adidas, Gucci, Zara, H&M, Levi's), from casual wear to formal attire, we have something for everyone. Our team of designers and stylists works tirelessly to curate collections that reflect the latest fashion and comfort.
                            </p>
                            <Link to={'/'}><button className="btn btn-primary">Explore Our Collections</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;