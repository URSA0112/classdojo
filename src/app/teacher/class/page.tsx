'use client';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Phone } from 'lucide-react';

const students = [
  { name: "Б.Номи", img: "/em.jpg", phone: "99123456", email: "nomi@example.com", emergencyContact: "99012345" },
  { name: "Э.Батаа", img: "/er.jpg", phone: "99223344", email: "bataa@example.com", emergencyContact: "99112233" },
  { name: "О.Саруул", img: "/er.jpg", phone: "99334455", email: "saruul@example.com", emergencyContact: "99012222" },
  { name: "М.Ундраа", img: "/em.jpg", phone: "99445566", email: "undraa@example.com", emergencyContact: "99887766" },
  { name: "С.Тэмүүжин", img: "/er.jpg", phone: "99556677", email: "temu@example.com", emergencyContact: "99776655" },
  { name: "Т.Оюука", img: "/em.jpg", phone: "99667788", email: "oyuka@example.com", emergencyContact: "99668877" },
  { name: "Ц.Энхээ", img: "/er.jpg", phone: "99778899", email: "enhee@example.com", emergencyContact: "99889988" },
  { name: "Т.Наран", img: "/em.jpg", phone: "99889900", email: "naran@example.com", emergencyContact: "99990011" },
];

export default function StudentList() {
  return (
    <div className="px-10 py-12 w-full">
      <h1 className="text-4xl font-bold mb-10 mt-20 text-center">
         11 a gнгийн сурагчдын жагсаалт
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {students.map((student, index) => (
          <Card
            key={index}
            className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200"
          >
            <CardContent className="flex flex-col items-center p-5">
              <div className="w-32 h-32 relative mb-4">
                {student.img ? (
                  <Image
                    src={student.img}
                    alt={`${student.name}-profile`}
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
              <div className="text-lg font-medium">
                {student.name}
              </div>
              <div className="text-sm text-gray-500 mt-2 text-center">
                <p>Утасны дугаар: {student.phone}</p>
                <p>Имэйл: {student.email}</p>
                <div className="mt-1">
                  Яаралтай холбоо:
                  <div className="flex justify-center">
                    <button
                      onClick={() => window.location.href = `tel:${student.emergencyContact}`}
                      className="flex items-center justify-center w-[110px] h-[50px] border-2 border-green-500 rounded-xl gap-2 hover:bg-green-500 hover:text-white transition-0.9 text-green-500 text-bold mt-3"
                    >
                      <Phone className="w-6 h-6" />
                      <span >Залгах</span> 
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
