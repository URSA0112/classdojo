'use client'

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BASE_URL } from "@/constants/baseurl"
import axios from "axios"
import { toast } from "sonner"

export default function ClassTabs() {
    const [classes, setClasses] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const storedToken = localStorage.getItem("token")

        const fetchClasses = async () => {
            try {
                const res = await axios.get(`${BASE_URL}teachingClass`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    },
                })
                setClasses(res.data)
                console.log(res.data);

            } catch (err: any) {
                console.error("❌ Алдаа:", err?.response?.data?.error || err.message)
                setError("Хичээлийн мэдээлэл татахад алдаа гарлаа")
                toast.error("⛔ Хичээлийн мэдээлэл татахад алдаа гарлаа")
            }
        }

        if (storedToken) fetchClasses()
    }, [])

    return (
        <div className="">
            <Tabs defaultValue="classes" className="w-full">
                <TabsList className="grid grid-cols-5 w-full rounded-xl border shadow-sm bg-white">
                    <TabsTrigger value="classes">Ангиуд</TabsTrigger>
                    <TabsTrigger value="grades">Дүн</TabsTrigger>
                </TabsList>

                <TabsContent value="classes" className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {classes.length === 0 ? (
                            <p className="text-gray-500 text-sm">🪹 Ангиуд</p>
                        ) : (
                            classes.map((each: any) => (
                                <Card key={each.id} className="hover:shadow-md transition-all">
                                    <CardHeader className="flex items-center justify-between">
                                        <CardTitle className="text-lg text-blue-900 font-semibold">
                                            {`${each.grade} ${each.group}`}</CardTitle>
                                        <CalendarDays className="w-5 h-5 text-gray-500" />
                                    </CardHeader>
                                    <CardContent className="text-sm text-gray-600">
                                        🧮 {each.subject?.join(', ')} • 🕒 {each.schedule?.map((s: any) => `${s.day} ${s.time}`).join(" / ")}
                                        <div className="mt-4">
                                            <Link href={`class/selectedClass?id=${each.id}`}>
                                                <Button variant="secondary" className="w-full rounded-lg text-base">
                                                    Анги нээх
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="grades" className="pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg text-green-800 font-medium">Сүүлийн дүнгийн оруулалт</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm space-y-2 text-gray-700">
                                {gradeStats.map((grade, i) => (
                                    <li key={i}>📊 {grade.class} • {grade.task} • Дундаж: {grade.average}</li>
                                ))}
                            </ul>
                            <Button variant="outline" className="mt-4 rounded-xl">Дүнгийн дэлгэрэнгүй</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

const gradeStats = [
    { class: "Grade 8A", task: "Quiz 1", average: "78%" },
    { class: "Grade 9B", task: "Homework 2", average: "85%" },
]
