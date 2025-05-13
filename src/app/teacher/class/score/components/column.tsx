"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"; // Make sure this is correctly imported
import { ArrowUpDown, Pen } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the Payment type
export type StudentScoreType = {
  id: string;
  studentName: string;
  email: string;
  attendance: number;
  activity: number;
  midterm: number;
  final: number;
  totalScore: number;
};

export const columns: ColumnDef<StudentScoreType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="cursor-pointer"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="cursor-pointer"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "studentName",
    header: "Нэр",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("studentName")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "attendance",
    header: "Ирц",
    cell: ({ row }) => row.getValue("attendance"),
  },
  {
    accessorKey: "activity",
    header: "Идэвх",
    cell: ({ row }) => row.getValue("activity"),
  },
  {
    accessorKey: "midterm",
    header: "Явцын шалгалт",
    cell: ({ row }) => row.getValue("midterm"),
  },
  {
    accessorKey: "final",
    header: "Улирлын шалгалт",
    cell: ({ row }) => row.getValue("final"),
  },
  {
    accessorKey: "totalScore",
    header: "Нийт дүн",
    cell: ({ row }) => <strong>{row.getValue("totalScore")}</strong>,
  },
  {
    id: "settings",
    header: "Тохиргоо",
    cell: ({ row }) => (
      <div className="text-center">
        <Button
          variant="outline"
          size="sm"
          className="hover:bg-gray-200 hover:border-black"
        >
          <Pen className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];
