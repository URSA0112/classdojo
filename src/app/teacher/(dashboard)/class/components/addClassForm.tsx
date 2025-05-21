'use client'

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import GradeGroup from "@/app/school/(dashboard)/teacherlist/components/AddTeacher/GradeGroup"
import axios from "axios"
import { BASE_URL } from "@/constants/baseurl"
import { toast } from "sonner"
import ChooseSubject from "./Subject"

const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"]
const timeSlots = Array.from({ length: 12 }, (_, i) => `${8 + i}:00`)

type ScheduleEntry = { day: string; time: string }

export default function AddClassForm() {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({ subject: "", grade: "" })
    const [form, setForm] = useState({
        subject: [] as string[],
        grade: "",
        schedule: [] as ScheduleEntry[],
        term: "",
    })

    // 🔐 Токеныг localStorage-оос авах
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedToken = localStorage.getItem("token");
            setToken(storedToken);
        }
    }, []);

    // ⌨️ Инпут талбаруудыг өөрчлөх
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" })
    }

    // 📅 Өдөр сонгох/буцаах
    const toggleDay = (day: string) => {
        const updated = form.schedule.some(s => s.day === day)
            ? form.schedule.filter(s => s.day !== day)
            : [...form.schedule, { day, time: "" }]
        setForm({ ...form, schedule: updated })
    }

    // ⏰ Цаг тохируулах
    const setTime = (day: string, time: string) => {
        setForm({
            ...form,
            schedule: form.schedule.map(s => s.day === day ? { ...s, time } : s),
        })
    }

    // 📤 Илгээх үйлдэл
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        const newErrors = {
            subject: form.subject.length ? "" : "❗ Заах хичээлээ заавал сонгоно уу",
            grade: form.grade.trim() ? "" : "❗ Хичээл заах ангийг сонгоно уу",
        }
        setErrors(newErrors)
        if (newErrors.subject || newErrors.grade) {
            setIsLoading(false)
            return
        }

        try {
            const response = await axios.post(`${BASE_URL}teachingClass`, form, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("✅ Хичээл нэмэгдсэн:", response.data);
            toast("✅ Хичээл орох анги амжилттай нэмэгдлээ");
        } catch (error: any) {
            console.log("❌ Алдаа гарлаа:", error);
            toast("❌ Хичээл нэмэхэд алдаа гарлаа. Дахин оролдоно уу.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
                <CardContent className="space-y-6">

                    {/* 📘 Хичээл сонгох */}
                    <div>
                        <Label className={errors.subject ? "text-red-500" : ""}>Заах хичээл</Label>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className={`w-full ${errors.subject && "border-red-500 text-red-500"}`}>
                                    {form.subject.length ? form.subject.join(", ") : "Хичээл сонгох"}
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Хичээлүүд</DialogTitle>
                                <ChooseSubject setSelectedClass={(subjects) => setForm({ ...form, subject: subjects })} />
                            </DialogContent>
                        </Dialog>
                        {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                    </div>

                    {/* 🏫 Хичээл заах анги */}
                    <div>
                        <Label>Хичээл заах анги</Label>
                        <GradeGroup
                            setField={(field: string, value: string) => setForm({ ...form, [field]: value })}
                            onChange={(val: string) => setForm({ ...form, grade: val })} />
                        {errors.grade && <p className="text-sm text-red-500">{errors.grade}</p>}
                    </div>

                    {/* 📅 Хичээлийн өдрүүд ба цаг */}
                    <div className="space-y-3">
                        <Label>Хичээл орох өдрүүд ба цаг</Label>
                        <div className="flex flex-wrap gap-2">
                            {days.map(day => (
                                <Button key={day} type="button"
                                    variant={form.schedule.some(s => s.day === day) ? "default" : "outline"}
                                    onClick={() => toggleDay(day)}
                                    className="text-sm px-4 py-2"
                                >{day}</Button>
                            ))}
                        </div>

                        {form.schedule.map(({ day, time }) => (
                            <div key={day} className="flex items-center gap-4 pt-2">
                                <span className="min-w-[70px] font-medium">{day}</span>
                                <Select value={time} onValueChange={(t) => setTime(day, t)}>
                                    <SelectTrigger className="w-[130px] h-10">
                                        <SelectValue placeholder="Цаг сонгох" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {timeSlots.map(t => (
                                            <SelectItem key={t} value={t}>{t}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        ))}
                    </div>

                    {/* 📆 Улирал */}
                    <div>
                        <Label htmlFor="term">Улирал / Хичээлийн жил (заавал биш)</Label>
                        <Input
                            id="term"
                            name="term"
                            placeholder="Жишээ: 2024 оны хавар"
                            value={form.term}
                            onChange={handleChange}
                            className="h-10"
                        />
                    </div>
                </CardContent>

                <CardFooter className="flex justify-end">
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Хадгалж байна..." : "Анги хадгалах"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}