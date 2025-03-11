import React, { useState } from "react";

const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

// Gerando os horários de 20 em 20 minutos entre 08:00 e 18:00, excluindo das 12:00 às 14:00
const hours = [
  "08:00",
  "08:20",
  "08:40",
  "09:00",
  "09:20",
  "09:40",
  "10:00",
  "10:20",
  "10:40",
  "11:00",
  "11:20",
  "11:40",
  "12:00",
  "14:00",
  "14:20",
  "14:40",
  "15:00",
  "15:20",
  "15:40",
  "16:00",
  "16:20",
  "16:40",
  "17:00",
  "17:20",
  "17:40",
  "18:00",
];

// Mock de usuários, com algumas células vazias para ilustrar o ícone "+"
const mockUsers = [
  { name: "João Pedro", id: 1, type: "R" },
  { name: "", id: 2 }, // Aqui é onde o ícone de "+" será exibido
  { name: "Maria Júlia", type: "S", id: 3 },
  { name: "", id: 4,  },
  { name: "Anna Clara", id: 5, type: "1" },
];

const WeekTable: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState(mockUsers);


  return (
    <div className="overflow-x-auto">
      <table className="min-w-[1200px] table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-white">
            <th className="w-16 py-2 text-center font-semibold text-[#8B8D98] border border-gray-300 rounded-tl-xl"></th>
            {daysOfWeek.map((day) => (
              <th
                key={day}
                className="py-2 text-center font-semibold text-[#8B8D98] border border-gray-300"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour} className="bg-white">
              <td className="py-2 px-2 text-right font-medium text-[#1E1F24] text-sm border border-gray-300">
                {hour}
              </td>
              {daysOfWeek.map((day, index) => (
                <td
                  key={day}
                  className="px-4 py-1 text-center border border-gray-300 w-40"
                >
                  {/* Verifica se há nome para o usuário, se não, exibe o ícone de "+" */}
                  {users.some((user) => user.id === index + 1) &&
                  users.find((user) => user.id === index + 1)?.name ? (
                    <div className="flex items-center justify-start space-x-2">
                      <span className="text-[#373839] flex items-center gap-2">
                        {users.find((user) => user.id === index + 1)?.type == "R" && (
                            <div className="w-5 h-6 bg-[#22B257] rounded-md flex justify-center items-center text-white">
                            R
                          </div>
                        )}
                        {users.find((user) => user.id === index + 1)?.type == "1" && (
                            <div className="w-5 h-6 bg-[#F4AD27] rounded-md flex justify-center items-center text-white">
                            1
                          </div>
                        )}
                        {users.find((user) => user.id === index + 1)?.type == "S" && (
                            <div className="w-5 h-6 bg-[#2955D9] rounded-md flex justify-center items-center text-white">
                            1
                          </div>
                        )}
                        {users.find((user) => user.id === index + 1)?.name}
                      </span>
                    </div>
                  ) : (
                    <button
                      className="flex justify-center items-center w-8 h-8 rounded-lg bg-white text-[#8B8D98] border border-gray-300 cursor-pointer"
                    >
                      +
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-white">
            <td className="py-2 text-right font-medium text-[#1E1F24] text-sm border border-gray-300 rounded-bl-xl"></td>
            {daysOfWeek.map((day) => (
              <td
                key={day}
                className="py-2 text-center font-semibold text-[#8B8D98] border border-gray-300"
              >
                {/* Rodapé, caso necessário */}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default WeekTable;
