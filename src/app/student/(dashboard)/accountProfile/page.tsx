import { Card } from "@/components/ui/card";
import StudentProfileCard from "./components/profileCard";
import Stickers from "./components/stickers";

export default function ProfilePage() {
  return (
    <div className="w-full h-full bg-green-100 p-10">
      <Card className="p-10 w-full h-auto ">
        <StudentProfileCard className="" ></StudentProfileCard>

      </Card>
    </div>
  );
}

