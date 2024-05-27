// components/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import { IRole, IUser, Url } from "../../types";
import { DataTableColumnHeader } from "../../../components/tableItems/column";
import { Checkbox } from "@/components/ui/checkbox";
import DataTableRowActions from "../../components/table/dataRowAction";


interface IProps {
    onEdit: (role: IRole) => void;
    onDelete: (role: IRole) => void;
}


export const columns = ({ onEdit, onDelete }: IProps): ColumnDef<IRole, unknown>[] => [

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
        id: 'actions',
        header: "Actions",
        cell: ({ row }) => <DataTableRowActions row={row as any} onEdit={onEdit} onDelete={onDelete} />,
        size: 50
    },


];
