"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AddTeacherButton } from "./AddTeacherTriggerButton";
import CheckSubject from "./CheckBox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { useTeacherFormStore } from "../../TeacherData/useTeacherFormStore";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { BASE_URL } from "@/constants/baseurl";

const classes = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
const groups = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

export default function AddTeacherDialog() {

    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        grade,
        group,
        subjects,
        setField,
        setSubjects,
        reset
    } = useTeacherFormStore();

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        subjects: false,
    });

    const handleSubmit = async () => {
        const newErrors = {
            firstName: !firstName.trim(),
            lastName: !lastName.trim(),
            email: !email.trim(),
            phoneNumber: !phoneNumber.trim(),
            subjects: subjects.length === 0,
        };

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);
        if (hasError) return;

        const payload = { firstName, lastName, email, phoneNumber, grade, group, subjects };
        console.log("payload:", payload);
        try {
            const res = await axios.post(`${BASE_URL}teacher`, payload);
            console.log(res);

            toast.success("Багш амжилттай нэмэгдлээ")
        }
        catch (error) {

            console.log("Error adding teacher:", error)
            toast.error("Багш нэмэхэд алдаа гарлаа")
        }

        // 🧼 Input-уудыг цэвэрлэх
        reset();
    }

    return (
        <Dialog>
            <AddTeacherButton />
            <DialogContent className="min-w-150 w-auto h-auto px-8">
                <DialogHeader>
                    <DialogTitle>Шинэ багш нэмэх</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                    <div className="grid gap-1.5">
                        <Label className={errors.lastName ? "text-red-500" : ""}>Овог</Label>
                        <Input
                            placeholder="Овог"
                            value={lastName}
                            onChange={(e) => setField("lastName", e.target.value)}
                            className={errors.lastName ? "border-red-500" : ""}
                        />
                    </div>
                    <div className="grid gap-1.5">
                        <Label className={errors.firstName ? "text-red-500" : ""}>Нэр</Label>
                        <Input
                            placeholder="Нэр"
                            value={firstName}
                            onChange={(e) => setField("firstName", e.target.value)}
                            className={errors.firstName ? "border-red-500" : ""}
                        />
                    </div>

                    <div className="grid gap-1.5">
                        <Label className={errors.email ? "text-red-500" : ""}>Имэйл</Label>
                        <Input
                            type="email"
                            placeholder="email@school.mn"
                            value={email}
                            onChange={(e) => setField("email", e.target.value)}
                            className={errors.email ? "border-red-500" : ""}
                        />
                    </div>

                    <div className="grid gap-1.5">
                        <Label className={errors.email ? "text-red-500" : ""}>Утасны дугаар</Label>
                        <Input
                            type="number"
                            placeholder="99090900"
                            value={phoneNumber}
                            onChange={(e) => setField("phoneNumber", e.target.value)}
                            className={errors.phoneNumber ? "border-red-500" : ""}
                        />
                    </div>


                    <Label className={errors.subjects ? "text-red-500" : ""}>Заах хичээл</Label>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className={errors.subjects ? "border-red-500 text-red-500" : "w-full"}>
                                {subjects.length > 0 ? subjects.join(", ") : "Сонгох"}
                            </Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogTitle>Заах хичээл</DialogTitle>
                            <CheckSubject />
                        </DialogContent>
                    </Dialog>

                    <Label>Даасан анги</Label>
                    <div className="flex gap-2">
                        <Select value={grade} onValueChange={(val) => setField("grade", val)}>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Анги" />
                            </SelectTrigger>
                            <SelectContent>
                                {classes.map((grade) => (
                                    <SelectItem key={grade} value={grade}>
                                        {grade}-р анги
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={group} onValueChange={(val) => setField("group", val)}>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Бүлэг" />
                            </SelectTrigger>
                            <SelectContent>
                                {groups.map((group) => (
                                    <SelectItem key={group} value={group}>
                                        {group}-р бүлэг
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex gap-5 justify-end">
                        <DialogClose asChild>
                            <DialogClose asChild>
                                <Button
                                    onClick={() => reset()}
                                    className="bg-transparent border-2 border-gray-200 text-gray-500 hover:bg-gray-200 hover:text-black cursor-pointer"
                                >
                                    Цуцлах
                                </Button>
                            </DialogClose>
                        </DialogClose>
                        <Button
                            className="cursor-pointer border-2 hover:bg-white hover:text-black hover:border-2 hover:border-black"
                            onClick={handleSubmit}
                        >
                            Хадгалах
                        </Button>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
}