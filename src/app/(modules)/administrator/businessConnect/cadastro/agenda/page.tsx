"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search } from "lucide-react";
import React from "react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi2";

const profissionais = Array(5).fill({
    name: 'Dra. Claúdia Fernandez',
    avatar: '/icone-perfil.jpg'
});

const equipamentos = Array(5).fill({
    name: 'Máquina de Raio-X',
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
    const [selectedCategory, setSelectedCategory] = useState<'profissionais' | 'equipamentos' | 'procedimentos'>('profissionais');

    const data = selectedCategory === 'profissionais' ? profissionais
        : selectedCategory === 'equipamentos' ? equipamentos
            : procedimentos;


    return (
        <div className="mx-auto min-h-screen p-4 bg-[#FAFAFA] flex flex-col">
            <div className="flex justify-between py-4">
                <h1 className="text-xl flex items-center font-bold">Cadastro de Agenda</h1>
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
                        + Nova disponibilidade
                    </Button>
                </div>
            </div>

            <div className="gap-1 py-4">
                <Button
                    className={`mr-2 ${selectedCategory === 'profissionais'
                        ? 'bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('profissionais')}
                >
                    Profissional
                </Button>
                <Button
                    className={`mr-2 ${selectedCategory === 'equipamentos'
                        ? 'bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('equipamentos')}
                >
                    Equipamento
                </Button>
                <Button
                    className={`${selectedCategory === 'procedimentos'
                        ? 'bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('procedimentos')}
                >
                    Procedimentos
                </Button>
            </div>

            <div className="bg-[#FAFAFA] rounded-lg flex-grow">
                {data.map((object, index) => (
                    <Card key={index} className="border-b mb-4">
                        <CardContent className="flex items-center justify-between p-4 gap-4">
                            <div className="flex items-center gap-4">
                                {selectedCategory === "profissionais" && (
                                    <img src={object.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                                )}
                                <p className="font-semibold">{object.name}</p>
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

            <Dialog open={isModalCreateOpen} onOpenChange={setIsModalCreateOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Cadastro de Disponibilidade</DialogTitle>

                    <div>
                        <RadioGroup
                            className="flex space-x-4"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="profissionais" id="profissionais" />
                                <Label htmlFor="profissionais">Profissional</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="equipamentos" id="equipamentos" />
                                <Label htmlFor="equipamentos">Equipamento</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="procedimentos" id="procedimentos" />
                                <Label htmlFor="procedimentos">Procedimentos</Label>
                            </div>
                        </RadioGroup>
                    </div>

                </DialogContent>
            </Dialog>

            <Dialog open={isModalEditOpen} onOpenChange={setIsModalEditOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Edição de Cadastro</DialogTitle>
                    {/* Aqui deve ser adicionado os componentes da edição */}
                </DialogContent>
            </Dialog>

        </div>
    );
}