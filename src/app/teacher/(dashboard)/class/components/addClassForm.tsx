'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import CheckSubject from "@/app/school/(dashboard)/teacherlist/components/AddTeacher/CheckBox"
import GradeGroup from "@/app/school/(dashboard)/teacherlist/components/AddTeacher/GradeGroup"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@radix-ui/react-dialog"

export default function AddClassForm() {
    const [form, setForm] = useState({
        subject: [] as string[],
        grade: "",
        schedule: "",
        term: "",
    })

    const [errors, setErrors] = useState({ subject: "", grade: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        let hasError = false
        const newErrors = { subject: "", grade: "" }

        if (!form.subject || form.subject.length === 0) {
            newErrors.subject = "Заах хичээлээ заавал сонгоно уу"
            hasError = true
        }
        if (!form.grade.trim()) {
            newErrors.grade = "Анги сонгох шаардлагатай"
            hasError = true
        }

        setErrors(newErrors)

        if (hasError) return

        console.log("Submitted:", form)
        // TODO: Backend рүү илгээх
    }

    return (
        <Card className="max-w-xl w-full mx-auto border rounded-2xl shadow-md font-sans">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-bold">🆕 Шинэ хичээлийн анги нэмэх</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 p-0 text-base">
                    <div className="space-y-2">
                        <Label className={`text-base font-medium ${errors.subject ? "text-red-500" : ""}`}>Заах хичээл</Label>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className={`w-full h-10 text-base ${errors.subject ? "border-red-500 text-red-500" : ""}`}>
                                    {form.subject.length > 0 ? form.subject.join(", ") : "Хичээл сонгох"}
                                </Button>
                            </DialogTrigger>

                            <DialogContent>
                                <DialogTitle className="text-base font-semibold">Хичээл сонгох</DialogTitle>
                                <CheckSubject
                                    selected={form.subject}
                                    setSelected={(subjects: string[]) => setForm({ ...form, subject: subjects })}
                                />
                            </DialogContent>
                        </Dialog>
                        {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="grade" className="text-base font-medium">Хичээл заах анги</Label>
                        <GradeGroup onChange={(val: string) => setForm({ ...form, grade: val })} />
                        {errors.grade && <p className="text-sm text-red-500">{errors.grade}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="schedule" className="text-base font-medium">Хичээлийн хуваарь</Label>
                        <Input
                            id="schedule"
                            name="schedule"
                            placeholder="Жишээ: Даваа / Лхагва"
                            value={form.schedule}
                            onChange={handleChange}
                            className="h-10 text-base"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="term" className="text-base font-medium">Улирал / Хичээлийн жил (заавал биш)</Label>
                        <Input
                            id="term"
                            name="term"
                            placeholder="Жишээ: 2024 оны хавар"
                            value={form.term}
                            onChange={handleChange}
                            className="h-10 text-base"
                        />
                    </div>
                </CardContent>

                <CardFooter className="p-0 pt-4 flex justify-end">
                    <Button type="submit" className="px-6 py-2 text-base rounded-xl">Анги хадгалах</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
