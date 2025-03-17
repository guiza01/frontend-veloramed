"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    return (
        <main className="w-full min-h-screen 2xl:max-w-[1300px] mx-auto flex flex-col p-4 px-6">
            <div className="flex justify-between flex-col md:flex-row mb-6">
                <Button variant={'ghost'} onClick={() => router.push("/engagemed/patients/")} className="font-semibold text-[20px]">
                    <ArrowLeft />
                    Detalhes do paciente
                </Button>
            </div>

            <div className="overflow-x-auto bg-white p-6 rounded-xl">
                <div>
                    <div className="flex items-center grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <span className='text-[16px]'>Nome completo </span>
                            <p className='text-[18px]'>{patient.name}</p>
                        </div>
                        <div>
                            <span className='text-[16px]'>CPF </span>
                            <p className='text-[18px]'>{patient.cpf}</p>
                        </div>
                    </div>
                    <div className="flex items-center grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <span className='text-[16px]'>Telefone </span>
                            <p className='text-[18px]'>{patient.number}</p>
                        </div>
                        <div>
                            <span className='text-[16px]'>E-mail </span>
                            <p className='text-[18px]'>{patient.email}</p>
                        </div>
                    </div>

                    <div className="flex grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <span className='text-[16px]'>Convênio </span>
                            <p className='text-[18px]'>{patient.convenio}</p>
                        </div>
                        <div>
                            <span className='text-[16px]'>Data de nascimento </span>
                            <p className='text-[18px]'>{patient.date}</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <span className='text-[16px]'>Observações</span>
                        <p className='text-[18px]'>{patient.observer}</p>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-4">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="ghost">
                            Excluir cadastro
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
                <Button className="bg-black text-white w-50%" onClick={() => router.push("/engagemed/patients/edit")} >Editar cadastro</Button>
            </div>

        </main>
    );
}