import { BsGraphUp } from "react-icons/bs";
import MenuItem from "../../Components/MenuItem";
import { TbBrandBooking } from "react-icons/tb";
import { PiTestTubeFill } from "react-icons/pi";
const UserMenu = () => {
    return (
        <>

            {/* Menu Items */}


            {/* staistics */}

            <nav>
                <MenuItem
                    icon={BsGraphUp}
                    label='User Statistics'
                    address='user-statistics'
                />


            </nav>

            {/* Manage users */}

            <nav>
                <MenuItem
                    icon={TbBrandBooking}
                    label='Upcomming Appontments'
                    address='my-bookings'
                />
            </nav>


            <nav>
                <MenuItem
                    icon={PiTestTubeFill}
                    label='Test Report'
                    address='test-report'
                />
            </nav>


          


        </>
    );
};

export default UserMenu;