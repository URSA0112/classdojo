import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn, PhoneCall } from "lucide-react";

export const Header = () => {
  return (
    <div className="bg-white h-f flex justify-between px-15 py-3 items-center fixed w-screen">
      <Link href="/">
        <Image src={"/logo-back.svg"} alt="logo" width={200} height={200} />
      </Link>
      <div className="flex gap-5">
        <Button className=" px-15 py-5 rounded-full bg-teal-400 border-2 hover:bg-teal-200  hover:text-black">
          <PhoneCall /> Холбоо барих
        </Button>
        <Link href={"/login"}>
          <Button className=" px-15 py-5 rounded-full bg-blue-400 border-2 hover:bg-teal-200  hover:text-black">
            <LogIn />
            Нэвтрэх
          </Button>
        </Link>
      </div>
    </div>
  );
};
