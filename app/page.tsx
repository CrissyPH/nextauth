"use client";



import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})


export default function Home() {


  const router = useRouter()

  const onClick = () => {
    router.push('/auth/login')
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-2">
      <h1 className={cn("font-bold text-6xl tracking-tighter", font.className)}>Portal Service</h1>
      <p className="text-muted-foreground">A webportal application for Company name</p>
      <div>
        <LoginButton>
          <Button onClick={onClick}>Sign in</Button>
        </LoginButton>
      </div>
    </div>
  );
}
