
import { Card } from "@/components/ui/card"
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {

    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },

        // ...
    ]
}

export default async function TeacherTable() {
    const data = await getData()

    return (
        <div >
            <Card className="container mx-auto p-5 mt-30">
                <DataTable columns={columns} data={data} />
            </Card>
            <Card className="container mx-auto p-5 mt-10">
                <DataTable columns={columns} data={data} />
            </Card>

        </div>
    )
}
