"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";
import { useTimerStore } from "@/hooks/Timer";

export default function Timer() {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const { hour, minute, second, isRunning, start, stop, reset } = useTimerStore();

    const format = (num: number) => String(num).padStart(2, "0");
    const displayTime = `${format(hour)}:${format(minute)}:${format(second)}`;

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#EEEEEE] p-4 sm:p-6">
            <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg shadow-xl border border-[#DDDDDD] rounded-3xl bg-white/70 backdrop-blur-lg">
                <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-[#2A4759]">
                        <Clock className="w-6 h-6 text-[#F79B72]" /> Цаг хэмжигч
                    </CardTitle>
                </CardHeader>
                <Separator className="mb-4 bg-[#DDDDDD]" />
                <CardContent className="flex flex-col items-center space-y-6">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-mono text-[#2A4759] tracking-widest bg-[#F79B72]/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-inner text-center">
                        {displayTime}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
                        <Button
                            onClick={start}
                            className="bg-[#F79B72] hover:bg-[#f68b5d] text-white px-6 py-2 rounded-full shadow-md w-full sm:w-auto"
                        >
                            ▶️ Эхлүүлэх
                        </Button>
                        <Button
                            onClick={stop}
                            className="bg-[#2A4759] hover:bg-[#1e3543] text-white px-6 py-2 rounded-full shadow-md w-full sm:w-auto"
                        >
                            ⏸ Түр зогсоох
                        </Button>
                        <Button
                            onClick={reset}
                            className="bg-[#DDDDDD] hover:bg-[#c9c9c9] text-[#2A4759] px-6 py-2 rounded-full shadow-md w-full sm:w-auto"
                        >
                            🔄 Шинэчлэх
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
