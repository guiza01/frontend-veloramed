import React from "react";
import { FaPlus } from "react-icons/fa"; // Importando ícone de "+" 

// Gerando os horários de 20 em 20 minutos entre 08:00 e 18:00, excluindo das 12:00 às 14:00
const hours = [
  "08:00", "08:20", "08:40", "09:00", "09:20", "09:40", "10:00", "10:20", "10:40",
  "11:00", "11:20", "11:40", "12:00", "14:00", "14:20", "14:40", "15:00", "15:20",
  "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40", "18:00"
];

// Mapeando nomes para cada horário
const namesForHours: Record<string, string> = {
  "08:00": "Nome do paciente ",
  "08:20": "Nome do paciente ",
  "08:40": "Nome do paciente ",
  "09:00": "Nome do paciente ",
  "09:20": "Nome do paciente ",
  "09:40": "Nome do paciente ",
  "10:00": "Nome do paciente ",
  "10:20": "Nome do paciente ",
  "10:40": "Nome do paciente ",
  "11:00": "Nome do paciente ",
  "11:20": "Nome do paciente ",
  "11:40": "Nome do paciente ",
  "12:00": "", // Este horário vai ter o ícone de "+"
  "14:00": "Nome do paciente ",
  "14:20": "Nome do paciente ",
  "14:40": "Nome do paciente ",
  "15:00": "Nome do paciente ",
  "15:20": "Nome do paciente ",
  "15:40": "Nome do paciente ",
  "16:00": "Nome do paciente ",
  "16:20": "Nome do paciente ",
  "16:40": "Nome do paciente ",
  "17:00": "Nome do paciente ",
  "17:20": "Nome do paciente ",
  "17:40": "Nome do paciente ",
  "18:00": "Nome do paciente "
};

const DailyTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[1200px] table-auto border-collapse border border-gray-200">
        <tbody>
          {hours.map((hour) => (
            <tr key={hour} className="bg-white">
              <td className="py-2 px-2 text-right w-10 font-medium text-[#1E1F24] text-sm border border-gray-300">
                {hour}
              </td>
              <td className="px-4 py-1 text-left border border-gray-300">
                {hour === "12:00" ? (
                  <span className="text-[#373839] flex items-center justify-start gap-2">
                    <button
                      className="flex justify-center items-center w-8 h-8 rounded-lg bg-white text-[#8B8D98] border border-gray-300 cursor-pointer"
                    >
                      <FaPlus />
                    </button>
                  </span>
                ) : (
                  <span className="text-[#373839] flex items-center gap-2">
                    <div className="w-5 h-6 bg-[#2955D9] rounded-md flex justify-center items-center text-white">
                      1
                    </div>
                    {namesForHours[hour]}
                  </span>
                )}
              </td>
              <td className="px-4 py-1 text-center border border-gray-300">
                {hour === "12:00" ? "" : "(00) 00000-0000"}
              </td>
              <td className="px-4 py-1 text-center border border-gray-300">
                {hour === "12:00" ? "" : "Nome do Convênio"}
              </td>
              <td className="px-4 py-1 text-center border border-gray-300">
                {hour === "12:00" ? "" : "Consulta"}
              </td>
              <td className="px-4 py-1 text-center border border-gray-300">
                {hour === "12:00" ? "" : "Nome do médico"}
              </td>
              <td className="px-4 py-1 text-center border border-gray-300">
                {hour === "12:00" ? "" : "Especialidade"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyTable;
