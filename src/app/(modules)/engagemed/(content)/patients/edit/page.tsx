"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const patient = {
    name: "João da Silva",
    cpf: "123.456.789-10",
    number: "(00) 00000-0000",
    email: "exemplo@email.com",
    convenio: "Unimed",
    date: "12/12/2000",
    observer: "Paciente informou ser alérgico à dipirona.",
}

export default function CreatePatient() {
    const [atendimentoType, setAtendimentoType] = useState('');
    const router = useRouter();
    return (
        <main className="w-full min-h-screen 2xl:max-w-[1300px] mx-auto flex flex-col p-4 px-6">
            <div className="flex justify-between flex-col md:flex-row mb-6">
                <Button variant={'ghost'} onClick={() => router.push("/engagemed/patients/")} className="font-semibold text-[20px]">
                    <ArrowLeft />
                    Edição de cadastro
                </Button>
            </div>

            <div className="overflow-x-auto bg-white p-6 rounded-xl">
                <div>
                    <div className="flex items-center grid grid-cols-2 gap-4">
                        <div>
                            <span className='text-[14px]'>Nome completo <span className='text-[red]'>*</span></span>
                            <Input placeholder="Nome completo" defaultValue={patient.name} className="mb-6 mt-2" />
                        </div>
                        <div>
                            <span className='text-[14px]'>CPF <span className='text-[red]'>*</span></span>
                            <Input placeholder="Digite aqui" defaultValue={patient.cpf} className="mb-6 mt-2" />
                        </div>
                    </div>
                    <div className="flex items-center grid grid-cols-2 gap-4">
                        <div>
                            <span className='text-[14px]'>Telefone <span className='text-[red]'>*</span></span>
                            <Input placeholder="Nome completo" defaultValue={patient.number} className="mb-6 mt-2" />
                        </div>
                        <div>
                            <span className='text-[14px]'>E-mail <span className='text-[red]'>*</span></span>
                            <Input placeholder="Digite aqui" defaultValue={patient.email} className="mb-6 mt-2" />
                        </div>
                    </div>

                    <div className="flex grid grid-cols-2 gap-4 ">
                        <div>
                            <span className='text-[14px] mb-2 block'>Convênio <span className='text-[red]'>*</span></span>
                            <Select value={atendimentoType} onValueChange={setAtendimentoType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione o tipo de atendimento" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Unimed</SelectItem>
                                    <SelectItem value="2">Unimed</SelectItem>
                                    <SelectItem value="3">Unimed</SelectItem>
                                    <SelectItem value="4">Unimed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <span className='text-[14px]'>Data de nascimento <span className='text-[red]'>*</span></span>
                            <Input type="date" placeholder="Digite aqui" defaultValue={patient.date} className="mb-6 mt-2" />
                        </div>
                    </div>

                    <div>
                        <span className='text-[14px]'>Observações</span>
                        <textarea
                            placeholder="Digite aqui"
                            className="mb-6 mt-2 w-full p-3 border border-gray-300 rounded-lg resize-none"
                            defaultValue={patient.observer}
                        />
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-4">
                <Button variant="ghost" className="w-50%">Cancelar</Button>
                <Button className="bg-black text-white w-50%" >Salvar alterações</Button>
            </div>

        </main>
    );
}