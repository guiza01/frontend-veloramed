"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PaginationPrevious, Pagination, PaginationContent, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { ArrowLeft, ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

const doctors = Array(5).fill({
    index: 1,
    name: 'Maria Elisângela dos Santos',
    specialty: 'Endocrinologia',
    convenio: 'Unimed',
    tipeService: 'Consulta',
    date: 'Ultima consulta: 12/12/2023',
    dateTime: '12/12/2023 às 12:12',
    plan: 'Convênio/Particular: Unimed',
    value: 'R$350,00',
});

type PaginationItemProps = {
    isActive?: boolean;
    children: React.ReactNode;
} & React.HTMLProps<HTMLLIElement>;

const PaginationItem = ({ isActive, children, ...props }: PaginationItemProps) => (
    <li {...props} className={`px-3 py-2 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'text-gray-500'}`}>
        {children}
    </li>
);

export default function HistoricoPaciente() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="mx-auto p-4 bg-[#FAFAFA]">
            <div className="flex justify-between py-4">
                <Button variant={'ghost'} onClick={() => router.push("/medassist/dashboard")}>
                    <ArrowLeft size={18} />
                    <h1 className="text-[20px]">Histórico de atendimentos</h1>
                </Button>
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
                </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-lg">
                {doctors.map((doctor, index) => (
                    <Card key={index} className="border-b mb-4">
                        <CardContent className="flex items-center p-4 gap-4">
                            <div className="flex-1">
                                <p className="font-semibold">{doctor.name}</p>
                                <p className="text-sm mt-2 text-gray-500">{doctor.date} | {doctor.plan} | {doctor.value}</p>
                            </div>
                            <Button variant="outline" onClick={() => setIsModalOpen(true)}>Detalhes</Button>
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

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                {doctors.map((doctor, index) => (
                    <DialogContent key={index} className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                        <DialogTitle className="text-lg font-semibold mb-4">Detalhes do Agendamento</DialogTitle>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h1 className="text-[#4D5056] text-[16px]">Nome</h1>
                                <h1 className="mt-2 text-[20px]">{doctor.name}</h1>
                            </div><div>
                                <h1 className="text-[#4D5056]">Especialidade</h1>
                                <h1 className="mt-2 text-[20px]">{doctor.specialty}</h1>
                            </div><div>
                                <h1 className="text-[#4D5056]">Tipo de Atendimento</h1>
                                <h1 className="mt-2 text-[20px]">{doctor.convenio}</h1>
                            </div><div>
                                <h1 className="text-[#4D5056]">Tipo de Serviço</h1>
                                <h1 className="mt-2 text-[20px]">{doctor.tipeService}</h1>
                            </div><div>
                                <h1 className="text-[#4D5056]">Valor</h1>
                                <h1 className="mt-2 text-[20px]">{doctor.value}</h1>
                            </div><div>
                                <h1 className="text-[#4D5056]">Data e Hora</h1>
                                <h1 className="mt-2 text-[20px]">{doctor.dateTime}</h1>
                            </div>
                        </div>
                        <div className="flex items-center mt-4 justify-end">
                            <Button onClick={() => setIsModalOpen(false)}>
                                Fechar
                            </Button>
                        </div>
                    </DialogContent>
                ))}
            </Dialog>

        </div>
    );
}