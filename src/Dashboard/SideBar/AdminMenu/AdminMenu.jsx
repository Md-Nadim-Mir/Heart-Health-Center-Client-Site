import { BsGraphUp } from "react-icons/bs";
import MenuItem from "../../Components/MenuItem";
import { FaBook, FaUserDoctor, FaUsers } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import { PiTestTubeFill } from "react-icons/pi";
// import { SiBloglovin } from "react-icons/si";


const AdminMenu = () => {
    return (

        <>

            {/* Menu Items */}


            {/* staistics */}

            <nav>
                <MenuItem
                    icon={BsGraphUp}
                    label='Statistics'
                    address='statistics'
                />


            </nav>

            {/* Manage users */}

            <nav>
                <MenuItem
                    icon={FaUsers}
                    label='Manage Users'
                    address='manage-users'
                />
            </nav>


            {/* Manage Bookings */}

            <nav>
                <MenuItem
                    icon={MdManageHistory}
                    label='Manage Bookings'
                    address='manage-bookings'
                />
            </nav>



            {/* add tests  */}
            <nav>
                <MenuItem
                    icon={PiTestTubeFill}
                    label='Tests Manage'
                    address='tests-manage'
                />
            </nav>


            {/* Add doctors */}

            <nav>
                <MenuItem
                    icon={FaUserDoctor}
                    label='Doctors Manage'
                    address='doctor-manage'
                />
            </nav>


            {/* Add health blog */}

            <nav>
                <MenuItem
                    icon={FaBook}
                    label='Blogs Manage'
                    address='blogs-manage'
                />
            </nav>


            {/* Add banner  */}

            {/* <nav>
                <MenuItem
                    icon={SiBloglovin}
                    label='Banner Manage'
                    address='/dashboard'
                />
            </nav> */}



        </>

    );
};

export default AdminMenu;