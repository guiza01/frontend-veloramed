"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const type = searchParams.get("userType");
    setUserType(type);
  }, [searchParams]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClick = () => {
    console.log("User: ", userType);

    const routes: Record<string, string> = {
      Administrador: "/main",
      Médico: "/medassist/dashboard/",
      Atendente: "/engagemed/integration/",
    };

    router.push(routes[userType || ""] || "/");
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3">
          <div className="min-w-[400px] h-full p-[1px] rounded-xl bg-gradient-to-r from-[#2955D9] via-[#27B9F2] via-[#F2AC29] to-[#F23E2E]">
            <div className="w-full h-full bg-white rounded-xl p-4">
              <h1 className="text-xl font-semibold text-center mb-8">
                Fazer login
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">
                    E-mail <span className="text-[#F23E2E]">*</span>
                  </Label>
                  <Input
                    className="border-[#B4B6BB] relative placeholder:text-sm placeholder:text-[#666870]"
                    placeholder="email@example.com"
                    id="email"
                  />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <Label htmlFor="password">
                    Senha <span className="text-[#F23E2E]">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="border-[#B4B6BB] relative placeholder:text-sm placeholder:text-[#666870] pr-10"
                      placeholder="*********"
                      id="password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#373839]"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible size={22} />
                      ) : (
                        <AiOutlineEye size={22} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-start items-center mt-2 gap-3">
                  <input type="radio" className="p-2" />
                  <p className="text-xs font-semibold">Desejo permanecer conectado.</p>
                </div>

                <Button onClick={handleClick}>Entrar</Button>

                <div className="flex justify-start">
                  <Link href={"/forgot-password"} className="text-xs font-semibold">Esqueci minha senha</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-cover bg-no-repeat">
        <img src={"/Login2.png"} alt="Login2" className="w-full h-full" />
      </div>
    </main>
  );
}
