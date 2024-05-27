// components/DataTable.tsx
"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { IUser, Url } from "../../types";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button";
import { DataTablePagination } from "../../../components/tableItems/paginations";
import { DataTableViewOptions } from "../../../components/tableItems/filter";
import { ResponsiveDrawerDialog } from "../../../components/modals/responsivedrawer";
import { StatusFilter } from "../../../components/tableItems/statusfilter";
import { AccountantForm } from "../../accountant/form/create";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    onEdit: (value: any) => void;
    onDelete: (user: any) => void;
    onDismiss: () => void;
    onOpen: () => void;
    open: boolean,
    children: React.ReactNode;
    title: any;
    description: string;
}

export function TableComponent<TData, TValue>({ columns, data, onEdit, onDelete, open, onDismiss, onOpen, children, title, description }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
        },
    })

    const statusOptions = ['All', 'Active', 'Inactive', 'Pending']
    const selectedStatus = (table.getColumn("status")?.getFilterValue() as string) ?? 'All'

    const handleFilterChange = (status: string) => {
        table.getColumn("status")?.setFilterValue(status === 'All' ? undefined : status)
    }

    return (
        <div className="border-2 rounded-lg p-4">
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center py-4">
                        <Input
                            placeholder="Search name"
                            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                            onChange={(event: any) =>
                                table.getColumn("name")?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm"
                        />
                    </div>
                    <StatusFilter
                        options={statusOptions}
                        selectedStatus={selectedStatus}
                        onStatusChange={handleFilterChange}
                    />
                </div>


                <div className=" flex items-center">

                    <div>
                        <DataTableViewOptions table={table} />
                    </div>


                    <Button className="ml-4" size="sm"
                        onClick={onOpen}>Add New</Button>
                </div>

            </div>

            <Table className="border-2 rounded-lg">
                <TableHeader className="  ">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} className="text-black font-bold p-2">
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                );
                            })}

                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                className="  "
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}

                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <DataTablePagination table={table} />


            <ResponsiveDrawerDialog
                title={title}
                description={description}
                isOpen={open}
                onClose={onDismiss}
            >
                <div>
                    {children}
                </div>


            </ResponsiveDrawerDialog>




        </div >
    );
}
