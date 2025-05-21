'use client'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import AddClassForm from "./components/addClassForm"
import ClassTabs from "./components/tabs"


export default function TeacherSubjectDashboard() {



    return (
        <div className="flex flex-col gap-5 w-full h-full bg-blue-100 p-10">

            <div className="mx-5">
                <h2 className="text-2xl font-mono text-gray-800">📚 Багшийн хичээл ордог ангиуд</h2>

                <div className="mt-5">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-white text-black hover:text-white hover:bg-green-500 transition-colors duration-200 border-green-300 border-2 ">
                                + Шинэ анги нэмэх
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="max-w-xl rounded-xl shadow-xl bg-amber-100">
                            <DialogTitle className="text-lg font-medium text--gray-800"> Шинэ анги нэмэх</DialogTitle>
                            <AddClassForm />
                        </DialogContent>
                    </Dialog>

                </div>
            </div>


            <div className="mx-5">
                <ClassTabs></ClassTabs>
            </div>
        </div>
    )
}

