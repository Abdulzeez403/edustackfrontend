// components/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { FaLink } from "react-icons/fa6";
import { IUser } from "./types";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "../components/tableItems/column";
import DataTableRowActions from "./components/table/dataRowAction";


interface IProps {
    onEdit: (user: IUser) => void;
    onDelete: (user: IUser) => void;
}


export const columns = ({ onEdit, onDelete }: IProps): ColumnDef<IUser, unknown>[] => [

    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),

    },
    {
        accessorKey: "phone",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Phone" />
        ),

    },
    {
        accessorKey: "role",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Role" />
        ),

    },

    {
        accessorKey: "joiningdate",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="JoiningDate" />
        ),

    },


    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="status" />
        ),
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <div className="flex items-center">
                    <span
                        className={`px-2 py-1 rounded-full  ${status === "active" ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {status.toUpperCase()}
                    </span>
                    <FaLink className=" bg-green-600 p-2 rounded-full text-white" size={30} color="white" />
                </div>
            );
        },
    },

    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row as any} onEdit={onEdit} onDelete={onDelete} />,
        size: 50
    },
];
