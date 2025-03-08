"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Edit, Eye, EyeOff, Filter, Search, Trash, Upload } from "lucide-react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";

const attendants = Array(3).fill({
    name: 'Ana Julia Moraes ',
    email: 'anajuliamoraes28@gmail.com',
    password: '12345678',
    recepcao: 'Cardiologia',
    avatar: '/atendente.png',
});

export default function AtendentesList() {
    const [search, setSearch] = useState('');
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleCloseEditModal = () => {
        setIsModalEditOpen(false);
        setStep(1);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mx-auto min-h-screen p-4 bg-[#FAFAFA]">
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
                    <Button className="bg-black text-white" onClick={() => setIsModalCreateOpen(true)}>
                        + Nova Atendente
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
                                            onClick={() => setIsModalEditOpen(true)}
                                        >
                                            <Edit size={20} />
                                        </button>

                                        <button
                                            type="button"
                                            className="text-[#1E1E1E] hover:text-red-700"
                                            onClick={() => alert('Excluir')}
                                        >
                                            <Trash size={20} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Card>
                    );
                })}
            </div>

            <Dialog open={isModalCreateOpen} onOpenChange={setIsModalCreateOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Cadastro de Profissional</DialogTitle>

                    {step === 1 && (
                        <div>
                            <span className='text-[14px]'>Nome completo <span className='text-[red]'>*</span></span>
                            <Input placeholder="Nome completo" className="mb-6" />

                            <span className='text-[14px]'>E-mail <span className='text-[red]'>*</span></span>
                            <Input placeholder="E-mail" className="mb-6" />

                            <span className='text-[14px]'>
                                Senha <span className='text-[red]'>*</span>
                            </span>
                            <div className="relative">
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

                            <span className='text-[14px]'>Recepção <span className='text-[red]'>*</span></span>
                            <Input placeholder="Chave PIX" className="mb-6" />

                            <span className='text-[14px]'>Foto do Profissional <span className='text-[red]'>*</span></span>
                            <div className="flex flex-col items-center">
                                <label
                                    htmlFor="fileUpload"
                                    className="cursor-pointer flex w-full items-center justify-center gap-2 bg-[#FAFAFA] px-4 py-2 rounded-lg border border-black border-dashed hover:bg-gray-300 transition"
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
                                <Button onClick={() => setIsModalCreateOpen(false)} variant="outline" className="w-50%">Cancelar</Button>
                                <Button onClick={() => setStep(2)} className="w-50%">Próximo</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <Dialog open={isModalEditOpen} onOpenChange={setIsModalEditOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Cadastro de Profissional</DialogTitle>

                    <div className="flex justify-between border rounded px-6 py-3 gap-4 my-4">
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
                            <Input placeholder="Nome completo" className="mb-6" />

                            <span className='text-[14px]'>E-mail <span className='text-[red]'>*</span></span>
                            <Input placeholder="E-mail" className="mb-6" />

                            <span className='text-[14px]'>
                                Senha <span className='text-[red]'>*</span>
                            </span>
                            <div className="relative">
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

                            <span className='text-[14px]'>Recepção <span className='text-[red]'>*</span></span>
                            <Input placeholder="Chave PIX" className="mb-6" />

                            <span className='text-[14px]'>Foto do Profissional <span className='text-[red]'>*</span></span>
                            <div className="flex flex-col items-center">
                                <label
                                    htmlFor="fileUpload"
                                    className="cursor-pointer flex w-full items-center justify-center gap-2 bg-[#FAFAFA] px-4 py-2 rounded-lg border border-black border-dashed hover:bg-gray-300 transition"
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
                                <Button onClick={() => setIsModalEditOpen(false)} variant="outline" className="w-50%">Cancelar</Button>
                                <Button onClick={() => setStep(2)} className="w-50%">Próximo</Button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <span className='text-[14px]'>
                                Senha atual <span className='text-[red]'>*</span>
                            </span>
                            <div className="relative">
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
                            <span className='text-[14px]'>
                                Nova senha <span className='text-[red]'>*</span>
                            </span>
                            <div className="relative">
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
                            <span className='text-[14px]'>
                                Repita sua nova senha <span className='text-[red]'>*</span>
                            </span>
                            <div className="relative">
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

                            <div className="flex items-center justify-end gap-4 mt-4">
                                <Button onClick={handleCloseEditModal} variant="outline" className="mr-2 w-50%">Cancelar</Button>
                                <Button className="bg-black text-white w-50%">Salvar Alterações</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </div>
    );
}