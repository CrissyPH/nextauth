import { FaExclamationTriangle } from "react-icons/fa";


interface FormErrorProps {
    message?: string;
}


export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null

    return (
        <span className="w-full flex items-center bg-destructive/15 text-destructive rounded-md font-normal p-2 gap-x-2">
            <FaExclamationTriangle className="h-4 w-4" />
            {message}
        </span>
    )
}