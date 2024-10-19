import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Main = () => {
    return (
        <div className="bg-slate-800">
            <Navbar></Navbar>
            <div className="divider divider-neutral">Default</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;