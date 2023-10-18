import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="bg-slate-600">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;