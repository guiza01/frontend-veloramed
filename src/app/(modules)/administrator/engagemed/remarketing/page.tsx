import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { PiOpenAiLogo } from "react-icons/pi";

export default function RemarketingPage() {
  return (
    <main className="w-full min-h-screen 2xl:max-w-[1300px] mx-auto flex flex-col p-4 px-2">
      <h1 className="font-semibold text-xl mb-3">Remarketing</h1>

      <div className="mt-4 p-4 bg-white rounded-xl">
        <div className=" my-8">
          <div className="border border-[#CFD1D3] h-full flex overflow-x-auto rounded-md">
            <div className="p-3 flex items-center gap-2 w-full relative">
              <div className="w-8 h-8 border p-3 flex items-center justify-center rounded-full border-[#373839]">
                01
              </div>
              <p>Prompt</p>
              <div className="absolute right-0">
                <Image height={140} width={13} src={"/Arrow.svg"} alt="arrow" />
              </div>
            </div>
            <div className="p-3 py-0 flex items-center gap-2 w-full relative">
              <div className="w-8 h-8 border p-3 flex items-center text-[#9A9CA2] justify-center rounded-full border-[#9A9CA2]">
                02
              </div>
              <p className="text-[#9A9CA2]">Estrutura</p>
              <div className="absolute right-0">
                <Image height={140} width={13} src={"/Arrow.svg"} alt="arrow" />
              </div>
            </div>
            <div className="p-3 py-0 flex items-center gap-2 w-full">
              <div className="w-8 h-8 border p-3 flex items-center text-[#9A9CA2] justify-center rounded-full border-[#9A9CA2]">
                03
              </div>
              <p className="text-[#9A9CA2]">Simulação</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-2">
            <Label>
              Nome da campanha <span className="text-[#F23E2E]">*</span>
            </Label>
            <Input
              className="border-[#B4B6BB]"
              defaultValue={"Transforme sua Vida com Saúde"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>
              Especialidade <span className="text-[#F23E2E]">*</span>
            </Label>
            <select
              className="border border-[#B4B6BB] px-3 py-2 rounded-md text-sm"
              defaultValue="1"
            >
              <option value="1" className="text-sm">
                Nutrição - Unimed
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>
              Prompt da campanha <span className="text-[#F23E2E]">*</span>
            </Label>
            <textarea
              className="border border-[#B4B6BB] rounded-md text-sm min-h-20 p-2 px-3"
              defaultValue={
                "Crie uma mensagem envolvente e profissional para uma clínica de nutrição focada em emagrecimento saudável. Destaque os benefícios de acompanhamento nutricional personalizado, apoio contínuo e resultados duradouros. Inclua um call-to-action para agendamento de consulta."
              }
            />
            <span className="text-xs text-[#4D5056]">300 caracteres</span>
          </div>

          <div className="flex gap-3 items-center">
            <PiOpenAiLogo size={28} />
            <span className="text-sm">Digite o prompt para o Chat GPT</span>
          </div>

          <div className="flex w-full justify-end">
            <Button>Próximo</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
