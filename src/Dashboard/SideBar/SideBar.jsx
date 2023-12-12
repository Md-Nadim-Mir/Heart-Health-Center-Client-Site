

import { useState } from 'react'
// Components
import logo from '../../../public/logo.png'


// Icons
import { GrLogout } from 'react-icons/gr'

import { AiOutlineBars } from 'react-icons/ai'

import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import useRole from '../../Hooks/useRole'
import AdminMenu from './AdminMenu/AdminMenu'
import UserMenu from './UserMenu/UserMenu'





const SideBar = () => {


    const [role] = useRole();


    const [isActive, setActive] = useState(false);

    const { logOut, user } = useAuth();
    const navigate = useNavigate();

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }


    // handle logut

    let handleLogout = () => {

        logOut();
        navigate('/')

    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden font-semibold'>

                <Link to='/'>

                    <div>
                        <div className='block cursor-pointer p-4 font-bold'>

                            <img className='w-1/2 ' src={logo} alt="" />

                        </div>
                    </div>

                </Link>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <Link to='/'>

                        <div>
                            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-green-100 mx-auto'>


                                <img className='w-[100px] ' src={logo} alt="" />

                            </div>
                        </div>
                    </Link>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-2'>


                        {/* user role */}



                        <nav>
                           
                              <h1 className='text-xl font-bold text-center p-2 shadow-2xl rounded-xl bordered-2 mt-2 text-[green] uppercase border-2 border-red-600'>{role}</h1>
                        </nav>


                        {/* admin menu load  */}

                        {
                            role === 'admin' && <AdminMenu></AdminMenu>
                        }


                        {/* user menu load  */}

                        {
                            role === 'user' && <UserMenu></UserMenu>
                        }



                    </div>
                </div>

                <div>
                    <hr />

                    <div className="dropdown dropdown-top ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                            <div className="w-10 rounded-full animate-spin hover:animate-none border-2 border-red-600">
                                <img src={user.photoURL} alt="" />

                            </div>
                        </div>
                        <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-56 md:w-60">
                            <li>
                                <a className="justify-between">

                                    <h1 className='font-bold '>{user.displayName}</h1>

                                </a>
                            </li>
                            <li><a>{
                                user ? <><h1>{user.email
                                }</h1></> :
                                    <><h1></h1></>
                            }</a></li>

                        </ul>
                    </div>
                    <button onClick={handleLogout} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SideBar