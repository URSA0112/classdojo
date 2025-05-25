'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";


export default function SectionTool() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#EAE4D5] rounded-2xl p-5 m-5 relative">

            <Link href={`/Timer`}>  <Button className="rounded-full h-20 w-30 bg-cover bg-center bg-no-repeat border-2 border-black "
                style={{
                    backgroundImage: "url('/teacherTools/timer.png')",
                    backgroundSize: "120%",
                    backgroundPosition: "center",
                }}
                variant="outline">
                <p className="absolute bottom-0 font text-ml">Цаг хэмжигч</p>
            </Button></Link>




            <Button className="rounded-full h-20 w-30 bg-cover bg-center bg-no-repeat border-2 border-black"
                style={{
                    backgroundImage: "url('/teacherTools/random.png')",
                    backgroundSize: "40%",
                    backgroundPosition: "center",
                }}
                variant="outline">
                <p className="absolute bottom-0 font text-ml">Санамсаргүй сонголт</p>
            </Button>
            <Button className="rounded-full h-20 w-30 bg-cover bg-center bg-no-repeat border-2 border-black"
                style={{
                    backgroundImage: "url('/teacherTools/group.png')",
                    backgroundSize: "60%",
                    backgroundPosition: "center",
                }}
                variant="outline">
                <p className="absolute bottom-0 font text-ml">Бүлэг үүсгэгч</p>``
            </Button>
        </div>
    );
}