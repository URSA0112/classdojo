"use client";

import { useEffect, useState } from "react";
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
import axios from "axios";
import { BASE_URL } from "@/constants/baseurl";
import { toast } from "sonner";

const formSchema = z.object({
  lastName: z
    .string()
    .min(2, { message: "Овог хамгийн багадаа 2 үсэгтэй байх ёстой." }),
  firstName: z
    .string()
    .min(2, { message: "Нэр хамгийн багадаа 2 үсэгтэй байх ёстой." }),
  email: z.string().email({ message: "Зөв email хаяг оруулна уу." }),
  phoneNumber: z
    .string()
    .min(8, { message: "Утасны дугаар хамгийн багадаа 8 оронтой байх ёстой." }),
  emergencyNumber: z
    .string()
    .min(8, { message: "Утасны дугаар хамгийн багадаа 8 оронтой байх ёстой." }),
});

interface AddStudentProps {
  className?: string;
}

export default function AddStudent({ className }: AddStudentProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(token, "suragch nemeh hesegin token--------");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      phoneNumber: "",
      emergencyNumber: "",
    },
  });

  const reset = () => {
    setStep(1);
    setOpen(false);
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!token) {
      toast("⚠️ Token not loaded yet. Please wait.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}student`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("✅ Student added:", response.data);
      toast(`✅ Сурагч ${values.lastName} нэмэгдлээ`);
      reset();
    } catch (error: any) {
      console.log("❌ Error adding student:", error);
      toast("❌ Алдаа гарлаа. Сурагч нэмэхэд амжилтгүй боллоо.");
    } finally {
      setIsLoading(false); // ✅ Always stop loading
    }
  };

  return (
    <div className={className}>
      <Button onClick={() => setOpen(true)} variant="outline">
        <PlusIcon className="mr-2 h-4 w-4" />
        Сурагч нэмэх
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
                    name="lastName"
                    control={form.control}
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
                    name="firstName"
                    control={form.control}
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
                    name="email"
                    control={form.control}
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
                    name="phoneNumber"
                    control={form.control}
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
                <FormField
                  name="emergencyNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Яаралтай үед холбоо барих</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Яаралтай үед холбоо барих дугаар"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <div className="flex justify-between mt-6">
                <Button type="button" variant="outline" onClick={reset}>
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
                    <Button type="button" onClick={() => setStep(step + 1)}>
                      Дараагийн
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-60"
                    >
                      {isLoading ? (
                        <span className="animate-pulse">⏳ Хүлээнэ үү...</span>
                      ) : (
                        "Хадгалах"
                      )}
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
