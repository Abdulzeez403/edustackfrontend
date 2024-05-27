// components/columns.ts
import { ColumnDef } from "@tanstack/react-table";
import DataTableRowActions from "../../admin/components/table/dataRowAction";
import { IClasses } from "../../admin/types";
import { DataTableColumnHeader } from "../../components/tableItems/column";
import { Checkbox } from "@/components/ui/checkbox";


interface IProps {
    onEdit: (value: any) => void;
    onDelete: (value: any) => void;
}

export const columns = ({ onEdit, onDelete }: IProps): ColumnDef<IClasses, unknown>[] => [

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
