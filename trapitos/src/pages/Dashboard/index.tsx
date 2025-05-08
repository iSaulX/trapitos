import { Divider } from "@heroui/react";
function getMessage(): string{
    const hour = new Date().getHours();
    if (hour < 12){
        return "Buenos dias";
    } 
    if (hour < 18){
        return "Buenas tardes";
    }
    return "Buenas noches";
}


export default function Dashboard(){


    return ( 
        <div className="flex flex-col w-full lg:w-2/3 mx-auto p-3 h-full gap-2">
            <h1 className="font-extrabold text-2xl">{getMessage()}, Saúl.</h1>
            <p className="font-semibold text-neutral-400">Tus productos.</p>
            <Divider />
        </div>
    )
}