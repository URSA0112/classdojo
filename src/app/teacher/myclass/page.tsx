"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const chartData = [
  { month: "January", desktop: 86, mobile: 180 },
  { month: "February", desktop: 105, mobile: 200 },
  { month: "March", desktop: 137, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 109, mobile: 130 },
  { month: "June", desktop: 84, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="bg-gray-200 pt-30 px-10 pb-10">
      <div className="flex flex-col gap-10">
        <Card>
          <CardContent className="h-[400px]">
            <CardHeader className="text-2xl font-bold leading-8 mb-5">Ангийн дүнгийн дундаж үзүүлэлт</CardHeader>
            <div className="w-[500px] h-[200px]">
              <div>
                <h1 className="font-bold font-sans">
                  Гар утас болон компьютерийн хэрэглээ:
                </h1>
              </div>

              <ChartContainer config={chartConfig} className="h-[290px] mt-5 w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>

            </div>
          </CardContent>
        </Card>
        <div className="bg-white w-[250px] ml-5 rounded-2xl">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
}
