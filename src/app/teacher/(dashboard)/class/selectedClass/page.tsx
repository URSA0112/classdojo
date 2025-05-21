'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MessageSquareX } from "lucide-react"

export default function ClassDetailsPanel({ className }: { className: string }) {
    const [open, setOpen] = useState(true)

    if (!open) return null

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{className} — Хичээлийн дэлгэрэнгүй</h2>
                <div className="flex gap-2">
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        <MessageSquareX className="w-4 h-4 mr-1" /> Хаах
                    </Button>
                    <Link href="/teacher/class">
                        <Button variant="secondary">Буцах</Button>
                    </Link>
                </div>
            </div>

            <Tabs defaultValue="students" className="w-full">
                <TabsList className="grid grid-cols-5 w-full">
                    <TabsTrigger value="students">✏️ Сурагчид</TabsTrigger>
                    <TabsTrigger value="homework">🧪 Даалгавар</TabsTrigger>
                    <TabsTrigger value="performance">📊 Тайлан</TabsTrigger>
                    <TabsTrigger value="materials">📂 Материал</TabsTrigger>
                    <TabsTrigger value="extra">➕ Бусад</TabsTrigger>
                </TabsList>

                <TabsContent value="students">
                    <Card>
                        <CardHeader>
                            <CardTitle>Сурагчдын жагсаалт</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm space-y-1">
                                <li>👩‍🎓 Анужин</li>
                                <li>👨‍🎓 Бат-Эрдэнэ</li>
                                <li>👩‍🎓 Солонго</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="homework">
                    <Card>
                        <CardHeader>
                            <CardTitle>Гэрийн даалгавар</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">📘 1-р даалгавар: Алгебрийн тэгшитгэлүүд</p>
                            <Button className="mt-3">Шинэ даалгавар үүсгэх</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="performance">
                    <Card>
                        <CardHeader>
                            <CardTitle>Гүйцэтгэлийн тайлан</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm space-y-2">
                                <li>Анужин — 92%</li>
                                <li>Бат-Эрдэнэ — 78%</li>
                                <li>Солонго — 87%</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="materials">
                    <Card>
                        <CardHeader>
                            <CardTitle>Хичээлийн материал</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">📄 Алгебрийн гарын авлага (PDF)</p>
                            <Button className="mt-3">Шинэ материал нэмэх</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="extra">
                    <Card>
                        <CardHeader>
                            <CardTitle>Бусад боломжууд</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Энд ирээдүйд нэмэгдэх нэмэлт боломжуудыг харуулах боломжтой.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}