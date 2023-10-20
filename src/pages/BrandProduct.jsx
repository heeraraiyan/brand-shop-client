import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../sections/Navbar";

const BrandProduct = () => {
    const products = useLoaderData();
return (
    <div className="bg-slate-600">
        <Navbar></Navbar>


        

        <div className="mt-8 mb-10">
                <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/6gX1qfg/people-2557483-1920.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[500px]">
    <img src="https://i.ibb.co/r7xQqQ6/pexels-shattha-pilabut-135620.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/1bxyjQd/shoes-3316260-1280.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/n0HNfth/pexels-ksenia-chernaya-3965543.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
                </div>

        <div className="w-11/12 mx-auto grid grid-cols-3 pb-10">
            {products.map((product) => (
                <div key={product._id} className="card card-compact w-96 bg-sky-200 shadow-xl mt-8 gap-4 ">
                    <figure><img className="h-[250px]" src={product.image} alt={product.name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-800">{product.brand_name}</h2>
                        <p className="text-xl">Name: {product.name}</p>
                        <p>Description: {product.description}</p>
                        <div className="flex">
                            <p>Type: {product.type}</p>
                            <p>Price: {product.price}</p>
                        </div>
                        <p>Rating: {product.rating}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/updateProduct/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                            <Link to={`/details/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default BrandProduct;