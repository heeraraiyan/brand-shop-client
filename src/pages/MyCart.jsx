import { useLoaderData } from "react-router-dom";
import Navbar from "../sections/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const MyCart = () => {
    // const carts = useLoaderData();

    const { user } = useContext(AuthContext);
    const userEmail = user.email;

    const carts = useLoaderData().filter((cart) => cart.userEmail === userEmail);


    

    return (
        <div className="bg-slate-600">
            <Navbar></Navbar>
            <div>
            <div className="w-11/12 mx-auto grid grid-cols-3 pb-10">
            {carts.map((cart) => (
                <div key={cart._id} className="card card-compact w-96 bg-sky-200 shadow-xl mt-8 gap-4 ">
                    <figure><img className="h-[250px]" src={cart.image} alt={cart.name} /></figure>
                    <div className="card-body">
                        
                        <p className="text-xl">Name: {cart.name}</p>
                        <p>price: {cart.price}</p>
                        <button className="btn btn-error">X</button>
                        
                    </div>
                </div>
            ))}
        </div>
            </div>
            
        </div>
    );
};

export default MyCart;