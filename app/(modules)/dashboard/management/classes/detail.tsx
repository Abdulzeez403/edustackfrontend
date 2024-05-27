
"use client"
import { useEffect, useState } from "react";
import { columns } from "./column"
import { IRole } from "../../admin/types";
import { RoleDemoData, classesDemoData } from "@/app/data";
import { AccountantForm } from "../../admin/accountant/form/create";
import { TableComponent } from "../../admin/components/table/datatable";






const ClassesPage: React.FC<{ data?: IRole[] }> = ({ data }) => {

    const [datas, setDatas] = useState([])
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    // const [selectedUrl, setSelectedUrl] = useState<Url | null>(null);

    const handleUpdate = (role: IRole) => {
        setDrawerOpen(!isDrawerOpen);

    };

    const handleDelete = (role: IRole) => {
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

    useEffect(() => {
        // fetchData();
        setDatas(classesDemoData as any)

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
                title="create Role"
                description="This is the perosn that maange the income!">
                <AccountantForm />
            </TableComponent>
        </div>

    )
}

export default ClassesPage;