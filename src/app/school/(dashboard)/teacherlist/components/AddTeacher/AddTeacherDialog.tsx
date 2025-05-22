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
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { useTeacherFormStore } from "../../TeacherData/useTeacherFormStore";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { BASE_URL } from "@/constants/baseurl";
import SelectClass from "./SelectClass";


export default function AddTeacherDialog() {
    const [open, setOpen] = useState(false);

    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        grade,
        group,
        subject,
        setField,
        reset
    } = useTeacherFormStore();

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        subject: false,
    });

    const handleSubmit = async () => {
        const newErrors = {
            firstName: !firstName.trim(),
            lastName: !lastName.trim(),
            email: !email.trim(),
            phoneNumber: !phoneNumber.trim(),
            subject: subject.length === 0,
        };

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);
        if (hasError) return;

        const payload = { firstName, lastName, email, phoneNumber, grade, group, subject };
        console.log(payload);


        console.log("payload:", payload);
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/teacher`, payload);
            console.log(res);

            toast.success("Багш амжилттай нэмэгдлээ")
            setOpen(false);
            reset();
        }
        catch (error) {

            console.log("Error adding teacher:", error)
            toast.error("Багш нэмэхэд алдаа гарлаа")
        }

        // 🧼 Input-уудыг цэвэрлэх


    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <AddTeacherButton />
            <DialogContent className="min-w-150 w-auto h-auto px-8">
                <DialogHeader>
                    <DialogTitle>Шинэ багш нэмэх</DialogTitle>
                </DialogHeader>
                {/* 1 */}
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

                    {/* 2 */}
                    <div className="grid gap-1.5">
                        <Label className={errors.firstName ? "text-red-500" : ""}>Нэр</Label>
                        <Input
                            placeholder="Нэр"
                            value={firstName}
                            onChange={(e) => setField("firstName", e.target.value)}
                            className={errors.firstName ? "border-red-500" : ""}
                        />
                    </div>

                    {/* 3 */}
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

                    {/* 4 */}
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

                    {/* 5 */}
                    <Label className={errors.subject ? "text-red-500" : ""}>Заах хичээл</Label>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className={errors.subject ? "border-red-500 text-red-500" : "w-full"}>
                                {subject.length > 0 ? subject.join(", ") : "Сонгох"}
                            </Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogTitle>Заах хичээл</DialogTitle>
                            <CheckSubject />
                        </DialogContent>
                    </Dialog>

                    {/* 6 */}
                    <Label>Даасан анги</Label>
                    <SelectClass setField={setField}></SelectClass>

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