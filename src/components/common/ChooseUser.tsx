"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LuStethoscope } from "react-icons/lu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

export default function ChooseUser() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3">
          <div className='flex items-center justify-center w-full'>
            <Image
              src="/logoVerola.png"
              alt="Logo Verola"
              width={250}
              height={70}
            />
          </div>
          <p className="text-sm text-left mr-20">Como deseja efetuar o login?</p>

          <div
            className="w-[300px] h-full p-[1px] rounded-md bg-gradient-to-r from-[#2955D9] via-[#27B9F2] via-[#F2AC29] to-[#F23E2E] cursor-pointer"
            onClick={() => router.push("/administrator/login")}
          >
            <div className="w-full bg-white h-full rounded-md flex items-center justify-center gap-2 p-8">
              <Image width={23} height={27} alt="Administrador" src="/graph_5.png" />
              <p className="font-semibold text-[#373839]">Administrador clínico</p>
            </div>
          </div>

          <div
            className="w-[300px] h-full p-[1px] rounded-md bg-gradient-to-r from-[#2955D9] via-[#27B9F2] via-[#F2AC29] to-[#F23E2E] cursor-pointer"
            onClick={() => router.push("/medassist/login")}
          >
            <div className="w-full bg-white h-full rounded-md flex items-center gap-2 p-8">
              <LuStethoscope size={27} color="#F2AC29" />
              <p className="font-semibold text-[#373839]">Médico</p>
            </div>
          </div>

          <div
            className="w-[300px] h-full p-[1px] rounded-md bg-gradient-to-r from-[#2955D9] via-[#27B9F2] via-[#F2AC29] to-[#F23E2E] cursor-pointer"
            onClick={() => router.push("/engagemed/login")}
          >
            <div className="w-full bg-white h-full rounded-md flex items-center gap-2 p-8">
              <Image width={23} height={27} alt="Atendente" src="/agenda.svg" />
              <p className="font-semibold text-[#373839] mt-1">Atendente</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-cover bg-no-repeat">
        <img src="/Login1.png" alt="Login" className="w-full h-full" />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Em desenvolvimento</DialogTitle>
            <DialogDescription>
              O módulo está em desenvolvimento. Por favor, aguarde.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
