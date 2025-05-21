'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { LineChart, CalendarDays, BookOpenText, UserRoundCheck, MessageCircle } from "lucide-react"
import Link from "next/link"
import ClassDetailsPanel from "./selectedClass/page"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import AddClassForm from "./components/addClassForm"

/**
 * 🧠 Math Dashboard — Багшийн хичээлийн хяналтын хэсэг
 * Хичээлүүд, хичээлийн материал, дүн, сурагчдын гүйцэтгэлийн тойм гээд бүгдийг нэг дороос удирдах боломжтой.
 */
export default function TeacherSubjectDashboard() {

    const mathClasses = [
        {
            grade: "Grade 8A",
            topic: "Алгебр",
            schedule: "Даваа / Лхагва",
        },
        {
            grade: "Grade 9B",
            topic: "Функц",
            schedule: "Мягмар / Пүрэв",
        },
    ]

    // Сурагч бүрийн сүүлийн дүнг хадгалах жишээ
    const gradeStats = [
        { class: "Grade 8A", task: "Quiz 1", average: "78%" },
        { class: "Grade 9B", task: "Homework 2", average: "85%" },
    ]

    // Материалын жагсаалт
    const resources = [
        { title: "Алгебрийн үндэс", description: "Worksheet болон видео хичээл", access: "8A" },
        { title: "Функц ба график", description: "PowerPoint + Дасгал ажил", access: "9B" },
    ]

    return (
        <div className="space-y-10 p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">📘 Math Dashboard</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">+ Шинэ анги нэмэх</Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogTitle>Шинэ анги нэмэх</DialogTitle>
                        <AddClassForm />
                    </DialogContent>
                </Dialog>
            </div>

            <Tabs defaultValue="classes" className="w-full">
                <TabsList className="grid grid-cols-5 w-full">
                    <TabsTrigger value="classes">Ангиуд</TabsTrigger>
                    <TabsTrigger value="grades">Дүн</TabsTrigger>
                    <TabsTrigger value="insights">Шинжилгээ</TabsTrigger>
                    <TabsTrigger value="messages">Санал хүсэлт</TabsTrigger>
                </TabsList>

                {/* АНГИ ТАБ */}
                <TabsContent value="classes">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {mathClasses.map((cls, index) => (
                            <Card key={index}>
                                <CardHeader className="flex items-center justify-between">
                                    <CardTitle>{cls.grade}</CardTitle>
                                    <CalendarDays className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        🧮 {cls.topic} • 🕒 {cls.schedule}
                                    </p>
                                    <div className="flex gap-2 mt-3">
                                        <Link href={`class/selectedClass`}>
                                            <Button variant="secondary"
                                                className="w-full" >Анги нээх</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* МАТЕРИАЛ ТАБ */}
                <TabsContent value="resources">
                    <div className="space-y-4">
                        {resources.map((res, i) => (
                            <Card key={i}>
                                <CardHeader className="flex items-center justify-between">
                                    <CardTitle>{res.title}</CardTitle>
                                    <BookOpenText className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">{res.description}</p>
                                    <p className="text-xs text-muted-foreground mt-1">Хандах анги: {res.access}</p>
                                </CardContent>
                            </Card>
                        ))}
                        <Button variant="outline">+ Материал нэмэх</Button>
                    </div>
                </TabsContent>

                {/* ДҮН ТАБ */}
                <TabsContent value="grades">
                    <Card>
                        <CardHeader>
                            <CardTitle>Сүүлийн дүнгийн оруулалт</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm space-y-1">
                                {gradeStats.map((grade, i) => (
                                    <li key={i}>📊 {grade.class} • {grade.task} • Дундаж: {grade.average}</li>
                                ))}
                            </ul>
                            <Button variant="outline" className="mt-4">Дүнгийн дэлгэрэнгүй</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* ШИНЖИЛГЭЭ ТАБ */}
                <TabsContent value="insights">
                    <Card>
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle>Гүйцэтгэлийн шинжилгээ</CardTitle>
                            <LineChart className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">📈 9B анги функцийн хичээлд өсөлттэй байна</p>
                            <Separator className="my-2" />
                            <p className="text-sm">⚠️ 8A анги геометрийн хэсэгт анхаарал шаардлагатай</p>
                            <Button variant="secondary" className="mt-4">Тайлан харах</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* САНАЛ ХҮСЭЛТ / ЗУРВАС */}
                <TabsContent value="messages">
                    <Card>
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle>Сурагчийн санал хүсэлт</CardTitle>
                            <MessageCircle className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">"Би гэрийн даалгаварт үлдэгдэл авсан. Дахин шалгуулж болох уу?"</p>
                            <Separator className="my-3" />
                            <p className="text-sm">"Видео хичээл дээр тайлбар бага байсан."</p>
                            <Button variant="outline" className="mt-4">Бүх санал харах</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
