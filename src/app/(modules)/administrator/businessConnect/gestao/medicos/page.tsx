'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, Upload, Check, EyeOff, Eye } from 'lucide-react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Dialog, DialogTitle, DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import React from 'react';

const doctors = Array(3).fill({
    index: 1,
    name: 'Maria Elisângela dos Santos',
    specialty: 'Cardiologia',
    plan: 'Convênio/Particular',
    room: 'Sala 203',
    avatar: '/icone-perfil.jpg',
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

export default function MedicosList() {
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const router = useRouter();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const [descricao, setDescricao] = useState('');
    const [descricaoCount, setDescricaoCount] = useState(0);

    const handleDescricaoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newDescricao = e.target.value;
        if (newDescricao.length <= 300) {
            setDescricao(newDescricao);
            setDescricaoCount(newDescricao.length);
        }
    };

    return (
        <div className="mx-auto min-h-screen p-4 bg-[#FAFAFA] flex flex-col">
            <div className="flex justify-between py-4">
                <h1 className="text-xl flex items-center font-bold">Gestão de Médicos</h1>
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
                    <Button className="bg-black text-white" onClick={() => setIsModalOpen(true)}>
                        + Novo Médico
                    </Button>
                </div>
            </div>

            <div className="flex flex-col flex-grow">
                <div className="flex-grow bg-[#FAFAFA] rounded-lg overflow-y-auto">
                    {doctors.map((doctor, index) => (
                        <Card key={index} className="border-b mb-4">
                            <CardContent
                                className="flex items-center p-4 gap-4 cursor-pointer"
                                onClick={() => router.push(`/administrator/businessConnect/gestao/medicos/edit`)}
                            >
                                <img src={doctor.avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
                                <div className="flex-1">
                                    <p className="font-semibold">{doctor.name}</p>
                                    <p className="text-sm text-gray-500">{doctor.specialty} • {doctor.plan} • {doctor.room}</p>
                                </div>
                                <Button variant="outline">
                                    Detalhes
                                </Button>
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

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Cadastro de Profissional</DialogTitle>

                    <div className="flex justify-between border rounded p-6 gap-4 my-4">
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-black ${step >= 2 ? "bg-black text-white" : "text-black"
                                    }`}
                            >
                                {step >= 2 ? <Check size={16} /> : "1"}
                            </div>
                            <label>Informações Pessoais</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step === 2 ? "border-black" : ""}`}
                            >
                                2
                            </div>
                            <label>Resumo Profissional</label>
                        </div>
                    </div>

                    {step === 1 && (
                        <div>
                            <span className='text-[14px]'>Nome completo <span className='text-[red]'>*</span></span>
                            <Input placeholder="Nome completo" className="mb-6 mt-2" />

                            <span className='text-[14px]'>E-mail <span className='text-[red]'>*</span></span>
                            <Input placeholder="E-mail" className="mb-6 mt-2" />

                            <span className='text-[14px]'>
                                Senha <span className='text-[red]'>*</span>
                            </span>
                            <div className="relative mt-2">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="mb-6 pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <span className='text-[14px]'>Chave PIX <span className='text-[red]'>*</span></span>
                            <Input placeholder="Chave PIX" className="mb-6 mt-2" />

                            <span className='text-[14px]'>Número da sala <span className='text-[red]'>*</span></span>
                            <Input placeholder="Número da sala" className="mb-6 mt-2" />

                            <span className='text-[14px]'>Foto do Profissional <span className='text-[red]'>*</span></span>
                            <div className="flex flex-col items-center">
                                <label
                                    htmlFor="fileUpload"
                                    className="cursor-pointer mt-2 flex w-full items-center justify-center gap-2 bg-[#FAFAFA] px-4 py-2 rounded-lg border border-black border-dashed hover:bg-gray-300 transition"
                                >
                                    <Upload size={18} />
                                    {selectedFile ? selectedFile.name : "Clique para efetuar o upload!"}
                                </label>
                                <input
                                    id="fileUpload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="flex items-center justify-end gap-4 mt-4">
                                <Button onClick={() => setIsModalOpen(false)} variant="outline" className="w-50%">Cancelar</Button>
                                <Button onClick={() => setStep(2)} className="w-50%">Próximo</Button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <span className="text-[14px]">
                                Especialidade e Convênio <span className="text-[red]">*</span>
                            </span>
                            <Input placeholder="Especialidade e Convênio" className="mb-6 mt-2" />

                            <span className="text-[14px]">Preencha abaixo o que o profissional efetua:</span>

                            <Disclosure>
                                {({ open }) => (
                                    <div className="flex flex-col items-start w-full px-4 py-2 mb-6 mt-2 border border-gray-300 rounded-md text-left text-black">
                                        <Disclosure.Button
                                            className={`flex w-full items-center justify-between ${open ? "pb-2 border-b border-gray-300" : ""}`}
                                        >
                                            <span>Consulta</span>
                                            {open ? <FaChevronUp /> : <FaChevronDown />}
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="mt-4 w-full">
                                            <span className="text-[14px]">Tempo de atendimento (por convênio)</span>
                                            <Input placeholder="Tempo de atendimento (por convênio)" className="mb-6 mt-2 w-full" />
                                            <span className="text-[14px]">Tempo de atendimento (particular)</span>
                                            <Input placeholder="Tempo de atendimento (particular)" className="mb-6 mt-2" />
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>

                            <Disclosure>
                                {({ open }) => (
                                    <div className="flex flex-col items-start w-full px-4 py-2 mb-6 border border-gray-300 rounded-md text-left text-black">
                                        <Disclosure.Button
                                            className={`flex w-full items-center justify-between ${open ? "pb-2 border-b border-gray-300" : ""}`}
                                        >
                                            <span>Exame</span>
                                            {open ? <FaChevronUp /> : <FaChevronDown />}
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="mt-4 w-full">
                                            <span className="text-[14px]">Tempo de atendimento (por convênio)</span>
                                            <Input placeholder="Tempo de atendimento (por convênio)" className="mb-6 mt-2" />
                                            <span className="text-[14px]">Tempo de atendimento (particular)</span>
                                            <Input placeholder="Tempo de atendimento (particular)" className="mb-6 mt-2" />
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>

                            <Disclosure>
                                {({ open }) => (
                                    <div className="flex flex-col items-start w-full px-4 py-2 mb-6 border border-gray-300 rounded-md text-left text-black">
                                        <Disclosure.Button
                                            className={`flex w-full items-center justify-between ${open ? "pb-2 border-b border-gray-300" : ""}`}
                                        >
                                            <span>Procedimento</span>
                                            {open ? <FaChevronUp /> : <FaChevronDown />}
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="mt-4 w-full">
                                            <span className="text-[14px]">Adicionar procedimento</span>
                                            <Input placeholder="Nome do procedimento" className="mb-6 mt-2" />
                                            <Input placeholder="Tempo de atendimento" className="mb-6 mt-2" />
                                            <Input placeholder="Valor" className="mb-6 mt-2" />
                                            <div className="mb-6">
                                                <textarea
                                                    placeholder="Descrição"
                                                    value={descricao}
                                                    onChange={handleDescricaoChange}
                                                    className="w-full text-[15px] p-2 border border-gray-300 rounded-md"
                                                    maxLength={300}
                                                />
                                                <div className="text-sm text-gray-500 mt-1">
                                                    {descricaoCount}/300 caracteres
                                                </div>
                                            </div>
                                            <Button variant={'ghost'} >+ Adicionar Procedimento</Button>
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>

                            <div className="flex items-center justify-end gap-4 mt-4">
                                <Button onClick={() => setStep(1)} variant="outline" className="mr-2 w-50%">Voltar</Button>
                                <Button className="bg-black text-white w-50%">Confirmar Cadastro</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
