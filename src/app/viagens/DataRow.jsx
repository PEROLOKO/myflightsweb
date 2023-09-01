import DropMenu from "@/components/DropMenu";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function DataRow({voo}){
    return (
        <div id="data-row" className="flex items-center justify-between hover:bg-emerald-800 p-2 rounded cursor-pointer">
            <div className="flex gap-2">
              <PaperAirplaneIcon className="h-6 w-6" />
              <span>{voo.destino}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>Portão:{voo.portao}</span>
              <DropMenu />
            </div>
        </div>
    )
}