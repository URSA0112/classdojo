"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookCheck, CalendarDays, LayoutDashboard, ScanEye, User, Backpack } from "lucide-react";
import supabase from "@/utils/supabase";
import { useTestUserStore } from "@/hooks/useUserStore";
import { signOut } from "@/lib/SignOutUser";
import { LogOut } from "lucide-react";


export default function StudentHomePage() {
    const { user } = useTestUserStore();

    const [studentName, setStudentName] = useState("Билгүүн Энхбаяр");


    const checkuser = async () => {
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            console.log(session);

            if (session) {
                const { data: { user }, error } = await supabase.auth.getUser()
                console.log(user)
            }
        }
        fetchUser()
    }

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            <button onClick={checkuser} className="bg-red-400 text-black px-4 py-2 rounded">
                CHeck USER
            </button>
            <h1 className="text-2xl font-bold">👋 Сайн байна уу, {user ? user.fullName : "User"}</h1>

            <p className="text-gray-600">Эндээс та өөрийн сургалтын үйл ажиллагааг бүрэн хянах боломжтой.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" /> Миний мэдээлэл
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-700">
                        <p>{user ? user.fullName : "User"}</p>
                        <p>{user ? user.email : "email"}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <LayoutDashboard className="h-5 w-5" /> Анги даасан багш
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-700">
                        <p>Багш: Оюунбат Батнасан</p>
                        <p>И-мэйл: oyunbat.teacher@school.mn</p>
                        <p>Хичээл: Математик, Геометр</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookCheck className="h-5 w-5" /> Миний дүн
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-700">
                        <p>Сүүлийн шалгалтын дүн: 87%</p>
                        <p>Дундаж дүн: 84%</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ScanEye className="h-5 w-5" /> Ирцийн бүртгэл
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-700">
                        <p>Нийт ирц: 92%</p>
                        <p>Сүүлд ирсэн огноо: 2025-05-19</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Backpack className="h-5 w-5" /> Хичээлүүд
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-700">
                        <ul className="list-disc list-inside">
                            <li>Физик</li>
                            <li>Газарзүй</li>
                            <li>Англи хэл</li>
                            <li>Биологи</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CalendarDays className="h-5 w-5" /> Хуваарь
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-700">
                        <p>Маргааш: Физик (09:00)</p>
                        <p>Дараа нь: Газарзүй (11:00)</p>
                    </CardContent>
                </Card>
            </div>

            <Separator />
            <p className="text-sm text-gray-400 text-center">© 2025 EduLab — Бүх эрх хуулиар хамгаалагдсан</p>

        </div>
    );
}
