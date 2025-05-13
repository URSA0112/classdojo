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
      <div className=" w-screen px-20 py-10 ">
        <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <Link href="/">
            <Image src={"/logo-back.svg"} alt="logo" width={250} height={200} />
          </Link>
          <p className="text-2xl pl-10">EduLab LLC</p>
          <div className="flex flex-col gap-3 pl-10">
            <p className="flex gap-3">
              <Mail /> support@edulab.mn
            </p>
            <p className="flex gap-3">
              <Phone /> +976 8888-8888
            </p>
          </div>
        </div>
        <div>
          <p className="text-3xl">Бидэнтэй холбоо барих</p>
          <div className="flex gap-3 flex-col pt-5 pl-10">
            <Link href={"#"}>
              {" "}
              <p className="flex gap-3 cursor-pointer">
                {" "}
                <Facebook /> Facebook
              </p>
            </Link>
            <Link href={"#"}>
              {" "}
              <p className="flex gap-3 cursor-pointer">
                {" "}
                <Instagram /> Instagram
              </p>
            </Link>
            <Link href={"#"}>
              {" "}
              <p className="flex gap-3 cursor-pointer">
                {" "}
                <Youtube /> Youtube
              </p>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-3xl">Тусламж</p>
          <div className="flex gap-3 flex-col pt-5 pl-10">
            <p className="flex gap-3 cursor-pointer">
              {" "}
              <ChevronRight />
              Харилцагчийн үйлчилгээ
            </p>
            <p className="flex gap-3 cursor-pointer">
              {" "}
              <ChevronRight />
              Технологи
            </p>
            <p className="flex gap-3 cursor-pointer">
              {" "}
              <ChevronRight />
              Түгээмэл асуулт хариулт
            </p>
          </div>
        </div>
        </div>
        <hr className="text-gray-400 mt-5 mb-5"/>
        <p className="text-gray-400">© 2025 Powered Edu Management edulab company</p>
      </div>
    );
  };
  