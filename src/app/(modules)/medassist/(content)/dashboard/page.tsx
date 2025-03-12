"use client";

import { FaRegSquareCheck } from "react-icons/fa6";
import { CgCloseR } from "react-icons/cg";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { MdMoneyOff } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const barData = {
    labels: ["Janeiro", "Fevereiro", "Março"],
    datasets: [
        {
            label: "Consultas",
            data: [25000, 9000, 15000],
            backgroundColor: "#93c5fd",
            borderWidth: 1,
            barThickness: 50,
        },
        {
            label: "Procedimentos",
            data: [18000, 5000, 12000],
            backgroundColor: "#60a5fa",
            borderWidth: 1,
            barThickness: 50,
        },
        {
            label: "Exames",
            data: [9000, 3000, 25000],
            backgroundColor: "#2563eb",
            borderWidth: 1,
            barThickness: 50,
        },
    ],
};

export default function Integration() {
    const [selectedCategory, setSelectedCategory] = useState<'diario' | 'semanal' | 'mensal'>('diario');
    const router = useRouter();
    
    return (
        <main className="w-full px-8 flex flex-col gap-8">
            <nav className="w-full flex justify-between items-start">
                <div className="flex items-center">
                    <h1 className="font-bold text-2xl mt-5">Dashboard</h1>
                </div>
            </nav>

            <section className="grid grid-cols-3 gap-4">
                {[
                    {
                        icon: <FaRegSquareCheck className="text-blue-500 text-2xl" />,
                        label: "Consultas realizadas",
                        value: "51",
                        trend: "+20%",
                        trendIcon: <FaArrowTrendUp />,
                        trendColor: "text-green-500",
                    },
                    {
                        icon: <CgCloseR className="text-blue-500 text-2xl" />,
                        label: "Consultas canceladas",
                        value: "51",
                        trend: "+20%",
                        trendIcon: <FaArrowTrendDown />,
                        trendColor: "text-red-500",
                    },
                    {
                        icon: <MdMoneyOff className="text-blue-500 text-2xl" />,
                        label: "Valor perdido",
                        value: "R$2.000",
                        trend: "+20%",
                        trendIcon: <FaArrowTrendDown />,
                        trendColor: "text-red-500",
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg shadow-lg p-4"
                    >
                        <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                            {card.icon}
                            {card.label}
                        </h3>
                        <div className="mt-5 flex justify-between items-center">
                            <p className="text-2xl font-bold mt-2">{card.value}</p>
                            <p className={`text-sm mt-1 flex items-center gap-2 ${card.trendColor}`}>
                                {card.trend} {card.trendIcon}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <div className="gap-1">
                <Button
                    className={`mr-2 ${selectedCategory === 'diario'
                        ? 'bg-[#DEEAFF] text-[#2955D9]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#DEEAFF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('diario')}
                >
                    Diario
                </Button>
                <Button
                    className={`mr-2 ${selectedCategory === 'semanal'
                        ? 'bg-[#DEEAFF] text-[#2955D9]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#DEEAFF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('semanal')}
                >
                    Semanal
                </Button>
                <Button
                    className={`${selectedCategory === 'mensal'
                        ? 'bg-[#DEEAFF] text-[#2955D9]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#DEEAFF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('mensal')}
                >
                    Mensal
                </Button>
            </div>

            <section className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 col-span-2 h-full">
                    <h3 className="text-md font-medium text-gray-500">Faturamento geral</h3>
                    <Bar
                        className=""
                        data={barData}
                        options={{
                            responsive: true,
                            plugins: { legend: { position: "top", align: "end" } },
                        }}
                    />
                </div>
                <div className="p-2 col-span-1 h-full">
                    <div className="">
                        <div className="flex items-center justify-between">
                            <h1>Agendamentos do Dia</h1>
                            <Button variant={'outline'}>Ver agenda</Button>
                        </div>
                        <div className="flex items-center justify-between mt-4 bg-white rounded border-l-[3px] border-blue-500">
                            <div className="px-2">
                                <h1>Nome do paciente</h1>
                                <h1 className="text-gray-500">09:30 às 10:30</h1>
                            </div>
                            <Button variant={'ghost'}>
                                <ArrowRight />
                            </Button>
                        </div>
                        <div className="flex items-center justify-between mt-4 bg-white rounded border-l-[3px] border-red-500">
                            <div className="px-2">
                                <h1>Nome do paciente</h1>
                                <h1 className="text-gray-500">09:30 às 10:30</h1>
                            </div>
                            <Button variant={'ghost'}>
                                <ArrowRight />
                            </Button>
                        </div>
                        <div className="flex items-center justify-between mt-4 bg-white rounded border-l-[3px] border-green-500">
                            <div className="px-2">
                                <h1>Nome do paciente</h1>
                                <h1 className="text-gray-500">09:30 às 10:30</h1>
                            </div>
                            <Button variant={'ghost'}>
                                <ArrowRight />
                            </Button>
                        </div>
                        <div className="flex items-center justify-between mt-4 bg-white rounded border-l-[3px] border-yellow-500">
                            <div className="px-2">
                                <h1>Nome do paciente</h1>
                                <h1 className="text-gray-500">09:30 às 10:30</h1>
                            </div>
                            <Button variant={'ghost'}>
                                <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 col-span-2 h-full">
                    <h3 className="text-md font-medium text-gray-500">Faturamento geral</h3>
                    <Bar
                        className="h-[400px]"
                        data={barData}
                        options={{
                            responsive: true,
                            plugins: { legend: { position: "top", align: "end" } },
                        }}
                    />
                </div>
                <div className="p-2 col-span-1 h-full">
                    <div className="">
                        <div>
                            <div className="flex items-center justify-between">
                                <h1>Histórico de Atendimentos</h1>
                                <Button variant={'outline'}>Ver histórico</Button>
                            </div>
                            <div className="flex items-center justify-between mt-4 bg-white rounded">
                                <div className="px-2">
                                    <h1>Nome do paciente</h1>
                                    <h1 className="text-gray-500">Convênio</h1>
                                </div>
                                <Button variant={'ghost'} onClick={() => router.push("/medassist/dashboard/historico/")}>
                                    <ArrowRight />
                                </Button>
                            </div>
                            <div className="flex items-center justify-between mt-4 bg-white rounded">
                                <div className="px-2">
                                    <h1>Nome do paciente</h1>
                                    <h1 className="text-gray-500">Convênio</h1>
                                </div>
                                <Button variant={'ghost'} onClick={() => router.push("/medassist/dashboard/historico/")}>
                                    <ArrowRight />
                                </Button>
                            </div>
                            <div className="flex items-center justify-between mt-4 bg-white rounded">
                                <div className="px-2">
                                    <h1>Nome do paciente</h1>
                                    <h1 className="text-gray-500">Convênio</h1>
                                </div>
                                <Button variant={'ghost'} onClick={() => router.push("/medassist/dashboard/historico/")}>
                                    <ArrowRight />
                                </Button>
                            </div>
                            <div className="flex items-center justify-between mt-4 bg-white rounded">
                                <div className="px-2">
                                    <h1>Nome do paciente</h1>
                                    <h1 className="text-gray-500">Convênio</h1>
                                </div>
                                <Button variant={'ghost'} onClick={() => router.push("/medassist/dashboard/historico/")}>
                                    <ArrowRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
