import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AddStudent from "./components/AddStudentButton";
import { columns, User } from "./components/Column";
import { DataTable } from "./components/DataTable";

const data: User[] = [
  {
    id: 1,
    lastname: "bat",
    firstname: "dorj",
    email: "john@example.com",
    contact: 12345678,
    emergency: 12345678
  },
  {
    id: 2,
    lastname: "bold",
    firstname: "uyanga",
    email: "john@example.com",
    contact: 12345678,
    emergency: 12345678
  },
];

export default async function settings() {
  return (
    <div className="mt-25 p-5">
     <Card>
      <CardContent>
      <div className="flex justify-between">
        <CardHeader className="font-bold text-2xl flex justify-between items-center">
          Сурагчид
        </CardHeader>
        <div>
          <AddStudent />
        </div>
      </div>

      <div className="p-4">
        <DataTable columns={columns} data={data} />
      </div>
      </CardContent>
     </Card>
    </div>
  );
}
