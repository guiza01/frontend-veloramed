"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

const convenios = [
    {
        name: 'Unimed',
        content: 'Consulta/Exame/Procedimento',
        avatar: '/logoConvenio.png',
    },
    {
        name: 'Amil',
        content: 'Consulta e Internação',
        avatar: '/logoConvenio.png',
    },
    {
        name: 'Bradesco Saúde',
        content: 'Exames e Procedimentos',
        avatar: '/logoConvenio.png',
    },
    {
        name: 'SulAmérica',
        content: 'Atendimento Completo',
        avatar: '/logoConvenio.png',
    }
];

type PaginationItemProps = {
    isActive?: boolean;
    children: React.ReactNode;
} & React.HTMLProps<HTMLLIElement>;

const PaginationItem = ({ isActive, children, ...props }: PaginationItemProps) => (
    <li {...props} className={`px-3 py-2 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'text-gray-500'}`}>
        {children}
    </li>
);

export default function ConveriosList() {
    const [search, setSearch] = useState('');
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const router = useRouter();

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
            <div className="flex justify-between py-4">
                <h1 className="text-xl flex items-center font-bold">Cadastro de Convênios</h1>
                <div className="flex items-center gap-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        <Input
                            type="text"
                            placeholder="Buscar"
                            className="pl-10"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Button variant="outline">
                        <Filter size={18} /> Filtrar
                    </Button>
                    <Button className="bg-black text-white" onClick={() => setIsModalCreateOpen(true)}>
                        + Novo Convênio
                    </Button>
                </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-lg">
                {convenios.map((convenio, index) => (
                    <Card key={index} className="border-b mb-4">
                        <CardContent className="flex items-center p-4 gap-4">
                            <img src={convenio.avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
                            <div className="flex-1">
                                <p className="font-semibold">{convenio.name}</p>
                                <p className="text-sm text-gray-500">{convenio.content}</p>
                            </div>
                            <Button variant="outline" onClick={() => router.push(`/administrator/businessConnect/cadastro/convenios/edit`)}>Detalhes</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="bg-[#FFFFFF] shadow flex justify-between items-center p-4 mt-4">
                <PaginationPrevious className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                    <ChevronLeft size={18} className="mr-2" />
                    Anterior
                </PaginationPrevious>

                <Pagination className="flex space-x-2">
                    <PaginationContent>
                        {[1, 2, '...', 9, 10].map((num, idx) => (
                            <React.Fragment key={idx}>
                                {num === '...' ? (
                                    <PaginationEllipsis />
                                ) : (
                                    <PaginationItem
                                        isActive={num === 1}
                                        className={`px-3 py-1 rounded-full text-center cursor-pointer ${num === 1 ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {num}
                                    </PaginationItem>
                                )}
                            </React.Fragment>
                        ))}
                    </PaginationContent>
                </Pagination>

                <PaginationNext className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                    Próximo
                    <ChevronRight size={18} className="ml-2" />
                </PaginationNext>
            </div>

            <Dialog open={isModalCreateOpen} onOpenChange={setIsModalCreateOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Cadastro de Convênio</DialogTitle>
                    <div>
                        <div>
                            <span className="text-[14px]">
                                Selecione o convênio <span className="text-[red]">*</span>
                            </span>
                            <Select>
                                <SelectTrigger className="w-full mb-6">
                                    <SelectValue placeholder="Selecione um convênio" />
                                </SelectTrigger>
                                <SelectContent>
                                    {convenios.map((convenio) => (
                                        <SelectItem key={convenio.name} value={convenio.name}>{convenio.name}</SelectItem>
                                    ))}
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
                            <Button variant="outline" className="w-50%" onClick={prevStep}>Voltar</Button>
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