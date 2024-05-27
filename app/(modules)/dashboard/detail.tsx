import CardComponent from '@/app/components/card';
import { InputSearchComponent } from '@/app/components/input';
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
const DashboardView = () => {
    return (
        <div>
            <div className='flex  justify-between'>

                <InputSearchComponent
                    type="text"
                    placeholder="seearching..."
                    icon={<IoIosSearch />} />
                {/* <h4>DashboardView</h4> */}

                <IoMdNotificationsOutline size={25} />
            </div>

            <div className='flex  pt-5 pl-0'>
                <CardComponent
                    icon={<PiStudent color="white" size={30} />}
                    cardContent="Students"
                    cardFooter="50,000"
                    className="bg-red-600 p-4 rounded-full  shadow-md shadow-black "
                // cardStyle="w-96 "
                />
                <CardComponent
                    icon={<PiStudent color="white" size={30} />}
                    cardContent="Teachers"
                    cardFooter="30,0000"
                    className="bg-blue-300 p-4 rounded-full
                     shadow-md shadow-black "
                // cardStyle="w-96 "

                />
                <CardComponent
                    icon={<PiStudent color="white" size={30} />}
                    cardContent="Administrator"
                    cardFooter="10,0000"
                    className="bg-purple-300 p-4 rounded-full shadow-md shadow-black "
                // cardStyle="w-50"

                />

            </div>
        </div>


    )
}

export default DashboardView;
