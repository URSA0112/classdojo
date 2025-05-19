'use client';

import { Mail, Phone, UserCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TeacherProfile() {
  const teacher = {
    name: 'Сараа Багш',
    subject: 'Математик',
    email: 'saraa.teacher@school.edu.mn',
    phone: '99112233',
    class: '11A',
    grade: '11-р анги',
    avatar: '/avatar.png', // 👈 Replace with real path
  };

  return (
    <div className="px-10 py-10">
      <Card className="max-w-3xl mx-auto shadow-md">
        <CardHeader className="flex items-center gap-4 border-b pb-4">
          <Image
            src={teacher.avatar}
            alt="Teacher Avatar"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div>
            <CardTitle className="text-xl">{teacher.name}</CardTitle>
            <p className="text-sm text-gray-500">{teacher.subject} багш</p>
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-4 h-4" />
            <span>{teacher.email}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="w-4 h-4" />
            <span>{teacher.phone}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <UserCircle2 className="w-4 h-4" />
            <span>Хариуцсан анги: {teacher.class}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <UserCircle2 className="w-4 h-4" />
            <span>Түвшин: {teacher.grade}</span>
          </div>

          <div className="col-span-1 sm:col-span-2 mt-4">
            <Button variant="default" className="w-full sm:w-fit">
              Профайл засах
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}