"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
export type User = {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  contact: number;
  emergency: number;
  img: string;
};
export default function Page() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch(
        "http://localhost:8000/api/v1/teacher/65f35086-52fa-424e-870c-32c3b9434f52/students",
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
    <div className="px-10 py-12 w-full">
      <h1 className="text-4xl font-bold mb-10 mt-20 text-center">
        Ангийн сурагчдын нэрсийн жагсаалт
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((student, index) => (
          <Card
            key={index}
            className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200"
          >
            <CardContent className="flex flex-col items-center p-5">
              <div className="w-32 h-32 relative mb-4">
                {student.img ? (
                  <Image
                    src={student.img}
                    alt={`${student.firstname}-profile`}
                    width={128}
                    height={128}
                    className="object-cover rounded-full border-4 border-white shadow"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
                    <span className="text-lg text-gray-500">Зураг байхгүй</span>
                  </div>
                )}
              </div>
              <div className="text-lg font-medium">{student.firstname}</div>
              <div className="text-sm text-gray-500 mt-2 text-center">
                <p>Утасны дугаар: {student.contact}</p>
                <p>Имэйл: {student.email}</p>
                <div className="mt-1">
                  Яаралтай холбоо:
                  <div className="flex justify-center">
                    <button
                      onClick={() =>
                        (window.location.href = `tel:${student.emergency}`)
                      }
                      className="flex items-center justify-center w-[110px] h-[50px] border-2 border-green-500 rounded-xl gap-2 cursor-pointer hover:bg-green-500 hover:text-white transition-0.9 text-green-500 text-bold mt-3"
                    >
                      <Phone className="w-6 h-6" />
                      <span>Залгах</span>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
