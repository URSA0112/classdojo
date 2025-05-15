import { ColumnDef } from "@tanstack/react-table";

export type Teacher = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  class: string;
  group: string;
};

export const columns: ColumnDef<Teacher, unknown>[] = [
  {
    accessorKey: "firstName",
    header: "Овог",
  },
  {
    accessorKey: "lastName",
    header: "Нэр",
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