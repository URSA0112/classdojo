

import AddTeacherDialog from "./components/AddTeacher/AddTeacherDialog";
import TeacherTable from "./components/TeachersTable/TeacherTable";


export default function Page() {
    return (
        <div className="bg-gray-700 h-auto p-5 mt-5 ">
            <AddTeacherDialog></AddTeacherDialog>
            <TeacherTable></TeacherTable>
        </div>
    )
}