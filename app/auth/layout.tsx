




const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex flex-col items-center justify-center shadow-md">
            {children}
        </div>
    )
}

export default AuthLayout