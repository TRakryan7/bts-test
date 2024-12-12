"use client";
import { CardItem } from "@/components/cardItem";
import AddItemModal from "@/components/modals/addItemModals";
import SearchBar from "@/components/searchBar";
import * as z  from "zod";


const fromSchema = z.object({
    email_username: z.string().min(1,{
        message:"Masukkan email",
    }).email({
        message:"Tolong masukkan email yang benar",
    }),
    password: z.string().min(1, {
      message: "Masukkan password",
    }),
});


const Page = () => {



    return ( 
        <div className="p-11">
            <div className="w-full flex justify-center">
                <SearchBar/>
            </div>
            <div className="w-full justify-start">
                <CardItem/>
            </div>
            <AddItemModal/>
        </div>
     );
}
 
export default Page;
