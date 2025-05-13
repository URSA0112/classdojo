"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Table = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  class: string;
  group: string;
};

export const columns: ColumnDef<Table>[] = [
  {
    accessorKey: "firstName",
    header: "Овог",
  },
  {
    accessorKey: "lastName",
    header: "Нэр",
  },
  {
    accessorKey: "email",
    header: "Имэйл",
  },
  {
    accessorKey: "phoneNumber",
    header: "Утасны дугаар",
  },
  {
    accessorKey: "class",
    header: "Анги",
  },
  {
    accessorKey: "group",
    header: "Бүлэг",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: string;
  email: string;
};
