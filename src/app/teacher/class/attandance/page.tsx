import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { columns, StudentAttendance } from "./components/column";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { data, DataTableDemo } from "./components/data-table";
import { ColumnDef } from "@tanstack/react-table";


export default function Page() {
  interface DataTableDemoProps {
    columns: ColumnDef<StudentAttendance>[];
    data: any;
  }
  return (
    <div className="px-10 pt-30 pb-10 bg-gray-200">
      <div className="flex flex-col gap-10">
        <Card>
          <CardContent>
            <CardHeader className="text-2xl font-bold leading-8 mb-5">
              Өнөөдрийн ирц бүртгэл үүсгэх
            </CardHeader>
            <div className="pl-5">
              <Dialog>
                <DialogTrigger className="px-8 py-3 bg-black text-white rounded-2xl flex  my-5 cursor-pointer border-2 hover:bg-white hover:text-black hover:border-2 hover:border-black">
                  Ирц авах
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Ирц бүртгэх үү?</DialogTitle>
                    <DialogDescription>
                      Ангийн өнөөдрийн ирцийг авахдаа итгэлтэй байна уу?
                    </DialogDescription>
                    <div className="flex justify-around py-5">
                      <DialogClose className="px-3 rounded-md text-sm bg-transparent border-2 border-gray-200 text-gray-500 hover:bg-gray-200 hover:text-black cursor-pointer">
                        Цуцлах
                      </DialogClose>{" "}
                      <Button
                        type="submit"
                        className="cursor-pointer border-2 hover:bg-white hover:text-black hover:border-2 hover:border-black"
                      >
                        Ирц авах
                      </Button>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardHeader className="text-2xl font-bold leading-8 mb-5">
              Өнөөдрийн ирц бүртгэл
            </CardHeader>
            <div>
              <DataTableDemo columns={columns} data={data} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
