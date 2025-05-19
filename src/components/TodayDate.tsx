'use client';

import { CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const weekdayNames = [
    'Ням',
    'Даваа гараг',
    'Мягмар гараг',
    'Лхагва гараг',
    'Пүрэв гараг',
    'Баасан гараг',
    'Бямба гараг',
];

const monthNames = [
    '1 сарын',
    '2 сарын',
    '3 сарын',
    '4 сарын',
    '5 сарын',
    '6 сарын',
    '7 сарын',
    '8 сарын',
    '9 сарын',
    '10 сарын',
    '11 сарын',
    '12 сарын',
];

export default function TodayDateCard() {
    const now = new Date();
    const weekday = weekdayNames[now.getDay()];
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    return (
        <Card className="bg-gradient-to-br from-blue-100 to-white shadow-sm w-full sm:max-w-md">
            <CardContent className="flex items-center gap-4 p-4">
                <CalendarDays className="w-6 h-6 text-blue-500" />
                <div className="text-gray-800">
                    <div className="text-sm font-medium text-gray-500">{weekday}</div>
                    <div className="text-lg font-semibold">{`${year} оны ${month} ${day}`}</div>
                </div>
            </CardContent>
        </Card>
    );
}