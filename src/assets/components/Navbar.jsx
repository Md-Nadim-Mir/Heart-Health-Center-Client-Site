import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'
import person from '../image/placeholder.jpg';
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {

    const links = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/test'><li><a>All Test</a></li></NavLink>
        <NavLink to='/ambulance'><li><a>Ambulance</a></li></NavLink>
        <NavLink to='/bloodBank'><li><a>Blood Bank</a></li></NavLink>
        <NavLink to='/health-tips'><li><a>Health Tips</a></li></NavLink>

    </>


    const { user, logOut } = useAuth();





    return (

        <div>
            <div className="navbar bg-base-100 fixed z-10 shadow-xl max-w-[1300px] mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {links}

                        </ul>
                    </div>
                    <img className=" w-[15vh] " src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-base">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end gap-5">

                    <div className="dropdown dropdown-end font-semibold">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full animate-bounce hover:animate-none border-2 border-red-600">
                                {
                                    user ? <><img src={user.photoURL} alt="" /></> :
                                        <><img src={person} /></>
                                }
                            </div>
                        </div>
                        <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-[200px] md:w-60">
                            <li>
                                <a className="justify-between">
                                    {
                                        user ? <><h1>{user.displayName
                                        }</h1></> :
                                            <><h1>Guest</h1></>
                                    }

                                </a>
                            </li>
                            <li><a>{
                                user ? <><h1>{user.email
                                }</h1></> :
                                    <><h1></h1></>
                            }</a></li>
                            <NavLink to='/register'><li><a>Register</a></li></NavLink>

                            {
                                user ? <NavLink onClick={logOut}> <li><a>Logout</a></li></NavLink> : <NavLink to='/login'> <li><a>Login</a></li></NavLink>
                            }
                        </ul>
                    </div>

                    <a className="btn bg-[green] font-bold text-white hover:bg-[red]">
                        <Link to='/dashboardLayout'>
                            Dashboard
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;