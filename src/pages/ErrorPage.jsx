import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-sky-700">
        <h2 className="text-3xl text-amber-600 font-bold">oops!!! page not found!!!</h2>
        <img src="https://i.ibb.co/QbF1RzS/Open-Doodles-Coffee.png" alt="" /><br></br>
        <Link to={'/'}><button className="btn-error text-xl p-2 rounded-lg">Go to HOME</button></Link>
    </div>
    );
};

export default ErrorPage;