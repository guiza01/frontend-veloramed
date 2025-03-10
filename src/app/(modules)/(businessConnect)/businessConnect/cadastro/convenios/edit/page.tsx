"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, BriefcaseMedical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";

interface Convenio {
    name: string;
    content: string;
    avatar: string
}
const convenioUnimed: Convenio =
{
    name: 'Unimed',
    content: 'Consulta/Exame/Procedimento',
    avatar: '/logoConvenio.png',
};

export default function ConverioEdit() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const [selectedType, setSelectedType] = useState("Consulta");
    const [step, setStep] = useState<number>(1);

    const nextStep = () => {
        setStep((prevStep) => {
            if (prevStep === 1) {
                setSelectedType("Exame");
                return 2;
            }
            if (prevStep === 2) {
                setSelectedType("Procedimento");
                return 3;
            }
            return prevStep;
        });
    };

    const prevStep = () => {
        setStep((prevStep) => {
            if (prevStep === 3) {
                setSelectedType("Exame");
                return 2;
            }
            if (prevStep === 2) {
                setSelectedType("Consulta");
                return 1;
            }
            return prevStep;
        });
    };

    return (
        <div className="mx-auto min-h-screen p-4 bg-[#FAFAFA]">

            <Button variant={'ghost'} onClick={() => router.push(`/businessConnect/cadastro/convenios`)} className="text-[20px]">
                <ArrowLeft size={18} className="mr-2" />
                Detalhes do Convênio
            </Button>

            <div className="bg-[#FFFFFF] w-full mt-4">
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <img src={convenioUnimed.avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
                        <div className="flex flex-col">
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">{convenioUnimed.name}</h1>
                            </div>
                            <div className="mt-2 flex items-center gap-4">
                                <p><BriefcaseMedical className="w-6 h-6" /></p>
                                <p className="text-[12px]">{convenioUnimed.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] flex flex-wrap w-full mt-6 p-4">
                <button
                    onClick={() => toggleMenu('consultas')}
                    className={`flex items-center justify-between w-full text-xl font-semibold ${openMenus.consultas ? 'border-b pb-2 border-[#666870]' : ''}`}
                >
                    <span className="text-[#666870] text-[16px]">Consultas</span>
                    {openMenus.consultas ? (
                        <FaChevronUp className="text-[#666870]" />
                    ) : (
                        <FaChevronDown className="text-[#666870]" />
                    )}
                </button>

                {openMenus.consultas && (
                    <div className="flex flex-wrap w-full mt-4 px-2">
                        <div className="flex items-center gap-4 w-1/3 mb-8">
                            <h1>Pediatria</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-8">
                            <h1>Nutrição</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-8">
                            <h1>Geriatria</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-8">
                            <h1>Pediatria</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-8">
                            <h1>Nutrição</h1>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 mb-8">
                            <h1>Geriatria</h1>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-[#FFFFFF] flex flex-wrap w-full mt-6 p-4">
                <button
                    onClick={() => toggleMenu('exames')}
                    className={`flex items-center justify-between w-full text-xl font-semibold ${openMenus.exames ? 'border-b pb-2 border-[#666870]' : ''}`}
                >
                    <span className="text-[#666870] text-[16px]">Exames</span>
                    {openMenus.exames ? (
                        <FaChevronUp className="text-[#666870]" />
                    ) : (
                        <FaChevronDown className="text-[#666870]" />
                    )}
                </button>

                {openMenus.exames && (
                    <div className="flex flex-wrap w-full mt-4">
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Bioimpedância</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Bioimpedância</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Bioimpedância</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Bioimpedância</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Bioimpedância</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Bioimpedância</h1>
                            <h1>R$350.00</h1>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-[#FFFFFF] flex flex-wrap w-full mt-6 p-4">
                <button
                    onClick={() => toggleMenu('procedimento')}
                    className={`flex items-center justify-between w-full text-xl font-semibold ${openMenus.procedimento ? 'border-b pb-2 border-[#666870]' : ''}`}
                >
                    <span className="text-[#666870] text-[16px]">procedimento</span>
                    {openMenus.procedimento ? (
                        <FaChevronUp className="text-[#666870]" />
                    ) : (
                        <FaChevronDown className="text-[#666870]" />
                    )}
                </button>

                {openMenus.procedimento && (
                    <div className="flex flex-wrap w-full mt-4">
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Drenagem linfática</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Drenagem linfática</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Drenagem linfática</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Drenagem linfática</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Drenagem linfática</h1>
                            <h1>R$350.00</h1>
                        </div>
                        <div className="flex items-center justify-between px-2 gap-4 w-1/3 mb-8">
                            <h1>Drenagem linfática</h1>
                            <h1>R$350.00</h1>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-end p-6 gap-4">
                <Button variant={'ghost'}>Excluir</Button>
                <Button onClick={() => setIsModalOpen(true)}>Editar</Button>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Edição de Cadastro</DialogTitle>
                    <div>
                        <div>
                            <span className="text-[14px]">
                                Selecione o convênio <span className="text-[red]">*</span>
                            </span>
                            <Select defaultValue={convenioUnimed.name}>
                                <SelectTrigger className="w-full mb-6">
                                    <SelectValue placeholder="Selecione um convênio" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem key={convenioUnimed.name} value={convenioUnimed.name}>
                                        {convenioUnimed.name}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex gap-4 mb-4">
                            <Button onClick={() => setSelectedType("Consulta")} variant={selectedType === "Consulta" ? "default" : "outline"}>Consulta</Button>
                            <Button onClick={() => setSelectedType("Exame")} variant={selectedType === "Exame" ? "default" : "outline"}>Exame</Button>
                            <Button onClick={() => setSelectedType("Procedimento")} variant={selectedType === "Procedimento" ? "default" : "outline"}>Procedimento</Button>
                        </div>

                        {selectedType === "Consulta" && (
                            <div>
                                <span>Especialidade</span>
                                <Input placeholder="Digite aqui" />
                                <Button className="mt-2" variant={'ghost'}>
                                    <FaPlus />
                                    Adicionar especialidade
                                </Button>
                            </div>
                        )}

                        {selectedType === "Exame" && (
                            <div>
                                <span>Exame:</span>
                                <div className="flex gap-4 w-full">
                                    <Input placeholder="Digite aqui" />
                                    <Input placeholder="Valor" type="number" />
                                </div>
                                <Button className="mt-2" variant={'ghost'}>
                                    <FaPlus />
                                    Adicionar exame
                                </Button>
                            </div>
                        )}

                        {selectedType === "Procedimento" && (
                            <div>
                                <span>Procedimento:</span>
                                <div className="flex gap-4 w-full">
                                    <Input placeholder="Digite aqui" />
                                    <Input placeholder="Valor" type="number" />
                                </div>
                                <Button className="mt-2" variant={'ghost'}>
                                    <FaPlus />
                                    Adicionar procedimento
                                </Button>
                            </div>
                        )}

                        <div className="flex items-center justify-end gap-4 mt-4">
                            <Button variant="outline" className="w-50%" onClick={prevStep}>
                                {step === 1 ? "Cancelar" : "Voltar"}
                            </Button>
                            <Button onClick={nextStep} className="w-50%">
                                {step === 3 ? "Confirmar Cadastro" : "Próximo"}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    );
}