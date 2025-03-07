"use client";

import { FaRegSquareCheck } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
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
import { Bar, Doughnut } from "react-chartjs-2";

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

const atendimentoConvenio = {
  labels: ["HAPVIDA", "SULAMERICA", "PARTICULAR", "HAPVIDA", "SULAMERICA", "PARTICULAR"],
  datasets: [
    {
      data: [20, 10, 10, 10, 25, 25],
      backgroundColor: ["#f87171", "#fb923c", "#60a5fa", "#34d399", "#ffb74d", "#a5b4fc"],
      borderWidth: 0.5,
    },
  ],
};

const atendimentoProcedimento = {
  labels: ["Bioimpedância", "Acupuntura", "Bioimpedância", "Acupuntura", "Bioimpedância", "Acupuntura", "Bioimpedância", "Acupuntura"],
  datasets: [
    {
      data: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5],
      backgroundColor: ["#34d399", "#f87171", "#f87171", "#fb923c", "#60a5fa", "#34d399", "#ffb74d", "#a5b4fc"],
      borderWidth: 0.5,
    },
  ],
};

export default function Integration() {
  return (
    <main className="w-full h-screen p-4 flex flex-col gap-8">
      <nav className="w-full flex justify-between items-start">
        <div className="flex items-center">
          <h1 className="ml-5 font-bold text-2xl mt-5">Dashboard</h1>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <label htmlFor="periodo" className="font-medium mb-2">
              Selecione o período <span className="text-red-500">*</span>
            </label>
            <select
              id="periodo"
              className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            >
              <option>Todo o período</option>
              <option>Última semana</option>
              <option>Último mês</option>
              <option>Último ano</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="profissional" className="font-medium mb-2">
              Selecione o profissional <span className="text-red-500">*</span>
            </label>
            <select
              id="profissional"
              className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            >
              <option>Todos</option>
              <option>Maria Gabriela da Silva</option>
              <option>Maria Clara Santos</option>
              <option>Lucas Silva Pereira</option>
              <option>Ana Beatriz Costa</option>
              <option>Gustavo Almeida Souza</option>
              <option>Carla Rodrigues Lima</option>
              <option>Felipe Oliveira Martins</option>
              <option>Laura Mendes Rocha</option>
              <option>Rafael Ferreira dos Santos</option>
              <option>Isabela Nunes Pereira</option>
              <option>Eduardo Barbosa de Lima</option>
            </select>
          </div>
        </div>
      </nav>

      <section className="grid grid-cols-4 gap-4">
        {[
          {
            icon: <FaRegSquareCheck className="text-blue-500 text-2xl" />,
            label: "Atendimentos realizados",
            value: "1.300",
            trend: "+20%",
            trendIcon: <FaArrowTrendUp />,
            trendColor: "text-green-500",
          },
          {
            icon: <FaHandHoldingHeart className="text-blue-500 text-2xl" />,
            label: "Atendimentos por convênio",
            value: "400",
            trend: "+20%",
            trendIcon: <FaArrowTrendUp />,
            trendColor: "text-green-500",
          },
          {
            icon: <GoChecklist className="text-blue-500 text-2xl" />,
            label: "Atendimentos particulares",
            value: "900",
            trend: "+20%",
            trendIcon: <FaArrowTrendUp />,
            trendColor: "text-green-500",
          },
          {
            icon: <CgCloseR className="text-blue-500 text-2xl" />,
            label: "Faltas",
            value: "10%",
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

      <section className="grid grid-cols-3 gap-4">
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

        <div className="grid grid-rows-2 gap-4 col-span-1 h-200">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
            <h3 className="text-md font-medium text-gray-500">Atendimentos x Convênios</h3>
            <Doughnut
              data={atendimentoConvenio}
              options={{
                responsive: true,
                plugins: { legend: { position: 'right' } }
              }}
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
            <h3 className="text-md font-medium text-gray-500">Atendimentos x Procedimentos</h3>
            <Doughnut
              data={atendimentoProcedimento}
              options={{
                responsive: true,
                plugins: { legend: { position: 'right' } }
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
