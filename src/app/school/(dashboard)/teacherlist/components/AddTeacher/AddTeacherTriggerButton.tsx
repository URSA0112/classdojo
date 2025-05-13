"use client";

import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function AddTeacherButton() {
    return (
        <DialogTrigger asChild>
            <Button variant="outline" className="absolute top-25 right-10 ">➕ Багш нэмэх</Button>
        </DialogTrigger>
    );
}