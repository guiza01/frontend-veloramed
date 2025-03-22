"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search } from "lucide-react";
import { HiOutlinePencil } from "react-icons/hi2";
import React from "react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const consultas = Array(5).fill({
    name: 'Nutrição',
    valueOferted: 'R$300.00',
    valueMedic: 'R$200.00',
    valueClinic: 'R$100.00',
});

const exames = Array(5).fill({
    name: 'Bioimpedância',
    valueOferted: 'R$300.00',
    valueMedic: 'R$200.00',
    valueClinic: 'R$100.00',
});

const procedimentos = Array(5).fill({
    name: 'Acupuntura',
    valueOferted: 'R$300.00',
    valueMedic: 'R$200.00',
    valueClinic: 'R$100.00',
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

export default function TabelaDePrecos() {
    const [search, setSearch] = useState('');
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("option-one");
    const [selectedCategory, setSelectedCategory] = useState<'consultas' | 'exames' | 'procedimentos'>('consultas');

    const data = selectedCategory === 'consultas' ? consultas
        : selectedCategory === 'exames' ? exames
            : procedimentos;

    const handleNextStep = () => {
        if (selectedOption === "option-one") {
            setSelectedOption("option-two");
        } else if (selectedOption === "option-two") {
            setSelectedOption("option-three");
        }
    };

    return (
        <div className="mx-auto min-h-screen p-4 bg-[#FAFAFA] flex flex-col">
            <div className="flex justify-between py-4">
                <h1 className="text-xl flex items-center font-bold">Cadastro de Tabela de Valores</h1>
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
                    <Button className="bg-black text-white" onClick={() => setIsModalCreateOpen(true)}>
                        + Nova tabela
                    </Button>
                </div>
            </div>

            <div className="gap-1 py-4">
                <Button
                    className={`mr-2 ${selectedCategory === "consultas"
                        ? "bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]"
                        : "bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]"
                        }`}
                    onClick={() => setSelectedCategory("consultas")}
                >
                    Consultas
                </Button>
                <Button
                    className={`mr-2 ${selectedCategory === "exames"
                        ? "bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]"
                        : "bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]"
                        }`}
                    onClick={() => setSelectedCategory("exames")}
                >
                    Exames
                </Button>
                <Button
                    className={`${selectedCategory === "procedimentos"
                        ? "bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]"
                        : "bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]"
                        }`}
                    onClick={() => setSelectedCategory("procedimentos")}
                >
                    Procedimentos
                </Button>
            </div>

            <div className="flex flex-col flex-grow">
                <div className="flex-grow bg-[#FAFAFA] rounded-lg overflow-y-auto">
                    {data.map((service, index) => (
                        <Card key={index} className="border-b mb-4">
                            <CardContent className="flex items-center justify-between p-4 gap-4">
                                <div className="flex flex-col">
                                    <p className="font-semibold mb-4">{service.name}</p>
                                    <div className="flex gap-4">
                                        <div className="flex gap-4">
                                            <p className="text-sm text-black">{service.valueOferted}</p>
                                            <p className="text-sm text-gray-500">Valor ofertado</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p className="text-sm text-black">{service.valueMedic}</p>
                                            <p className="text-sm text-gray-500">Valor de repasse para o médico</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p className="text-sm text-black">{service.valueClinic}</p>
                                            <p className="text-sm text-gray-500">Valor a ser recebido pela clínica</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gap-4">
                                    <Button variant="ghost" onClick={() => setIsModalEditOpen(true)}>
                                        <HiOutlinePencil />
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="ghost">
                                                <FiTrash2 />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Esta ação não pode ser desfeita. Isso excluirá permanentemente o item.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                <AlertDialogAction>Excluir</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="overflow-x-auto mt-auto">
                    <Pagination className="w-full mt-4">
                        <PaginationContent className="flex w-full justify-between bg-white rounded-md py-2">
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <div className="flex">
                                <PaginationItem>
                                    <PaginationLink href="#" isActive className="bg-[#2955D9] text-xs rounded-[8px]">
                                        <span className="text-white">1</span>
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink className="text-xs" href="#">
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink className="text-xs" href="#">
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis className="text-xs" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink className="text-xs" href="#">
                                        8
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink className="text-xs" href="#">
                                        9
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink className="text-xs" href="#">
                                        10
                                    </PaginationLink>
                                </PaginationItem>
                            </div>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>

            <Dialog open={isModalCreateOpen} onOpenChange={setIsModalCreateOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Cadastro de Serviço</DialogTitle>

                    <div>
                        <RadioGroup
                            value={selectedOption}
                            onValueChange={setSelectedOption}
                            className="flex space-x-4"
                        >
                            <div
                                className={`flex items-center space-x-2 ${selectedOption === "option-one" ? "p-2 rounded bg-[#ECF2FF]" : ""}`}
                            >
                                <RadioGroupItem
                                    value="option-one"
                                    id="option-one"
                                    className={`peer ${selectedOption === "option-one" ? "text-[#2955D9]" : ""}`}
                                />
                                <Label htmlFor="option-one" className={`${selectedOption === "option-one" ? "text-[#2955D9]" : ""}`}>
                                    Consulta
                                </Label>
                            </div>
                            <div
                                className={`flex items-center space-x-2 ${selectedOption === "option-two" ? "p-2 rounded bg-[#ECF2FF]" : ""}`}
                            >
                                <RadioGroupItem
                                    value="option-two"
                                    id="option-two"
                                    className={`peer ${selectedOption === "option-two" ? "text-[#2955D9]" : ""}`}
                                />
                                <Label htmlFor="option-two" className={`${selectedOption === "option-two" ? "text-[#2955D9]" : ""}`}>
                                    Exame
                                </Label>
                            </div>
                            <div
                                className={`flex items-center space-x-2 ${selectedOption === "option-three" ? "p-2 rounded bg-[#ECF2FF]" : ""}`}
                            >
                                <RadioGroupItem
                                    value="option-three"
                                    id="option-three"
                                    className={`peer ${selectedOption === "option-three" ? "text-[#2955D9]" : ""}`}
                                />
                                <Label htmlFor="option-three" className={`${selectedOption === "option-three" ? "text-[#2955D9]" : ""}`}>
                                    Procedimento
                                </Label>
                            </div>
                        </RadioGroup>

                        <div className="mt-4 rounded-lg">
                            {selectedOption === "option-one" && (
                                <div>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <p className="text-[14px] mb-2">Especialidade <span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor ofertado do serviço<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor de repasse para o médico<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor a ser recebido pela clínica<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end mt-6">
                                        <Button variant="ghost" onClick={() => setIsModalCreateOpen(false)}>Cancelar</Button>
                                        <Button onClick={handleNextStep}>Confirmar Cadastro</Button>
                                    </div>
                                </div>
                            )}

                            {selectedOption === "option-two" && (
                                <div>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <p className="text-[14px] mb-2">Exame <span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor ofertado do serviço<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor de repasse para o médico<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor a ser recebido pela clínica<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end mt-6">
                                        <Button variant="ghost" onClick={() => setIsModalCreateOpen(false)}>Cancelar</Button>
                                        <Button onClick={handleNextStep}>Confirmar Cadastro</Button>
                                    </div>
                                </div>
                            )}

                            {selectedOption === "option-three" && (
                                <div>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <p className="text-[14px] mb-2">Procedimento <span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor ofertado do serviço<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor de repasse para o médico<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] mb-2">Valor a ser recebido pela clínica<span className="text-[red]">*</span></p>
                                            <Input placeholder="Digite aqui" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end mt-6">
                                        <Button variant="ghost" onClick={() => setIsModalCreateOpen(false)}>Cancelar</Button>
                                        <Button>Confirmar Cadastro</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </DialogContent>
            </Dialog>

            <Dialog open={isModalEditOpen} onOpenChange={setIsModalEditOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Edição de Cadastro</DialogTitle>

                    <div>
                        <div className="mt-4 rounded-lg">
                            <div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <p className="text-[14px]">Especialidade <span className="text-[red]">*</span></p>
                                        <Input placeholder="Digite aqui" />
                                    </div>
                                    <div>
                                        <p className="text-[14px]">Valor ofertado do serviço<span className="text-[red]">*</span></p>
                                        <Input placeholder="Digite aqui" />
                                    </div>
                                    <div>
                                        <p className="text-[14px]">Valor de repasse para o médico<span className="text-[red]">*</span></p>
                                        <Input placeholder="Digite aqui" />
                                    </div>
                                    <div>
                                        <p className="text-[14px]">Valor a ser recebido pela clínica<span className="text-[red]">*</span></p>
                                        <Input placeholder="Digite aqui" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end mt-6">
                                    <Button variant="ghost" onClick={() => setIsModalCreateOpen(false)}>Cancelar</Button>
                                    <Button onClick={handleNextStep}>Confirmar Cadastro</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>

        </div>
    );
}