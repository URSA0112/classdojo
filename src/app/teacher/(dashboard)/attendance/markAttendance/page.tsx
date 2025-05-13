"use client";
import React, { useState } from "react";

export default function MarkAttendance() {
  const [marked, setMarked] = useState(false);

  return (
    <div className="flex gap-3 items-center">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-800 italic leading-3">Ирсэн: 8:00</p>
        <p className="text-sm text-gray-800 italic leading-3">Явсан: 17:00</p>
      </div>
      <div>
        <label className="relative inline-block w-16 h-8 cursor-pointer">
          <input
            type="checkbox"
            checked={marked}
            onChange={() => {}}
            className="peer sr-only"
          />
          <div className="w-full h-full bg-slate-400 rounded-full transition-all duration-300 peer-checked:bg-green-600"></div>
          <div className="absolute top-[2px] left-[2px] h-7 w-7 bg-white border border-slate-400 rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-8 peer-checked:border-green-600 peer-hover:shadow-[0_0_0_8px_rgba(0,0,0,0.15)] peer-checked:hover:shadow-[0_0_0_8px_rgba(77,175,80,0.15)]"></div>
        </label>
      </div>
    </div>
  );
}
