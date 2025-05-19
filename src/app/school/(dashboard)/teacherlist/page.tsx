

import { Card } from "@/components/ui/card";
import AddTeacherDialog from "./components/AddTeacher/AddTeacherDialog";
import TeacherTable from "./components/TeachersTable/TeacherTable";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import CreateGradeGroup from "@/components/CreateGradeGroup";

const test = []
export default function Page() {
    return (
        <div className="bg-gray-700 h-auto p-5 mt-5 ">
            <AddTeacherDialog></AddTeacherDialog>
            <TeacherTable></TeacherTable>

            <CreateGradeGroup></CreateGradeGroup>
        </div>
    )
}