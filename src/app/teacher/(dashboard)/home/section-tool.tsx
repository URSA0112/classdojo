'use client';

import { Timer, Users, Music, Volume2, CalendarDays, Shuffle, ClipboardList, MessageSquare } from "lucide-react";

const tools = [
    {
        icon: <Timer className="text-blue-500 w-5 h-5" />,
        title: "Цаг хэмжигч",
        desc: "Үйл ажиллагааны хугацааг хянах",
    },
    {
        icon: <Users className="text-green-500 w-5 h-5" />,
        title: "Бүлэг үүсгэгч",
        desc: "Сурагчдыг санамсаргүй бүлэглэх",
    },
    {
        icon: <Music className="text-purple-500 w-5 h-5" />,
        title: "Ангийн хөгжим",
        desc: "Ажлын уур амьсгалыг бүрдүүлэх",
    },
    {
        icon: <Volume2 className="text-yellow-500 w-5 h-5" />,
        title: "Дуу чимээ хэмжигч",
        desc: "Ангийн дуу чимээг хянах",
    },
    {
        icon: <CalendarDays className="text-red-500 w-5 h-5" />,
        title: "Өнөөдөр",
        desc: "Өдрийн мэдэгдэл, мэдээлэл",
    },
    {
        icon: <Shuffle className="text-pink-500 w-5 h-5" />,
        title: "Санамсаргүй сонголт",
        desc: "Сурагчдыг санамсаргүй сонгох",
    },
    {
        icon: <ClipboardList className="text-indigo-500 w-5 h-5" />,
        title: "Чиглэл",
        desc: "Үйл ажиллагааны зааварчилгаа",
    },
    {
        icon: <MessageSquare className="text-teal-500 w-5 h-5" />,
        title: "Бодож, хуваалцах",
        desc: "Сурагчдын хосоор ярилцах",
    },
];

export default function SectionTool() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-emerald-100 rounded-2xl p-5">
            {tools.map((tool, index) => (
                <div
                    key={index}
                    className="p-10 rounded-full  bg-white hover:bg-blue-50 border border-gray-200 shadow-sm transition-all cursor-pointer flex flex-col gap-3"
                >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                        {tool.icon}
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-700">{tool.title}</div>
                        <div className="text-xs text-gray-500">{tool.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}