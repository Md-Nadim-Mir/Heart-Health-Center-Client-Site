import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";


const MainLayout = () => {
    return (

        <div className='max-w-[1300px] mx-auto'>
                
                <Helmet>
                      <title>Heart Health Center | Home</title>
                </Helmet>

                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default MainLayout;