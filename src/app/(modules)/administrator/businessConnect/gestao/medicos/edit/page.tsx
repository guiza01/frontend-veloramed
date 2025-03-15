"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Disclosure } from "@headlessui/react";
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { ArrowLeft, Eye, EyeOff, ClipboardCopy, Check, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

interface Doctor {
    index: number;
    name: string;
    specialty: string;
    plan: string;
    room: string;
    avatar: string;
    email: string;
    password: string;
    keyPix: string;
}

const doctor: Doctor = {
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setStep(1);
    };

    return (
        <div className="mx-auto min-h-screen p-2 bg-[#FAFAFA]">
            <Button variant={'ghost'} onClick={() => router.push(`/administrator/businessConnect/gestao/medicos`)} className="text-[20px]">
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
                    className={`flex items-center justify-between w-full text-xl font-semibold ${openMenus.convenio ? 'border-b pb-2 border-gray-300' : ''}`}
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
                    className={`flex items-center justify-between w-full text-xl font-semibold ${openMenus.procedimentos ? 'border-b pb-2 border-gray-300' : ''}`}
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

            <div className="flex items-center justify-end p-6 gap-4">
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
                <Button onClick={() => setIsModalOpen(true)}>Editar</Button>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Edição de Cadastro</DialogTitle>

                    <div className="flex justify-between border rounded p-6 gap-4 my-4">
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
                        ${step > 1 ? "bg-black text-white border-black" : step === 1 ? "border-black" : "border-gray-300"}`}
                            >
                                {step > 1 ? <Check size={16} /> : "1"}
                            </div>
                            <label>Informações Pessoais</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
                        ${step > 2 ? "bg-black text-white border-black" : step === 2 ? "border-black" : "border-gray-300"}`}
                            >
                                {step > 2 ? <Check size={16} /> : "2"}
                            </div>
                            <label>Resumo Profissional</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
                        ${step === 3 ? "border-black" : step > 3 ? "bg-black text-white border-black" : "border-gray-300"}`}
                            >
                                {step > 3 ? <Check size={16} /> : "3"}
                            </div>
                            <label>Senha</label>
                        </div>
                    </div>

                    {step === 1 && (
                        <div>
                            <span className='text-[14px]'>Nome completo <span className='text-[red]'>*</span></span>
                            <Input placeholder="Nome completo" className="mb-6" defaultValue={doctor.name} />

                            <span className='text-[14px]'>E-mail <span className='text-[red]'>*</span></span>
                            <Input placeholder="E-mail" className="mb-6" defaultValue={doctor.email} />

                            <span className='text-[14px]'>
                                Senha <span className='text-[red]'>*</span>
                            </span>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="mb-6 pr-10"
                                    defaultValue={doctor.password}
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
                            <Input placeholder="Chave PIX" className="mb-6" defaultValue={doctor.keyPix} />

                            <span className='text-[14px]'>Número da sala <span className='text-[red]'>*</span></span>
                            <Input placeholder="Número da sala" className="mb-6" defaultValue={doctor.room} />

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
                                <Button onClick={handleCloseModal} variant="outline" className="w-50%">Cancelar</Button>
                                <Button onClick={() => setStep(2)} className="w-50%">Próximo</Button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <span className="text-[14px]">
                                Especialidade e Convênio <span className="text-[red]">*</span>
                            </span>
                            <Input placeholder="Especialidade e Convênio" className="mb-6" />

                            <span className="text-[14px]">Este profissional efetua:</span>

                            <Disclosure>
                                {({ open }) => (
                                    <div className="flex flex-col items-start w-full px-4 py-2 mb-6 border border-gray-300 rounded-md text-left text-black">
                                        <Disclosure.Button
                                            className={`flex w-full text-[14px] items-center justify-between ${open ? "pb-2 border-b border-gray-300" : ""}`}
                                        >
                                            <span>Consulta</span>
                                            {open ? <FaChevronUp /> : <FaChevronDown />}
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="mt-4 w-full">
                                            <span className="text-[14px]">Tempo de atendimento (por convênio)</span>
                                            <Input placeholder="Digite aqui" className="mb-6 w-full" />
                                            <span className="text-[14px]">Tempo de atendimento (particular)</span>
                                            <Input placeholder="Digite aqui" className="mb-6" />
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>

                            <Disclosure>
                                {({ open }) => (
                                    <div className="flex flex-col items-start w-full px-4 py-2 mb-6 border border-gray-300 rounded-md text-left text-black">
                                        <Disclosure.Button
                                            className={`flex w-full text-[14px] items-center justify-between ${open ? "pb-2 border-b border-gray-300" : ""}`}
                                        >
                                            <span>Exame</span>
                                            {open ? <FaChevronUp /> : <FaChevronDown />}
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="mt-4 w-full">
                                            <span className="text-[14px]">Tempo de atendimento (por convênio)</span>
                                            <Input placeholder="Digite aqui" className="mb-6" />
                                            <span className="text-[14px]">Tempo de atendimento (particular)</span>
                                            <Input placeholder="Digite aqui" className="mb-6" />
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>

                            <Disclosure>
                                {({ open }) => (
                                    <div className="flex flex-col items-start w-full px-4 py-2 mb-6 border border-gray-300 rounded-md text-left text-black">
                                        <Disclosure.Button
                                            className={`flex w-full text-[14px] items-center justify-between ${open ? "pb-2 border-b border-gray-300" : ""}`}
                                        >
                                            <span>Procedimento</span>
                                            {open ? <FaChevronUp /> : <FaChevronDown />}
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="mt-4 w-full">
                                            <span className="text-[14px]">Nome do procedimento</span>
                                            <Input placeholder="Digite aqui" className="mb-6" />
                                            <span className="text-[14px]">Tempo de atendimento</span>
                                            <Input placeholder="Digite aqui" className="mb-6" />
                                            <span className="text-[14px]">Valor</span>
                                            <Input placeholder="Digite aqui" className="mb-6" />
                                            <span className="text-[14px]">Descrição</span>
                                            <div className="mb-6">
                                                <textarea
                                                    placeholder="Digite aqui"
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
                                <Button onClick={() => setStep(1)} variant="outline" className=" w-50%">Voltar</Button>
                                <Button onClick={() => setStep(3)} className="w-50%">Próximo</Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <span className='text-[14px]'>
                                Senha atual <span className='text-[red]'>*</span>
                            </span>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    className="mb-6 pr-10"
                                    defaultValue={doctor.password}
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
                                <Button onClick={handleCloseModal} variant="outline" className="w-50%">Cancelar</Button>
                                <Button className="bg-black text-white w-50%">Salvar Alterações</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </div>
    );
}
