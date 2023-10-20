import { useLoaderData } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const product = useLoaderData();
    const {_id,image,name,brand_name,type,price,rating} = product;

    const handleUpdateProduct = event => {
        event.preventDefault();
    
        const form = event.target;
        
        const image = form.image.value;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        // const description = form.description.value;
    
        const updatedProduct = {image,name,brand_name,type,price,rating}
    
        console.log(updatedProduct)
    
        // send to server 
    
        fetch(`http://localhost:5000/products/${_id}`,{
          method: 'PUT',
          headers:{
            'content-type' :'application/json'
          },
          body: JSON.stringify(updatedProduct)
    
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.modifiedCount> 0){
            Swal.fire({
              title: 'Success!',
              text: 'Product Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    
    
      }

   
    return (
        <div>
             <div className="bg-slate-500">
            <Navbar></Navbar>
            <h2 className="text-3xl text-orange-700 font-bold mt-10 text-center">ADD PRODUCTS <br></br><span className="italic text-xl text-amber-600">HERE</span> </h2>
            <div className="pb-32 mt-10 w-11/12 mx-auto">
             
            <form onSubmit={handleUpdateProduct}>
           <div className="lg:flex">
           <div className="lg:w-1/2">
          <label className="text-xl font-bold">Image: </label>
          <input className="w-3/4" type="url" name="image" defaultValue={image} placeholder="image url" required />
            </div>

            <div className="lg:w-1/2">
          <label className="text-xl font-bold">Name: </label>
          <input className="w-3/4" type="text" name="name" defaultValue={name} placeholder="product name" required />
            </div>
           </div>

           <div className="lg:flex mt-8">
           <div className="lg:w-1/2"> 
          <label className="text-xl font-bold">Brand Name: </label>
          <select className="w-10/12" name="brand_name" defaultValue={brand_name} >
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Gucci">Gucci</option>
            <option value="Zara">Zara</option>
            <option value="H&M">H&M</option>
            <option value="Levi's">Levi's</option>
            
          </select>
          </div>
          <div className="lg:w-1/2">
          <label className="text-xl font-bold">Type: </label>
          <select className="w-3/4" name="type" defaultValue={type}>
            <option value="Cloths">Cloths</option>
            <option value="Shoes">Shoes</option>
            <option value="T-shirts">T-shirts</option>
            <option value="Glass">Glass</option>
            <option value="Bags">Bags</option>
            <option value="Trouser">Trouser</option>
            
          </select>
        </div>

           </div>
           <div className="lg:flex mt-8">
           <div className="lg:w-1/2">
          <label className="text-xl font-bold">Price: </label>
          <input className="w-3/4" type="text" name="price" defaultValue={price} placeholder="price" required />
            </div>

            <div className="lg:w-1/2">
          <label className="text-xl font-bold">Rating:</label>
          <input className="w-3/4" type="number" name="rating" defaultValue={rating} min="0" max="5" />
        </div>

           
            </div>

            {/* <div className="mt-8">
          <label className="text-xl font-bold">Short Description: </label>
          <input className="w-3/4" type="text" name="description" defaultValue={description} placeholder="" required />
            </div> */}

            <button className="btn btn-outline btn-accent btn-block mt-24 text-2xl font-bold" type="submit">Update</button>
          
            </form>
            </div>
            
        </div>
        </div>
    );
};

export default UpdateProduct;