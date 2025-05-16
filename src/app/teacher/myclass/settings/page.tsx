"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AddStudent from "./components/AddStudentButton";
import { columns, User } from "./components/Column";
import { DataTable } from "./components/DataTable";

export default function SettingsPage() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch(
        "http://localhost:8000/api/v1/student/52aca953-dd89-4650-90e0-ddda6711ef9b/students",
        { cache: "no-store" }
      );
      const teacherData = await res.json();
      const students = teacherData.students;

      const formattedData: User[] = students.map((s: any) => ({
        id: s.id,
        lastname: s.lastName,
        firstname: s.firstName,
        email: s.email,
        contact: Number(s.phoneNumber),
        emergency: Number(s.emergencyNumber),
      }));

      setData(formattedData);
    };

    fetchStudents();
  }, []);

  return (
    <div className="mt-25 p-5">
      <Card>
        <CardContent>
          <div className="flex justify-between">
            <CardHeader className="font-bold text-2xl flex justify-between items-center bg-red-300  ">
              Сурагч нар
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
