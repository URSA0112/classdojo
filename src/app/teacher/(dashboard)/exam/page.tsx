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
          <div className="grid grid-cols-2">
            <Card className=" w-fit h-fit border-red-500 border-dashed p-20">
              <CardContent className="flex justify-center items-center my-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-red-500 rounded-2xl hover:bg-red-900"
                    >
                      <Plus className="text-white" size="icon " />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="gap-8">
                    <DialogHeader>
                      <DialogTitle className="pb-2">
                        <p className="font-bold text-lg leading-7">
                          Шинэ шалгалт үүсгэх<span></span>
                        </p>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-3 ">
                        <p className="font-semibold leading-[14px] text-base">
                          Шалгалтын сэдэв
                        </p>
                        <Input
                          className="w-[220px]"
                          type="text"
                          placeholder="Шалгалтын сэдэв"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3 ">
                        <p className="font-semibold leading-[14px] text-base">
                          Шалгалтын агуулга
                        </p>
                        <Input
                          className="w-[220px]"
                          type="text"
                          placeholder="Шалгалтын агуулга"
                        ></Input>
                      </div>
                      
                     
                    </div>

                    <Button>Шалгалт үүсгэх</Button>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card className="w-1/2">
        <CardContent>
          {" "}
          <CardHeader className="text-3xl font-bold leading-7 mb-5 px-0">
            Улирлын шалгалт
          </CardHeader>
          <div className="grid grid-cols-2">
            <Card className=" w-fit h-fit border-red-500 border-dashed p-20">
              <CardContent className="flex justify-center items-center my-auto">
              <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-red-500 rounded-2xl hover:bg-red-900"
                    >
                      <Plus className="text-white" size="icon " />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="gap-8">
                    <DialogHeader>
                      <DialogTitle className="pb-2">
                        <p className="font-bold text-lg leading-7">
                          Шинэ шалгалт үүсгэх<span></span>
                        </p>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-3 ">
                        <p className="font-semibold leading-[14px] text-base">
                          Шалгалтын сэдэв
                        </p>
                        <Input
                          className="w-[220px]"
                          type="text"
                          placeholder="Шалгалтын сэдэв"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3 ">
                        <p className="font-semibold leading-[14px] text-base">
                          Шалгалтын агуулга
                        </p>
                        <Input
                          className="w-[220px]"
                          type="text"
                          placeholder="Шалгалтын агуулга"
                        ></Input>
                      </div>
                      
                     
                    </div>

                    <Button>Шалгалт үүсгэх</Button>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
