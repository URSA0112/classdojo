
import { CalendarDays, Timer, LineChart, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function SectionInfo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-sm">Дараагийн хичээл</CardTitle>
                    <Timer className="w-4 h-4 text-blue-500" />
                </CardHeader>
                <CardContent className="text-gray-600 text-sm">
                    10:00 - 11А <br /> Геометр
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-sm">Долоо хоногийн ирц</CardTitle>
                    <LineChart className="w-4 h-4 text-green-500" />
                </CardHeader>
                <CardContent className="text-gray-600 text-sm">
                    <strong>91%</strong> — тогтвортой байна
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-sm">Тестийн дүн</CardTitle>
                    <BarChart3 className="w-4 h-4 text-purple-500" />
                </CardHeader>
                <CardContent className="text-gray-600 text-sm">
                    Сүүлийн тестийн дундаж: <strong>B+</strong>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-sm">Үйл явдлууд</CardTitle>
                    <CalendarDays className="w-4 h-4 text-yellow-500" />
                </CardHeader>
                <CardContent className="text-gray-600 text-sm">
                    Маргааш эцэг эхийн уулзалт
                </CardContent>
            </Card>
        </div>
    )
}
