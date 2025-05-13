import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="h-screen w-screen bg-amber-100 pt-25 flex items-center justify-center">
      <div className="flex flex-row gap-50 justify-center items-center">
        <div className="flex w-100 flex-col">
          <Image src={"/logo-back.svg"} alt="logo" width={300} height={200} />
          <p className="text-3xl">
            Сургуулийн өдөр тутмын бүхий л үйл ажиллагааг автоматжуулж, хялбар
            хэрэглээ бүхий технологийн дэвшилтэт шийдлээр дамжуулан багш, эцэг
            эх, сурагчдыг холбох гүүр болсон цогц систем юм.
          </p>
        </div>
        <Image alt="home" src={"/School.jpg"} width={800} height={500} className="rounded-full"/>
      </div>
    </div>
  );
};
