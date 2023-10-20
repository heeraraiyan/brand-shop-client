import { useLoaderData } from "react-router-dom";
import Navbar from "../sections/Navbar";


const Details = () => {
    const product = useLoaderData();
    const {_id,image,name,brand_name,type,price,rating,description} = product;

    return (
        <div className="  bg-slate-600">
            <Navbar></Navbar>
            <div className="flex items-center justify-center mt-8 pb-5">

            <div className="card w-2/5 bg-sky-950 shadow-xl">
             <figure><img className="h-[350px] mt-4" src={image} alt="Shoes" /></figure>
             <div className="card-body">
               <h2 className="card-title text-amber-600">{name}</h2>
               <p className="text-slate-300">{description}<br></br> Explore a wide range of clothing and accessories, from casual to formal wear.that are not only stylish but also comfortable to wear.</p>
               <div className="card-actions justify-end">
                 <button className="btn btn-primary">Add to Cart</button>
               </div>
             </div>
                   </div>
            </div>
        </div>
    );
};

export default Details;
