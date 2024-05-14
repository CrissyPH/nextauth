"use client";


import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";



export const Social = () => {


    return (
        <div className="flex items-center w-full gap-x-2">
            <Button className="w-full" size="lg" variant="outline"><FcGoogle className="h-4 w-5" /></Button>
            <Button className="w-full" size="lg" variant="outline"><FaGithub className="h-4 w-5" /></Button>
        </div>
    )
}   