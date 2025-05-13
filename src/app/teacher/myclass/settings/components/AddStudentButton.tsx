"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PlusIcon } from "lucide-react";

const formSchema = z.object({
  lastName: z.string().min(2, { message: "Овог хамгийн багадаа 2 үсэгтэй байх ёстой." }),
  firstName: z.string().min(2, { message: "Нэр хамгийн багадаа 2 үсэгтэй байх ёстой." }),
  email: z.string().email({ message: "Зөв email хаяг оруулна уу." }),

  phone1: z.string().min(8, { message: "Утасны дугаар хамгийн багадаа 8 оронтой байх ёстой." }),
  studentPhone: z.string().min(8, { message: "Утасны дугаар хамгийн багадаа 8 оронтой байх ёстой." }),
  phone2: z.string().optional(),
});

export default function AddStudent() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      phone1: "",
      phone2: "",
      studentPhone: ""
    },
  });

  const reset = () => {
    setStep(1);
    setOpen(false);
    form.reset(); 
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitted:", values);

  }

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <PlusIcon /> Сурагч нэмэх
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Шинэ сурагч нэмэх
            </DialogTitle>
            <DialogDescription>Мэдээллийг бүрэн бөглөнө үү.</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {step === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Овог</FormLabel>
                        <FormControl>
                          <Input placeholder="Овог" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Нэр</FormLabel>
                        <FormControl>
                          <Input placeholder="Нэр" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email хаяг</FormLabel>
                        <FormControl>
                          <Input placeholder="Email хаяг" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="studentPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Утасны дугаар</FormLabel>
                        <FormControl>
                          <Input placeholder="Утасны дугаар" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <FormField
                    control={form.control}
                    name="phone1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Холбоо барих дугаар 1</FormLabel>
                        <FormControl>
                          <Input placeholder="Утасны дугаар 1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Холбоо барих дугаар 2</FormLabel>
                        <FormControl>
                          <Input placeholder="Утасны дугаар 2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <div className="flex justify-between mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={reset}
                >
                  Цуцлах
                </Button>

                <div className="flex gap-2">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                    >
                      Буцах
                    </Button>
                  )}

                  {step < 2 ? (
                    <Button
                      type="button"
                      onClick={() => setStep(step + 1)}
                    >
                      Дараагийн
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                      Хадгалах
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
