"use client";

import { AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PaginationPrevious, Pagination, PaginationContent, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { ArrowLeft, ChevronLeft, ChevronRight, Edit, Eye, EyeOff, Filter, Search, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const attendants = Array(3).fill({
    name: 'Ana Julia Moraes ',
    email: 'anajuliamoraes28@gmail.com',
    password: '12345678',
    recepcao: 'Cardiologia',
    avatar: '/atendente.png',
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
    const [showPassword, setShowPassword] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

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
                {attendants.map((attendat, index) => {
                    return (
                        <Card key={index} className="border-b mb-4">
                            <CardContent className="flex items-center justify-between p-4 gap-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={attendat.avatar}
                                        alt="Avatar"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <p className="font-semibold">{attendat.name}</p>
                                </div>
                                <p className="text-sm text-gray-500">{attendat.email}</p>
                                <p className="text-sm text-gray-500">{attendat.recepcao}</p>
                                <button onClick={toggleDetails} className="text-blue-500">
                                    {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                                </button>
                            </CardContent>
                            {isOpen && (
                                <div className="flex items-center justify-between p-4">
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <label className="text-[14px] font-semibold">
                                            Senha
                                        </label>
                                        <div className="flex items-center">
                                            <span className="mr-2 text-[14px] text-gray-500">{showPassword ? attendat.password : '●●●●●●●●'}</span>
                                            <button
                                                type="button"
                                                className="text-gray-500"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button
                                            type="button"
                                            className="text-[#1E1E1E] hover:text-blue-700"
                                        >
                                            <Edit size={20} />
                                        </button>

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
                                    </div>
                                </div>
                            )}
                        </Card>
                    );
                })}
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

        </div>
    );
}