"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Invoice } from "@/types/layoutTypes";

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoice",
    header: "Invoice",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    id: "project",
    accessorFn: (row) => row.project.name,
    header: "Project",
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = row.getValue<number>("amount");

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const invoice = row.original;
      const projectLink = invoice.project.id ? `/projects/${invoice.project.id}` : "#";

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(invoice.invoice)}>
              Copy invoice number
            </DropdownMenuItem>

            <Link href={projectLink}>
              <DropdownMenuItem>View project</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
