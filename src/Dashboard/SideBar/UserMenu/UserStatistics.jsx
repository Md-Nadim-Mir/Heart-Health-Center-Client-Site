import { Helmet } from "react-helmet-async";

import { allUser, getAllTest, getBlogs, getDoctor } from "../../../api/test";
import { useEffect, useState } from "react";
import { getAllBookingInfo, getBookingInfo } from "../../../api/booking";

//  chart graph
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,  Legend } from 'recharts';
import useAuth from "../../../Hooks/useAuth";

// for shape bar
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

//  for pie chart

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




const UserStatistics = () => {

    const { user } = useAuth();


    // all booking

    let [booking, setBooking] = useState([]);

    useEffect(() => {

       getBookingInfo(user?.email)
            .then(data => setBooking(data))
    }, [])

    // all test report

    let [report,setReport] = useState([]);

    useEffect(() => {

        getBookingInfo(user?.email)
            .then(data => setReport(data))
    }, [])

    

    

    // length of static value

  
    const bookinglength = booking.length;
    const testlength = (report.length+1);
    


    // pie chart start 

    const dataPie = [
       
        { name: 'Appointment', value: bookinglength },
        { name: 'Test Report', value: testlength },
        
      ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    // pie chart end


    //  Bar chart start 


    // data value

    const data = [
       
        {
            name: 'Appointment',
            uv: bookinglength,

        },
        {
            name: 'Test Report',
            uv: testlength,

        },
      

    ];


    //  custom shape for bar chart

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    //  Bar chart end  





    return (


        <div>



            <Helmet>
                <title> Statistics | Dashboard </title>
            </Helmet>


            <h1 className="text-center text-2xl pt-5 font-extrabold">Statistics</h1>


            {/* statistics cart */}

            <div className="px-5 shadow-2xl rounded-md mt-12 py-10 grid grid-cols-1 md:grid-cols-2 justify-between gap-x-5 gap-y-10">



               


                <div className="shadow-xl rounded-lg w-full text-center py-5 font-bold space-y-2">
                    <h1 className="text-[red] text-3xl font-extrabold">{booking.length}</h1>
                    <h1 className="text-[green] text-xl">Appointment</h1>
                </div>



                <div className="shadow-xl rounded-lg w-full text-center py-5 font-bold space-y-2">
                    <h1 className="text-[red] text-3xl font-extrabold">{testlength}</h1>
                    <h1 className="text-[green] text-xl">Test Report</h1>
                </div>



            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-2 mt-10">


                <div >

                    {/* Bart chart */}

                    <BarChart
                        width={280}
                        height={280}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                        
                    </BarChart>

                </div>


                <div>
                    {/* pie chart */}

                    <PieChart width={280} height={280}>
                        <Pie
                            data={dataPie}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>






        </div>






    );
};

export default UserStatistics;