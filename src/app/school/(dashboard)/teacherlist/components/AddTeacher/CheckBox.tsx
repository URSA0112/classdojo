"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { subjects } from "./Subject";
import { useTeacherFormStore } from "../../TeacherData/useTeacherFormStore";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export default function CheckSubject() {
    const [selected, setSelected] = useState<string[]>([]);
    const { setSubject } = useTeacherFormStore();

    const handleChange = (subject: string) => {
        let updated: string[];

        if (selected.includes(subject)) {
            updated = selected.filter((s) => s !== subject);
        } else {
            updated = [...selected, subject];
        }

        setSelected(updated);
        setSubject(updated);
    };

    return (
        <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-2">
                {subjects.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                        <Checkbox
                            id={subject}
                            checked={selected.includes(subject)}
                            onCheckedChange={() => handleChange(subject)}
                        />
                        <label
                            htmlFor={subject}
                            className="text-sm font-medium leading-none text-gray-800"
                        >
                            {subject}
                        </label>
                    </div>
                ))}
            </div>
            <div className="mt-3 flex justify-end">
                <DialogClose
                    className="cursor-pointer border-2 bg-black text-white border-black hover:bg-white hover:text-black hover:border-black inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-4 py-2"
                >
                    Дуусгах
                </DialogClose>
            </div>
        </div>
    );
}