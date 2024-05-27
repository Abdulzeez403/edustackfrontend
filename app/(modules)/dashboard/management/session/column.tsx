// components/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import DataTableRowActions from "../../admin/components/table/dataRowAction";
import { ISession } from "../../admin/types";
import { DataTableColumnHeader } from "../../components/tableItems/column";
import { Checkbox } from "@/components/ui/checkbox";


interface IProps {
    onEdit: (value: any) => void;
    onDelete: (value: any) => void;
}

export const columns = ({ onEdit, onDelete }: IProps): ColumnDef<ISession, unknown>[] => [

    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                className="p-0 m-0 align-middle"
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
                className="p-0 m-0"
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "session",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Sessions" />
        ),
    },

    {
        accessorKey: "startDate",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="StartDate" />
        ),
    },

    {
        accessorKey: "endDate",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="EndDate" />
        ),
    },
    {
        id: 'actions',
        header: "Actions",
        cell: ({ row }) => <DataTableRowActions row={row as any} onEdit={onEdit} onDelete={onDelete} />,
        size: 50
    },


];
