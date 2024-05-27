
"use client"
import { useEffect, useState } from "react";
import { IUser, Url } from "./types";
import { TableComponent } from "./components/table/datatable";
import { columns } from "./column";
import { AdminForm } from "./form";
import { StaffDemoData, adminDemoData } from "@/app/data";




const AdimDetailPage: React.FC<{ data?: Url[] }> = () => {

    const [datas, setDatas] = useState<IUser[]>([])
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

    useEffect(() => {
        setDatas(adminDemoData as any)
    }, [])

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('../../../');
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

    // }, []);

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
                title="create Admin"
                description="This is the admin that manage!" >
                <AdminForm />
            </TableComponent>
        </div>
    )
}

export default AdimDetailPage;