"use client";
import * as z  from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { LoginUseCase } from "@/modules/auth/auth.usecase";
import { useRouter } from "next/navigation";

const fromSchema = z.object({
    email: z.string().min(1,{
        message:"Masukkan email",
    }).email({
        message:"Tolong masukkan email yang benar",
    }),
    password: z.string().min(1, {
      message: "Masukkan password",
    }),
    username: z.string().min(1, {
      message: "Masukkan username",
    }),
});


const Page = () => {

    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(fromSchema),
        mode:"onTouched",
        reValidateMode:"onChange",
        defaultValues: {
            email: "",
            password: "",
            username:""
        },
    });

    const onSubmit = async (data) => {
        const SubmitLogin = await LoginUseCase(data);
        console.log(SubmitLogin);
        login(SubmitLogin);
        router.push("/");
    }

    return ( 
        <div className="flex justify-center items-center h-full">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-96">
                <div className="text-center text-black text-sm lg:text-lg">
                    <div className="space-y-3">
                        <h1 className="text-lg lg:text-lg font-semibold">Masuk</h1>
                        <h2 className="text-xs px-16">Masuk dengan akun Anda, dan mulai bekerja!</h2>
                    </div>
                    <Form {...form}>
                        <form className="text-left py-5 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="space-y-3">
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                {/* <FormLabel>Email</FormLabel> */}
                                                    <FormControl>
                                                        <Input 
                                                            placeholder="Email"  
                                                            {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                            </FormItem>
                                        )}
                                    >
                                    </FormField>
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                {/* <FormLabel>Email</FormLabel> */}
                                                    <FormControl>
                                                        <Input 
                                                            placeholder="username"  
                                                            {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                            </FormItem>
                                        )}
                                    >
                                    </FormField>
                                </div>
                                <div>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>Email</FormLabel> */}
                                                <FormControl>
                                                    <Input placeholder="Password" type="password"  {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                        </FormItem>
                                    )}
                                >
                                </FormField>
                                </div>
                            </div>
                            <div className=" space-y-6">
                                <Button type="submit" className="text-white w-full bg-utama hover:bg-utama/50">Masuk</Button>
                            </div>
                        </form>
                    </Form>
                    <Separator/>
                    <div className="text-black text-xs py-4"> Sudah Punya Akun? <Link className="font-medium cursor-pointer" href="/">Masuk</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default Page;