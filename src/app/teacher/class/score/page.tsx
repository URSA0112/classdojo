"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  Column,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StudentScoreTable } from "./components/data-table";
import { columns } from "./components/column";
import { data } from "../attandance/components/data-table";

export default function Page() {
  return (
    <div className="bg-gray-200 pt-30 pb-10 px-10">
     <Card>
      <CardContent>
        <CardHeader className="text-2xl font-bold leading-8 mb-5">
        Дүнгийн жагсаалт</CardHeader>

        <StudentScoreTable
        columns={columns}
        data={data.map((item) => ({
          ...item,
          attendance: 0, // Provide default or calculated values
          activity: 0,
          midterm: 0,
          final: 0,
          totalScore: 0,
        }))}
      />
      </CardContent>
     </Card>
    </div>
  );
}
