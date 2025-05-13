import { Card } from "@/components/ui/card";
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

interface Table {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  class: string;
  group: string;
}

async function getData(): Promise<Table[]> {
  return [
    {
      id: "728ed52f",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      class: "Math",
      group: "A",
    },

    // ...
  ];
}

export default async function TeacherTable() {
  const data = await getData();

  return (
    <div>
      <Card className="container mx-auto p-5 mt-30">
        <DataTable columns={columns} data={data} />
      </Card>
      <Card className="container mx-auto p-5 mt-10">
        <DataTable columns={columns} data={data} />
      </Card>
    </div>
  );
}
