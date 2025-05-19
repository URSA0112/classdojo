'use client';

import { AlertTriangle, User, NotebookPen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyClassOverview() {
    return (
        <div className="p-10 bg-white space-y-8 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800">👩‍🏫 11А ангийн хяналтын самбар</h2>

            {/* Key stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Сурагчдын тоо</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xl font-bold text-blue-600">30</CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Дундаж ирц</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xl font-bold text-green-600">91%</CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Сурагчийн асуудал</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center gap-2 text-red-500 text-sm">
                        <AlertTriangle className="w-4 h-4" />
                        2 сурагчийн хичээл тасалсан
                    </CardContent>
                </Card>
            </div>

            {/* Feed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader className="flex items-center gap-2">
                        <User className="text-blue-400 w-5 h-5" />
                        <CardTitle className="text-sm">Шинээр элссэн сурагч</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-600 text-sm">Ган-Эрдэнэ (2025/05/19)</CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex items-center gap-2">
                        <NotebookPen className="text-purple-400 w-5 h-5" />
                        <CardTitle className="text-sm">Шалгалт авсан</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-600 text-sm">Математик — 25 сурагч оролцсон</CardContent>
                </Card>
            </div>
        </div>
    );
}