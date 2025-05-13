import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageIcon, Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full px-10 pt-30 flex flex-row gap-10">
      <Card className="w-1/2">
        <CardContent>
          <CardHeader className="text-3xl font-bold leading-7 mb-5 px-0">
            Явцын шалгалт
          </CardHeader>
          <div>
            Шалгалт өгсөн байдал
          </div>
        </CardContent>
      </Card>
      <Card className="w-1/2">
        <CardContent>
          {" "}
          <CardHeader className="text-3xl font-bold leading-7 mb-5 px-0">
            Улирлын шалгалт
          </CardHeader>
         <div></div>
        </CardContent>
      </Card>
    </div>
  );
}
