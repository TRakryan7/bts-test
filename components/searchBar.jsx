import { useAddMaterialModal } from "@/hooks/use-modal-hook";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FiPlus } from "react-icons/fi";

const SearchBar = () => {
    const {isOpen, onOpen, onClose} = useAddMaterialModal();
    return ( 
        <div className="bg-white mb-5 p-3">
            <div className="flex justify-between items-center gap-3">
                <Input placeholder="Cari"/>
                <Button onClick={()=>{onOpen()}} variant="ghost" className="bg-utama hover:bg-utama/35 text-white ">
                    <FiPlus/>
                </Button>
            </div>
        </div>
     );
}
 
export default SearchBar;