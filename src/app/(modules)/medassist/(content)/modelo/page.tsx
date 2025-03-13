"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaginationPrevious, Pagination, PaginationContent, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Edit, Plus, Search, Trash } from "lucide-react";
import React from "react";
import { useState } from "react";

const patients = Array(5).fill({
    name: 'Nome do paciente',
    email: 'exemplo@email.com',
    cpf: '000.000.000-00',
    convenio: 'Unimed',
    date: '02/08/2000',
    number: '(00) 00000-0000',
    lastConsult: '19/11/2024',
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
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<'anamnese' | 'prescricoes' | 'solicitacoes'>('anamnese');
    const [selectedOption, setSelectedOption] = useState("option-one");

    return (
        <div className="mx-auto p-4 bg-[#FAFAFA]">
            <div className="flex justify-between py-4">
                <div className="gap-1">
                    <Button
                        className={`mr-2 ${selectedCategory === 'anamnese'
                            ? 'bg-[#DEEAFF] text-[#2955D9]'
                            : 'bg-white text-black border border-gray-300 hover:bg-[#DEEAFF] hover:text-[#2955D9]'
                            }`}
                        onClick={() => setSelectedCategory('anamnese')}
                    >
                        Anamnese
                    </Button>
                    <Button
                        className={`mr-2 ${selectedCategory === 'prescricoes'
                            ? 'bg-[#DEEAFF] text-[#2955D9]'
                            : 'bg-white text-black border border-gray-300 hover:bg-[#DEEAFF] hover:text-[#2955D9]'
                            }`}
                        onClick={() => setSelectedCategory('prescricoes')}
                    >
                        Prescrições
                    </Button>
                    <Button
                        className={`${selectedCategory === 'solicitacoes'
                            ? 'bg-[#DEEAFF] text-[#2955D9]'
                            : 'bg-white text-black border border-gray-300 hover:bg-[#DEEAFF] hover:text-[#2955D9]'
                            }`}
                        onClick={() => setSelectedCategory('solicitacoes')}
                    >
                        Solicitações de exame
                    </Button>
                </div>
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
                    <Button onClick={() => setIsModalCreateOpen(true)}>
                        <Plus />
                        Novo modelo
                    </Button>
                </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-lg">
                {patients.map((patient, index) => (
                    <Card key={index} className="border-b mb-4">
                        <CardContent className="flex items-center p-4 gap-4">
                            <div className="flex-1">
                                <p className="font-semibold">{patient.name}</p>
                            </div>
                            <Button variant="ghost" onClick={() => setIsModalEditOpen(true)}>
                                <Edit />
                            </Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="ghost">
                                        <Trash />
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
                <DialogContent
                    className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto w-[700px] max-w-3xl"
                >
                    <DialogTitle className="text-lg font-semibold mb-4">Novo modelo</DialogTitle>
                    <div className="gap-4">
                        <div>
                            <h1 className="mt-2 mb-4 text-[16px]">Escolha o tipo de modelo que deseja criar:</h1>
                            <RadioGroup
                                value={selectedOption}
                                onValueChange={setSelectedOption}
                                className="flex space-x-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Anamnese</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">Exame</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-three" id="option-three" />
                                    <Label htmlFor="option-three">Prescrição</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-[14px]">Descrição do modelo <span className="text-[red]">*</span></h1>
                            <Textarea placeholder="Escreva aqui a descrição do serviço." />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 justify-end">
                        <Button variant={'ghost'} onClick={() => setIsModalCreateOpen(false)}>Cancelar</Button>
                        <Button>Salvar</Button>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={isModalEditOpen} onOpenChange={setIsModalEditOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                    <DialogContent
                        className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto w-[700px] max-w-3xl"
                    >
                        <DialogTitle className="text-lg font-semibold mb-4">Editar modelo</DialogTitle>
                        <div className="gap-4">
                            <div className="">
                                <h1 className="text-[14px]">Descrição do modelo <span className="text-[red]">*</span></h1>
                                <Textarea placeholder="Escreva aqui a descrição do serviço." />
                            </div>
                        </div>
                        <div className="flex items-center mt-4 justify-end">
                            <Button variant={'ghost'} onClick={() => setIsModalEditOpen(false)}>Cancelar</Button>
                            <Button>Salvar alterações</Button>
                        </div>
                    </DialogContent>
            </Dialog>

        </div>
    );
}