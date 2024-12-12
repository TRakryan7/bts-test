import { useAddMaterialModal } from "@/hooks/use-modal-hook";
import ModalComponent from "../modal/modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z  from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const fromSchema = z.object({
    name: z.string().min(1,{
        message:"Masukkan Name",
    }),
});

const AddItemModal = () => {
    const {isOpen, onOpen, onClose} = useAddMaterialModal();
    const form = useForm({
        resolver: zodResolver(fromSchema),
        mode:"onTouched",
        reValidateMode:"onChange",
        defaultValues: {
            name: "",
        },
    });

    const onSubmit=()=>{
        console.log("test")
    }

    return ( 
        <ModalComponent
            title="Tambah Catatan Baru"
            isOpen= {isOpen}
            onClose={onClose}
        >
            <div>
            <Form {...form}>
                        <form className="text-left py-5 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="space-y-3">
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                {/* <FormLabel>Email</FormLabel> */}
                                                    <FormControl>
                                                        <Input 
                                                            placeholder="Masukkan Judul"  
                                                            {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                            </FormItem>
                                        )}
                                    >
                                    </FormField>
                                </div>
                            </div>
                            <div className="h-[325px] w-full border">

                            </div>
                            <div className=" space-y-6">
                                <Button type="submit" className="text-white w-full bg-utama hover:bg-utama/50">Tambahkan</Button>
                            </div>
                        </form>
                    </Form>
            </div>

        </ModalComponent>
     );
}
 
export default AddItemModal;