
"use client"
import { useEffect, useState } from "react";
import { columns } from "./column"
import { IUser, Url } from "../../types";
import { TableComponent } from "../../components/table/datatable";
import { StaffForm } from "../form/create";
import { StaffDemoData } from "@/app/data";





const StaffTablePage = () => {

    const [datas, setDatas] = useState([])
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    // const [selectedUrl, setSelectedUrl] = useState<Url | null>(null);

    const handleUpdate = (user: IUser) => {
        setDrawerOpen(!isDrawerOpen);

    };

    const handleDelete = (user: IUser) => {
        alert("Deleted Successfully!")

    };

    const handleClose = () => {
        setDrawerOpen(false)
    }

    const handleCreateNewMember = () => {
        setDrawerOpen(true)
    }



    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3002/api/shorten');
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         setDatas(data)
    //         console.log(data); // Handle the data from the server
    //     } catch (error) {
    //         console.error('There has been a problem with your fetch operation:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();

    // }, [])

    useEffect(() => {
        setDatas(StaffDemoData as any)
    }, [])

    const createColumns = columns({ onEdit: handleUpdate, onDelete: handleDelete });

    return (
        <div className="py-10">
            <TableComponent
                columns={createColumns}
                data={datas}
                onEdit={handleUpdate}
                onDelete={handleDelete}
                open={isDrawerOpen}
                onDismiss={handleClose}
                onOpen={handleCreateNewMember}
                title="create Staff"
                description="This is the staff that manage the students!">
                <StaffForm />
            </TableComponent>
        </div>
    )
}

export default StaffTablePage;