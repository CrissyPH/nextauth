import { FaCheckCircle } from "react-icons/fa";


interface FormSuccessProps {
    message?: string;
}


export const FormSuccess = ({ message }: FormSuccessProps) => {

    if (!message) return null
    return (
        <span className="w-full flex items-center bg-emerald-500/15 text-emerald-500 rounded-md font-normal p-2 gap-x-2">
            <FaCheckCircle className="h-4 w-4" />
            {message}
        </span>
    )
}