import { Helmet } from "react-helmet-async";


const BloodBank = () => {

    return (
        <div className="pb-10 pt-32">

            <Helmet>
                <title> Heart Health Center | Blood Bank </title>
            </Helmet>

            <h1 className="text-3xl font-bold text-center pt-16 pb-5">Blood Donors Club</h1>


            <div className="overflow-x-auto my-14 md:px-5 ">
                <table className="table">
                    {/* head */}
                    <thead className="text-[18px] font-bold">
                        <tr>

                            <th>Logo</th>
                            <th>Name</th>
                            <th>Contract</th>

                        </tr>
                    </thead>


                    <tbody className="font-bold md:text-xl">

                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className=" w-full h-24">
                                            <img src="https://i.ibb.co/jg62Q69/khulna-blood-bank.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                Khulna Blood Bank,
                                Khulna.
                            </td>
                            <td>Shamsur Rahman Road, Khulna .
                                <br /> 041-762006</td>

                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className=" w-full h-24">
                                            <img src="https://i.ibb.co/Ryj4mCC/badhon-blood.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>

                                Khulna University
                                Unit, Khulna.
                            </td>

                            <td>Khulna University, Khulna.
                                <br /> 01534-982674</td>

                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className=" w-full h-24">
                                            <img src="https://i.ibb.co/d0ZpmhB/sandhani-blood.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>

                            <td>
                                Sandhani Blood Donors
                                Club, Khulna.
                            </td>

                            <td>Room no 24, Pathology Department, <br /> General Hospital, Hospital Road, Khulna.
                               <br /> 01911-836894
                             , 01885-455592</td>

                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BloodBank;