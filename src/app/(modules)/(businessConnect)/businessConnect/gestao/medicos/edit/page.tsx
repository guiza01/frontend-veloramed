"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye, EyeOff, ClipboardCopy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const doctor = {
    index: 1,
    name: 'Maria Elisângela dos Santos',
    specialty: 'Cardiologia',
    plan: 'Convênio/Particular',
    room: 'Sala 203',
    avatar: '/icone-perfil.jpg',
    email: 'claudiafernandez1998@gmail.com',
    password: '12345678',
    keyPix: '123.456.789-10',
};

export default function MedicsEdit() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        convenio: false,
        procedimentos: false
    });

    const toggleMenu = (menu: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    return (
        <div className="mx-auto min-h-screen p-2 bg-[#FAFAFA]">
            <Button variant={'ghost'} onClick={() => router.push(`/businessConnect/gestao/medicos`)} className="text-[20px]">
                <ArrowLeft size={18} className="mr-2" />
                Detalhes do Profissional
            </Button>

            <div className="bg-[#FFFFFF] w-full mt-4">
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <img src={doctor.avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
                        <div className="flex flex-col">
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">{doctor.name}</h1>
                                <p className="bg-[#EBEBEC] text-[14px] font-semibold px-3 flex items-center">{doctor.specialty}</p>
                            </div>
                            <div className="mt-2 flex gap-4">
                                <p className="text-[12px]">{doctor.room}</p>
                                <p className="text-[12px]">{doctor.plan}</p>
                                <p className="text-[12px]">{doctor.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="relative w-full">
                            <span className="text-[14px]">Chave PIX</span>
                            <div className="flex items-center">
                                <Input
                                    placeholder="Nome completo"
                                    className="mb-6 pr-10"
                                    value={doctor.keyPix}
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    onClick={() => handleCopy(doctor.keyPix)}
                                >
                                    <ClipboardCopy size={20} />
                                </button>
                            </div>
                            {copied && <span className="text-green-500 text-sm">Copiado!</span>}
                        </div>

                        <div className="relative w-full">
                            <span className="text-[14px]">Senha</span>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="w-full p-2 pr-10 border rounded-md"
                                    value={doctor.password}
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] flex flex-wrap w-full mt-6 p-4">
                <button
                    onClick={() => toggleMenu('convenio')}
                    className={`flex items-center justify-between w-full text-xl font-semibold ${openMenus.convenio ? 'border-b pb-2 border-[#666870]' : ''}`}
                >
                    <span className="text-[#666870] text-[16px]">Convenio</span>
                    {openMenus.convenio ? (
                        <FaChevronUp className="text-[#666870]" />
                    ) : (
                        <FaChevronDown className="text-[#666870]" />
                    )}
                </button>

                {openMenus.convenio && (
                    <div className="flex flex-wrap w-full mt-4">
                        <div className="flex items-center gap-4 w-1/3 mb-4">
                            <img src="/logoConvenio.png" alt="logoConvenio" className="w-20 h-20 shadow rounded-full" />
                            <h1>Unimed</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-4">
                            <img src="/logoConvenio.png" alt="logoConvenio" className="w-20 h-20 shadow rounded-full" />
                            <h1>Unimed</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-4">
                            <img src="/logoConvenio.png" alt="logoConvenio" className="w-20 h-20 shadow rounded-full" />
                            <h1>Unimed</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-4">
                            <img src="/logoConvenio.png" alt="logoConvenio" className="w-20 h-20 shadow rounded-full" />
                            <h1>Unimed</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-4">
                            <img src="/logoConvenio.png" alt="logoConvenio" className="w-20 h-20 shadow rounded-full" />
                            <h1>Unimed</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-4">
                            <img src="/logoConvenio.png" alt="logoConvenio" className="w-20 h-20 shadow rounded-full" />
                            <h1>Unimed</h1>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-[#FFFFFF] flex flex-wrap w-full mt-6 p-4">
                <button
                    onClick={() => toggleMenu('procedimentos')}
                    className={`flex items-center justify-between w-full text-xl font-semibold ${openMenus.procedimentos ? 'border-b pb-2 border-[#666870]' : ''}`}
                >
                    <span className="text-[#666870] text-[16px]">Procedimentos</span>
                    {openMenus.procedimentos ? (
                        <FaChevronUp className="text-[#666870]" />
                    ) : (
                        <FaChevronDown className="text-[#666870]" />
                    )}
                </button>

                {openMenus.procedimentos && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
                        <div className="flex flex-col items-start border rounded gap-4">
                            <div className="flex items-center justify-between w-full p-4">
                                <h1 className="text-[#1E1E1E] font-semibold">Drenagem linfática</h1>
                                <h1>R$380.00</h1>
                            </div>
                            <p className="p-4 text-[14px] text-[#1E1E1E]">Técnica de massagem capaz de estimular o sistema linfático a trabalhar de modo acelerado. A função principal desse procedimento é agilizar o processo de retirada dos resíduos e líquidos metabólicos que ficam acumulados entre as células.</p>
                        </div>
                        <div className="flex flex-col items-start border rounded gap-4">
                            <div className="flex items-center justify-between w-full p-4">
                                <h1 className="text-[#1E1E1E] font-semibold">Drenagem linfática</h1>
                                <h1>R$380.00</h1>
                            </div>
                            <p className="p-4 text-[14px] text-[#1E1E1E]">Técnica de massagem capaz de estimular o sistema linfático a trabalhar de modo acelerado. A função principal desse procedimento é agilizar o processo de retirada dos resíduos e líquidos metabólicos que ficam acumulados entre as células.</p>
                        </div>
                        <div className="flex flex-col items-start border rounded gap-4">
                            <div className="flex items-center justify-between w-full p-4">
                                <h1 className="text-[#1E1E1E] font-semibold">Drenagem linfática</h1>
                                <h1>R$380.00</h1>
                            </div>
                            <p className="p-4 text-[14px] text-[#1E1E1E]">Técnica de massagem capaz de estimular o sistema linfático a trabalhar de modo acelerado. A função principal desse procedimento é agilizar o processo de retirada dos resíduos e líquidos metabólicos que ficam acumulados entre as células.</p>
                        </div>
                        <div className="flex flex-col items-start border rounded gap-4">
                            <div className="flex items-center justify-between w-full p-4">
                                <h1 className="text-[#1E1E1E] font-semibold">Drenagem linfática</h1>
                                <h1>R$380.00</h1>
                            </div>
                            <p className="p-4 text-[14px] text-[#1E1E1E]">Técnica de massagem capaz de estimular o sistema linfático a trabalhar de modo acelerado. A função principal desse procedimento é agilizar o processo de retirada dos resíduos e líquidos metabólicos que ficam acumulados entre as células.</p>
                        </div>
                        <div className="flex flex-col items-start border rounded gap-4">
                            <div className="flex items-center justify-between w-full p-4">
                                <h1 className="text-[#1E1E1E] font-semibold">Drenagem linfática</h1>
                                <h1>R$380.00</h1>
                            </div>
                            <p className="p-4 text-[14px] text-[#1E1E1E]">Técnica de massagem capaz de estimular o sistema linfático a trabalhar de modo acelerado. A função principal desse procedimento é agilizar o processo de retirada dos resíduos e líquidos metabólicos que ficam acumulados entre as células.</p>
                        </div>
                        <div className="flex flex-col items-start border rounded gap-4">
                            <div className="flex items-center justify-between w-full p-4">
                                <h1 className="text-[#1E1E1E] font-semibold">Drenagem linfática</h1>
                                <h1>R$380.00</h1>
                            </div>
                            <p className="p-4 text-[14px] text-[#1E1E1E]">Técnica de massagem capaz de estimular o sistema linfático a trabalhar de modo acelerado. A função principal desse procedimento é agilizar o processo de retirada dos resíduos e líquidos metabólicos que ficam acumulados entre as células.</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}
