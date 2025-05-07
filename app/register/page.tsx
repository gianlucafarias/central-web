import { RegisterForm } from "@/components/register/RegisterForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Registro',
  };

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 pt-25">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/sociosbg.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}