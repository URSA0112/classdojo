// columns.ts
import { Payment } from "@/app/class/score/page"
import { ColumnDef } from "@tanstack/react-table"

export type User = {
  id: number
  lastname: string
  firstname: string
  email: string
  contact: number
  emergency: number
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Дугаар",
  },
  {
    accessorKey: "lastname",
    header: "Овог",
  },
  {
    accessorKey: "firstname",
    header: "Нэр",
  },
  {
    accessorKey: "email",
    header: "Email хаяг",
  },
  {
    accessorKey: "contact",
    header: "Холбоо барих дугаар",
  },
  {
    accessorKey: "emergency",
    header: "Яаралтай үед холбоо барих дугаар",
  },
]
