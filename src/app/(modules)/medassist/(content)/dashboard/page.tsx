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
    Legend,
    ArcElement,
} from "chart.js";
import { MdMoneyOff } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    ArcElement
);

const totalBillingData = [
    { name: "Particular", value: 20, color: "#2563eb" },
    { name: "Convênio", value: 80, color: "#93c5fd" }
];

const insuranceBillingData = [
    { name: "Unimed", value: 25, color: "#2563eb" },
    { name: "Bradesco", value: 40, color: "#ef4444" },
    { name: "HapVida", value: 5, color: "#bfdbfe" },
    { name: "SulAmérica", value: 10, color: "#facc15" },
    { name: "Amil", value: 20, color: "#f87171" }
];

const weeklyBillingData = [
    { day: "Seg", value: 500 },
    { day: "Ter", value: 700 },
    { day: "Qua", value: 890 },
    { day: "Qui", value: 650 },
    { day: "Sex", value: 720 },
    { day: "Sáb", value: 800 },
    { day: "Dom", value: 900 }
];

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
                        icon: <FaRegSquareCheck className="text-[#27B9F2] text-2xl" />,
                        label: "Consultas realizadas",
                        value: "51",
                        trend: "+20%",
                        trendIcon: <FaArrowTrendUp />,
                        trendColor: "text-[#22B257]",
                    },
                    {
                        icon: <CgCloseR className="text-[#27B9F2] text-2xl" />,
                        label: "Consultas canceladas",
                        value: "51",
                        trend: "+20%",
                        trendIcon: <FaArrowTrendDown />,
                        trendColor: "text-[#F23E2E]",
                    },
                    {
                        icon: <MdMoneyOff className="text-[#27B9F2] text-2xl" />,
                        label: "Valor perdido",
                        value: "R$2.000",
                        trend: "+20%",
                        trendIcon: <FaArrowTrendDown />,
                        trendColor: "text-[#F23E2E]",
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-4"
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
                        ? 'bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('diario')}
                >
                    Diário
                </Button>
                <Button
                    className={`mr-2 ${selectedCategory === 'semanal'
                        ? 'bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('semanal')}
                >
                    Semanal
                </Button>
                <Button
                    className={`${selectedCategory === 'mensal'
                        ? 'bg-[#ECF2FF] text-[#2955D9] hover:bg-[#D6E4FF]'
                        : 'bg-white text-black border border-gray-300 hover:bg-[#ECF2FF] hover:text-[#2955D9]'
                        }`}
                    onClick={() => setSelectedCategory('mensal')}
                >
                    Mensal
                </Button>
            </div>

            <section className="grid grid-cols-3 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold">Percentual de faturamento total</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={totalBillingData} dataKey="value" nameKey="name" outerRadius={80}>
                                        {totalBillingData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold">Percentual de faturamento entre convênios</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={insuranceBillingData} dataKey="value" nameKey="name" outerRadius={80}>
                                        {insuranceBillingData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card className="col-span-2">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold">Faturamento</h3>
                            <p className="text-sm text-gray-500">Acompanhe aqui o seu faturamento diário na semana atual.</p>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={weeklyBillingData}>
                                    <XAxis dataKey="day" />
                                    <Tooltip formatter={(value) => typeof value === "number" ? `R$${value.toFixed(2)}` : value} />
                                    <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ fill: "#2563eb", r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                <div className="p-2 col-span-1 h-full">
                    <div className="">
                        <div className="flex items-center justify-between">
                            <h1>Agendamentos do Dia</h1>
                            <Button variant={'outline'}>Ver agenda</Button>
                        </div>
                        {["blue", "red", "green", "yellow"].map((color, index) => (
                            <div key={index} className={`flex items-center justify-between mt-4 bg-white rounded border-l-[3px] border-${color}-500`}>
                                <div className="px-2">
                                    <h1>Nome do paciente</h1>
                                    <h1 className="text-gray-500">09:30 às 10:30</h1>
                                </div>
                                <Button variant={'ghost'}>
                                    <ArrowRight />
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <div className="flex items-center justify-between">
                            <h1>Histórico de Atendimentos</h1>
                            <Button variant={'outline'}>Ver histórico</Button>
                        </div>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="flex items-center justify-between mt-4 bg-white rounded">
                                <div className="px-2">
                                    <h1>Nome do paciente</h1>
                                    <h1 className="text-gray-500">Convênio</h1>
                                </div>
                                <Button variant={'ghost'} onClick={() => router.push("/medassist/dashboard/historico/")}>
                                    <ArrowRight />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
