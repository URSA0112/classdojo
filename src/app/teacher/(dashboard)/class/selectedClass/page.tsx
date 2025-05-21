'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Users, ClipboardList, BookCheck, BarChart3, FolderDown } from "lucide-react"

/**
 * Энэ компонент нь тухайн ангид хамаарах бүх удирдлагыг харуулна.
 * - Сурагчдын жагсаалт
 * - Ирц бүртгэх
 * - Гэрийн даалгавар оруулах / шалгах
 * - Гүйцэтгэлийн тайлан
 * - Хичээлийн материал оруулах
 */
export default function ClassDetailsPanel({ className }: { className: string }) {
    const [open, setOpen] = useState(true)

    if (!open) return null

    return (
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{className} - Хичээлийн дэлгэрэнгүй</h2>
                <Button variant="ghost" onClick={() => setOpen(false)}>Хаах</Button>
                <Link href={`./`}> <Button variant="secondary" className="w-full" >Back</Button></Link>
            </div>

            <Tabs defaultValue="students" className="w-full">
                <TabsList className="grid grid-cols-5 w-full">
                    <TabsTrigger value="students">✏️ Сурагчид</TabsTrigger>
                    <TabsTrigger value="attendance">✅ Ирц</TabsTrigger>
                    <TabsTrigger value="homework">🧪 Даалгавар</TabsTrigger>
                    <TabsTrigger value="performance">📊 Тайлан</TabsTrigger>
                    <TabsTrigger value="materials">📂 Материал</TabsTrigger>
                </TabsList>

                <TabsContent value="students">
                    <Card>
                        <CardHeader><CardTitle>Сурагчдын жагсаалт</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="text-sm space-y-1">
                                <li>👩‍🎓 Анужин</li>
                                <li>👨‍🎓 Бат-Эрдэнэ</li>
                                <li>👩‍🎓 Солонго</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="attendance">
                    <Card>
                        <CardHeader><CardTitle>Ирц бүртгэх</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">Өнөөдрийн огноо: {new Date().toLocaleDateString()}</p>
                            <ul className="text-sm space-y-2">
                                <li>✅ Анужин - Ирсэн</li>
                                <li>❌ Бат-Эрдэнэ - Ирээгүй</li>
                                <li>✅ Солонго - Ирсэн</li>
                            </ul>
                            <Button className="mt-4">Ирц хадгалах</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="homework">
                    <Card>
                        <CardHeader><CardTitle>Гэрийн даалгавар</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm">1-р даалгавар: Алгебрийн тэгшитгэлүүд</p>
                            <Button className="mt-3">Шинэ даалгавар үүсгэх</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="performance">
                    <Card>
                        <CardHeader><CardTitle>Гүйцэтгэлийн тойм</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="text-sm space-y-2">
                                <li>Анужин - 92%</li>
                                <li>Бат-Эрдэнэ - 78%</li>
                                <li>Солонго - 87%</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="materials">
                    <Card>
                        <CardHeader><CardTitle>Материал оруулах</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm">Алгебрийн гарын авлага, PDF хэлбэрээр оруулсан.</p>
                            <Button className="mt-3">Шинэ материал нэмэх</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}