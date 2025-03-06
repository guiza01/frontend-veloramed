"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LuStethoscope } from "react-icons/lu";

export default function Home() {
    const router = useRouter();

    const handleClick = (userType: string) => {
        if (userType === "Administrador") {
            router.push("/businessConnect/integration/");
        } else if (userType === "Médico") {
            //router.push("/login");
        } else if (userType === "Atendente") {
            router.push("/engagemed/integration/");
        }
    };

    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center p-4">
            <div className='flex items-center justify-center w-full'>
                <Image
                    src="/logoVerola.png"
                    alt="Descrição da imagem"
                    width={320}
                    height={75}
                />
            </div>
            <div className='border-2 rounded-md mt-10 w-full max-w-3xl h-full p-6'>
                <h1 className='text-2xl mb-5 font-bold text-center'>Olá, Alvaro!</h1>
                <p className='mb-10 text-center'>Escolha abaixo o módulo que deseja acessar.</p>
                <div className="w-full flex flex-row gap-4 justify-center">
                    <div className="bg-white border-2 rounded-md flex flex-col items-start gap-2 p-8 w-1/3"
                        onClick={() => handleClick("Administrador")}
                    >
                        <Image
                            width={23}
                            height={27}
                            alt="adm clinico"
                            src={"/graph_5.png"}
                        />
                        <p className="font-semibold text-[#373839]">Busines Connect</p>
                    </div>
                    <div className="bg-white border-2 rounded-md flex flex-col items-start gap-2 p-8 w-1/3"
                        onClick={() => handleClick("Médico")}
                    >
                        <LuStethoscope size={27} color="#F2AC29" className="ml-3" />
                        <p className="font-semibold text-[#373839]">Med Assist</p>
                    </div>
                    <div className="bg-white border-2 rounded-md flex flex-col items-start gap-2 p-8 w-1/3"
                        onClick={() => handleClick("Atendente")}
                    >
                        <Image
                            width={23}
                            height={27}
                            alt="adm clinico"
                            src={"/agenda.svg"}
                        />
                        <p className="font-semibold text-[#373839] mt-1">Engage Med</p>
                    </div>
                </div>

            </div>
        </main>

    )
}
