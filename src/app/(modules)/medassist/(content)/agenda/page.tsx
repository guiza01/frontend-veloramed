"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { eachDayOfInterval, startOfWeek, startOfMonth, endOfWeek, endOfMonth } from "date-fns";
import { ArrowRight, Filter, Search } from "lucide-react";
import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { FaArrowTrendDown, FaArrowTrendUp, FaRegSquareCheck } from "react-icons/fa6";
import { MdMoneyOff } from "react-icons/md";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function Dashboard() {
    const [selectedCategory, setSelectedCategory] = useState<'diária' | 'semanal' | 'mensal'>('mensal');
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    const [selectedDate] = useState(new Date());
    const [events, setEvents] = useState<Record<string, string[]>>({});

    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(selectedDate)),
        end: endOfWeek(endOfMonth(selectedDate)),
    });

    const handleAddEvent = (day: string) => {
        const message = prompt("Adicione uma mensagem para este dia:");
        if (message) {
            setEvents((prev) => ({
                ...prev,
                [day]: [...(prev[day] || []), message],
            }));
        }
    };

    return (
        <main className="w-full px-8 flex flex-col gap-8">
            <section className="grid grid-cols-3 gap-4 mt-10">
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

            <div className="flex justify-between">
                <h1 className="text-xl flex items-center font-bold">Agenda</h1>
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
                        Editar disponibilidade
                    </Button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="gap-1">
                    <Button
                        className={`mr-2 ${selectedCategory === 'diária'
                            ? 'bg-[#DEEAFF] text-[#2955D9]'
                            : 'bg-white text-black border border-gray-300 hover:bg-[#DEEAFF] hover:text-[#2955D9]'
                            }`}
                        onClick={() => setSelectedCategory('diária')}
                    >
                        Diaria
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
                <div className="flex gap-4">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-[#F4AD27]"></div>
                            <p>Atendimentos particulares</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-[#08ADE6]"></div>
                            <p>Atendimentos por convênio</p>
                        </div>
                    </div>
                    <Select>
                        <SelectTrigger className="w-auto min-w-[100px]">
                            <SelectValue placeholder="Selecione um mês" />
                        </SelectTrigger>
                        <SelectContent className="max-h-40 overflow-y-auto">
                            {months.map((month, index) => (
                                <SelectItem key={index} value={month}>{month}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="w-full mx-auto p-4">
                {selectedCategory === 'mensal' && (
                    <div className="grid grid-cols-7">
                        {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map((day) => (
                            <div key={day} className="text-center border font-bold p-2">{day}</div>
                        ))}
                        {days.map((day) => (
                            <div
                                key={day.toString()}
                                className="border p-2 h-24 relative cursor-pointer hover:bg-gray-100"
                                onClick={() => handleAddEvent(format(day, "yyyy-MM-dd"))}
                            >
                                <span className="text-sm font-bold">{format(day, "dd")}</span>
                                <div className="absolute inset-x-0 bottom-1 text-xs">
                                    {events[format(day, "yyyy-MM-dd")]?.map((event, index) => (
                                        <div key={index} className="bg-blue-200 p-2 rounded mt-1">
                                            {event}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {selectedCategory === 'semanal' && (
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <div className="col-span-1 flex">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />
                            </div>
                            <div className="mt-4 border rounded p-3">
                                <h1 className="mb-3 border-b">Status</h1>
                                {[
                                    { label: "Agendado", color: "#2955D9" },
                                    { label: "Confirmado", color: "#22B257" },
                                    { label: "Chegou", color: "#27B9F2" },
                                    { label: "Cancelado", color: "#F23E2E" },
                                    { label: "Faltou", color: "#F4AD27" },
                                    { label: "Finalizado", color: "#9A9CA2" },
                                ].map((status, index) => (
                                    <div key={index} className="flex items-center px-2 gap-2 mt-2">
                                        <div className="w-4 h-4 rounded" style={{ backgroundColor: status.color }}></div>
                                        <h1>{status.label}</h1>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 border rounded p-3">
                                <h1 className="mb-3 border-b">Tipo de consulta</h1>
                                <div className="px-2 ">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-6 h-8 rounded flex items-center justify-center border bg-[#EBEBEC]">1</div>
                                        <h1>Primeira consulta</h1>
                                    </div>
                                    <div className="flex gap-2 mt-4 items-center">
                                        <div className="w-6 h-8 rounded flex items-center justify-center border bg-[#EBEBEC]">R</div>
                                        <h1>Reagendamento</h1>
                                    </div>
                                    <div className="flex gap-2 mt-4 items-center hover:bg-[#FAFAFA]">
                                        <div className="w-6 h-8 rounded flex items-center justify-center border bg-[#EBEBEC]">S</div>
                                        <h1>Subsequente</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 grid grid-cols-7">
                            {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map((day) => (
                                <div key={day} className="text-center border font-bold p-2">{day}</div>
                            ))}
                            {days.map((day) => (
                                <div
                                    key={day.toString()}
                                    className="border p-2 h-24 relative cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleAddEvent(format(day, "yyyy-MM-dd"))}
                                >
                                    <span className="text-sm font-bold">{format(day, "dd")}</span>
                                    <div className="absolute inset-x-0 bottom-1 text-xs">
                                        {events[format(day, "yyyy-MM-dd")]?.map((event, index) => (
                                            <div key={index} className="bg-blue-200 p-1 rounded mt-1">
                                                {event}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {selectedCategory === 'diária' && (
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <div className="">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />
                            </div>
                            <div className="mt-4 border rounded p-3">
                                <h1 className="mb-3 border-b">Status</h1>
                                {[
                                    { label: "Agendado", color: "#2955D9" },
                                    { label: "Confirmado", color: "#22B257" },
                                    { label: "Chegou", color: "#27B9F2" },
                                    { label: "Cancelado", color: "#F23E2E" },
                                    { label: "Faltou", color: "#F4AD27" },
                                    { label: "Finalizado", color: "#9A9CA2" },
                                ].map((status, index) => (
                                    <div key={index} className="flex items-center px-2 gap-2 mt-2">
                                        <div className="w-4 h-4 rounded" style={{ backgroundColor: status.color }}></div>
                                        <h1>{status.label}</h1>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 border rounded p-3">
                                <h1 className="mb-3 border-b">Tipo de consulta</h1>
                                <div className="px-2 ">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-6 h-8 rounded flex items-center justify-center border bg-[#EBEBEC]">1</div>
                                        <h1>Primeira consulta</h1>
                                    </div>
                                    <div className="flex gap-2 mt-4 items-center">
                                        <div className="w-6 h-8 rounded flex items-center justify-center border bg-[#EBEBEC]">R</div>
                                        <h1>Reagendamento</h1>
                                    </div>
                                    <div className="flex gap-2 mt-4 items-center hover:bg-[#FAFAFA]">
                                        <div className="w-6 h-8 rounded flex items-center justify-center border bg-[#EBEBEC]">S</div>
                                        <h1>Subsequente</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 bg-[#FFFFFF]">
                            <div className="border rounded p-2  w-full">
                                <div className="flex items-end justify-between bg-[#FAFAFA] border-l-[4px] border-[#E7A113] rounded">
                                    <div className="px-2">
                                        <h1 className="mb-4">Rosana Guimarães dos Santos</h1>
                                        <h1>Convênio - Unimed</h1>
                                    </div>
                                    <Button variant={'ghost'} className="flex items-center">
                                        Ver prontuário
                                        <ArrowRight />
                                    </Button>
                                </div>
                                <div className="flex items-end mt-2 justify-between bg-[#FAFAFA] border-l-[4px] border-[#22B257] rounded">
                                    <div className="px-2">
                                        <h1 className="mb-4">Rosana Guimarães dos Santos</h1>
                                        <h1>Convênio - Unimed</h1>
                                    </div>
                                    <Button variant={'ghost'} className="flex items-center">
                                        Ver prontuário
                                        <ArrowRight />
                                    </Button>
                                </div>
                                <div className="flex items-end mt-2 justify-between bg-[#FAFAFA] border-l-[4px] border-[#27B9F2] rounded">
                                    <div className="px-2">
                                        <h1 className="mb-4">Rosana Guimarães dos Santos</h1>
                                        <h1>Convênio - Unimed</h1>
                                    </div>
                                    <Button variant={'ghost'} className="flex items-center">
                                        Ver prontuário
                                        <ArrowRight />
                                    </Button>
                                </div>
                                <div className="flex items-end mt-2 justify-between bg-[#FAFAFA] border-l-[4px] border-[#F23E2E] rounded">
                                    <div className="px-2">
                                        <h1 className="mb-4">Rosana Guimarães dos Santos</h1>
                                        <h1>Convênio - Unimed</h1>
                                    </div>
                                    <Button variant={'ghost'} className="flex items-center">
                                        Ver prontuário
                                        <ArrowRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Detalhes do Agendamento</DialogTitle>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Adicione informações do agendamento aqui */}
                    </div>
                    <div className="flex items-center mt-4 justify-end">
                        <Button onClick={() => setIsModalOpen(false)}>Fechar</Button>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/50" />
                <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
                    <DialogTitle className="text-lg font-semibold mb-4">Detalhes do Agendamento</DialogTitle>
                    <div className="grid grid-cols-2 gap-4">

                    </div>
                    <div className="flex items-center mt-4 justify-end">
                        <Button onClick={() => setIsModalOpen(false)}>
                            Fechar
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </main>
    );
}