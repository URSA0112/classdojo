import {
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[1200px] h-[100px] bg-blue-400 rounded-t-2xl flex justify-around items-center text-white">
        <div>
          <div className="flex gap-2 items-center justify-center">
            <Mail className="w-[20px] h-[20px]" />
            <p>Edulab1012@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center ">
            <Phone className="w-[20px] h-[20px]" />
            <p>+11223344</p>
          </div>
        </div>
        <div className="flex  gap-2">
          <div className="flex items-center justify-center gap-3">
            <div>
              <Facebook></Facebook>
            </div>
            <div>
              <Instagram></Instagram>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-screen px-20 py-3 border-t-white border-t-2 bg-blue-400 ">
        <p className="text-white text-center">
          © 2025 Powered Edu Management edulab company
        </p>
      </div>
    </div>
  );
};
