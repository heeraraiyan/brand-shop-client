import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {

    const { user ,logOut } =useContext(AuthContext);
  console.log(user)
 
  const handleLogOut = () =>{
    logOut()
    .then(()=>console.log('user logged'))
    .catch(error => console.error(error))
  }


    const navLinks =<>
    <li><NavLink to='/'>Home</NavLink>
    </li>
    <li ><NavLink to='/addProduct'>Add Product</NavLink>
    </li>
    <li><NavLink to='/myCart'>My Cart</NavLink>

    </li>
    <li><NavLink to='/register'>Register</NavLink>
    
    </li>
    {/* <li className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
                }><NavLink to='/login'>Login</NavLink>
    
    </li> */}
    </>


    return (
        <div className="w-11/12 mx-auto pt-6">
            <div className="navbar bg-sky-100 rounded-full">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img className="w-12 h-12" src="https://i.ibb.co/TW1ctsb/Open-Doodles-Selfie.png" alt="" />
    <a className=" text-4xl  italic text-amber-600 font-bold">FASHION <span className="text-gray-700">4</span> <span className="text-xl text-red-600">TOMORROW</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn mr-4">Button</a> */}
    {
            user? <>
            <span>{user.email}</span>
            <a onClick={handleLogOut} className="btn btn-error rounded-full">sign out</a>
            
            
            </>
            : <Link to='/login'>
              <button className="btn-error px-4 py-2 rounded-full">Login</button>
            </Link>
          }
  </div>
</div>
            
        </div>
    );
};

export default Navbar;