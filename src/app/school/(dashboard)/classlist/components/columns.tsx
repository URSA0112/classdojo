import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Class } from "../page"

export const columnsWithActions = (
  handleDelete: (id: string) => void,
  handleEdit: (id: string, className: string, teacherName: string, studentCount: string, groupName: string) => void
): ColumnDef<Class>[] => [
  {
    id: "index",
    header: "№",
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Анги",
    accessorKey: "className",
    cell: ({ row }) => row.original.className || "", // className-г зөв ашиглах
  },
  {
    header: "Бүлэг",
    accessorKey: "groupName",
    cell: ({ row }) => row.original.groupName || "", // groupName-г зөв ашиглах
  },
  {
    header: "Багшийн нэр",
    accessorKey: "teacherName",
  },
  {
    header: "Сурагчдын тоо",
    accessorKey: "studentCount",
  },
  {
    id: "actions",
    header: "Үйлдэл",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          onClick={() =>
            handleEdit(
              row.original.id, 
              row.original.className, 
              row.original.teacherName, 
              row.original.studentCount, 
              row.original.groupName 
            )
          }
        >
          Засах
        </Button>
        <Button
          variant="outline"
          onClick={() => handleDelete(row.original.id)}
        >
          Устгах
        </Button>
      </div>
    ),
  },
]
