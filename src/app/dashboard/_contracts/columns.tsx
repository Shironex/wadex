"use client";

import { DataTableColumnHeader } from "@/components/column-header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Contract = {
  id: string;
  clientname: string;
  employeename: string;
  expiresin: string;
};

export const columns: ColumnDef<Contract>[] = [
  {
    accessorKey: "clientname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Klient" />
    ),
  },
  {
    accessorKey: "employeename",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pracownik" />
    ),
  },
  {
    accessorKey: "expiresin",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ile dni do wygaśnięcia umowy
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const contract = row.original;

      return (
        <div className="flex justify-between flex-1 items-center">
          <span>{contract.expiresin}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Akcje</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Zobacz dane Klienta</DropdownMenuItem>
              <DropdownMenuItem>Zobacz dane Pracownika</DropdownMenuItem>
              <DropdownMenuItem>Zobacz dane Umowy</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
