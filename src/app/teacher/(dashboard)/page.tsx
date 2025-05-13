import Image from "next/image";
import { Header } from "./components/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalender";
import Announcements from "@/components/Announcements";

export default function Home() {
  return (
    <div>
      <div className="pt-30 pb-10 px-10 flex flex-col gap-10 bg-gray-200">
        <div className="p-4 flex gap-10 flex-col xl:flex-row">
          <div className="flex gap-10 flex-col w-2/3">
            <Card>
              <CardContent className="h-full bg-white p-5 rounded-md">
                <CardHeader className="text-2xl font-bold leading-8 ">
                  Хичээлийн хуваарь
                </CardHeader>
                <BigCalendar />
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <CardHeader className="text-2xl font-bold leading-8 mb-5">
                  Хичээлийн жилийн үйл явц
                </CardHeader>
                <div className="space-y-4">
                  <ol className="border-l-2 border-gray-300 pl-4">
                    <li className="mb-4">
                      <div className="text-sm text-gray-500">
                        2024 оны 9 сар
                      </div>
                      <p className="text-base font-medium">
                        Хичээлийн шинэ жил эхэлсэн
                      </p>
                    </li>
                    <li className="mb-4">
                      <div className="text-sm text-gray-500">
                        2024 оны 11 сар
                      </div>
                      <p className="text-base font-medium">Намрын шалгалт</p>
                    </li>
                    <li className="mb-4">
                      <div className="text-sm text-gray-500">
                        2025 оны 1 сар
                      </div>
                      <p className="text-base font-medium">
                        Хичээлийн улирал дуусгавар болсон
                      </p>
                    </li>
                    <li className="mb-4">
                      <div className="text-sm text-gray-500">
                        2025 оны 3 сар
                      </div>
                      <p className="text-base font-medium">
                        Хаврын семестер эхэлсэн
                      </p>
                    </li>
                    <li>
                      <div className="text-sm text-gray-500">
                        2025 оны 6 сар
                      </div>
                      <p className="text-base font-medium">
                        Төгсөлтийн шалгалтууд
                      </p>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full xl:w-1/3 flex flex-col gap-10">
            <EventCalendar />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
}

// div className="pt-30 pb-10 px-10 flex flex-col gap-10 bg-gray-200">
//         <Card>
//           <CardContent>
//             <CardHeader className="text-2xl font-bold leading-8 mb-5">Хичээлийн хуваарь</CardHeader>
//             <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-300 text-center text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="border border-gray-300 px-4 py-2">Цаг</th>
//                     <th className="border border-gray-300 px-4 py-2">Даваа</th>
//                     <th className="border border-gray-300 px-4 py-2">Мягмар</th>
//                     <th className="border border-gray-300 px-4 py-2">Лхагва</th>
//                     <th className="border border-gray-300 px-4 py-2">Пүрэв</th>
//                     <th className="border border-gray-300 px-4 py-2">Баасан</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {[
//                     [
//                       "8:00-8:40",
//                       "Даваа",
//                       "Мягмар",
//                       "Лхагва",
//                       "Пүрэв",
//                       "Баасан",
//                     ],
//                     [
//                       "8:45-9:20",
//                       "Даваа",
//                       "Мягмар",
//                       "Лхагва",
//                       "Пүрэв",
//                       "Баасан",
//                     ],
//                     [
//                       "9:25-10:05",
//                       "Даваа",
//                       "Мягмар",
//                       "Лхагва",
//                       "Пүрэв",
//                       "Баасан",
//                     ],
//                     [
//                       "10:20-11:00",
//                       "Даваа",
//                       "Мягмар",
//                       "Лхагва",
//                       "Пүрэв",
//                       "Баасан",
//                     ],
//                     [
//                       "11:05-11:45",
//                       "Даваа",
//                       "Мягмар",
//                       "Лхагва",
//                       "Пүрэв",
//                       "Баасан",
//                     ],
//                     [
//                       "11:50-12:30",
//                       "Даваа",
//                       "Мягмар",
//                       "Лхагва",
//                       "Пүрэв",
//                       "Баасан",
//                     ],
//                   ].map((row, rowIndex) => (
//                     <tr
//                       key={rowIndex}
//                       className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                     >
//                       {row.map((cell, cellIndex) => (
//                         <td
//                           key={cellIndex}
//                           className="border border-gray-300 px-4 py-2"
//                         >
//                           {cell}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <CardHeader className="text-2xl font-bold leading-8 mb-5">
//               Сургуулийн үйл ажиллагаа
//             </CardHeader>
//             <div className="space-y-2 text-sm text-gray-700">
//               <ul className="list-disc pl-5">
//                 <li>Сургалтын шинэ хөтөлбөр хэрэгжүүлж эхэлсэн.</li>
//                 <li>Эко сургууль төсөл амжилттай үргэлжилж байна.</li>
//                 <li>
//                   7 хоног бүрийн баасан гарагт спортын өдөрлөг зохион
//                   байгуулдаг.
//                 </li>
//                 <li>Оюутны урлагийн тоглолт 5-р сарын 15-нд болно.</li>
//                 <li>Номын сан шинэ номоор баяжигдсан.</li>
//               </ul>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent>
//             <CardHeader className="text-2xl font-bold leading-8 mb-5">
//               Хичээлийн жилийн үйл явц
//             </CardHeader>
//             <div className="space-y-4">
//               <ol className="border-l-2 border-gray-300 pl-4">
//                 <li className="mb-4">
//                   <div className="text-sm text-gray-500">2024 оны 9 сар</div>
//                   <p className="text-base font-medium">
//                     Хичээлийн шинэ жил эхэлсэн
//                   </p>
//                 </li>
//                 <li className="mb-4">
//                   <div className="text-sm text-gray-500">2024 оны 11 сар</div>
//                   <p className="text-base font-medium">Намрын шалгалт</p>
//                 </li>
//                 <li className="mb-4">
//                   <div className="text-sm text-gray-500">2025 оны 1 сар</div>
//                   <p className="text-base font-medium">
//                     Хичээлийн улирал дуусгавар болсон
//                   </p>
//                 </li>
//                 <li className="mb-4">
//                   <div className="text-sm text-gray-500">2025 оны 3 сар</div>
//                   <p className="text-base font-medium">
//                     Хаврын семестер эхэлсэн
//                   </p>
//                 </li>
//                 <li>
//                   <div className="text-sm text-gray-500">2025 оны 6 сар</div>
//                   <p className="text-base font-medium">Төгсөлтийн шалгалтууд</p>
//                 </li>
//               </ol>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
