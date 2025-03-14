import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Importando ícone de "+" 
import { IoIosSearch } from "react-icons/io";

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
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalCreateConsultaOpen, setIsModalCreateConsultaOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("consulta");
  const [consultaType, setConsultaType] = useState('');
  const [atendimentoType, setAtendimentoType] = useState('');
  const [patientName, setPatientName] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: number; name: string }[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);

  const handleSearch = () => {
    const results = [
      { id: 1, name: "João da Silva" },
      { id: 2, name: "Maria Souza" },
    ].filter((patient) => patient.name.toLowerCase().includes(patientName.toLowerCase()));

    setSearchResults(results);
  };

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
                      onClick={() => setIsModalCreateOpen(true)}
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

      <Dialog open={isModalCreateOpen} onOpenChange={setIsModalCreateOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto w-[700px] max-w-3xl">
          <DialogTitle className="text-lg font-semibold mb-4">Novo modelo</DialogTitle>
          <div className="gap-4">
            <div>
              <h1 className="mt-2 mb-4 text-[16px]">Escolha o tipo de modelo que deseja criar:</h1>
              <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="consulta" id="consulta" />
                  <Label htmlFor="consulta">Consulta</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="exame" id="exame" />
                  <Label htmlFor="exame">Exame</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="procedimento" id="procedimento" />
                  <Label htmlFor="procedimento">Procedimento</Label>
                </div>
              </RadioGroup>
            </div>

            {selectedOption === "consulta" && (
              <div className="mt-4 space-y-4">
                <div>
                  <Label>Tipo de Consulta <span className="text-[red]">*</span></Label>
                  <Select value={consultaType} onValueChange={setConsultaType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="geral">Consulta Geral</SelectItem>
                      <SelectItem value="especialista">Consulta com Especialista</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Tipo de Atendimento <span className="text-[red]">*</span></Label>
                  <Select value={atendimentoType} onValueChange={setAtendimentoType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de atendimento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="presencial">Presencial</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Nome do Paciente <span className="text-[red]">*</span></Label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      className="w-full border rounded-md p-2"
                      placeholder="Digite o nome do paciente"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                    <Button onClick={handleSearch}>
                      <IoIosSearch />
                    </Button>
                  </div>

                  {searchResults.length === 0 && patientName && (
                    <p className="text-red-500 mt-2">Não foram encontrados pacientes com esse nome.</p>
                  )}

                  {searchResults.length > 0 && (
                    <div className="mt-4 border p-3 rounded-md">
                      {searchResults.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between py-2">
                          <span>{patient.name}</span>
                          <input
                            type="radio"
                            name="selectedPatient"
                            value={patient.id}
                            checked={selectedPatient === patient.id}
                            onChange={() => setSelectedPatient(patient.id)}
                          />
                        </div>
                      ))}
                      <div className="flex items-center inline-block">
                        <p>Não encontrou o paciente?</p>
                        <Button className="font-bold" variant={'ghost'} onClick={() => {
                          setIsModalCreateConsultaOpen(true);
                          setIsModalCreateOpen(false);
                        }}
                        >
                          Clique aqui para cadastrar.
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {selectedOption === "exame" && (
              <div>
                {/* Adicionar logica para exame aqui */}
              </div>
            )}

            {selectedOption === "procedimento" && (
              <div className="mt-4 space-y-4">
                <div>
                  <Label>Tipo de Consulta <span className="text-[red]">*</span></Label>
                  <Select value={consultaType} onValueChange={setConsultaType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="geral">Consulta Geral</SelectItem>
                      <SelectItem value="especialista">Consulta com Especialista</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Tipo de Atendimento <span className="text-[red]">*</span></Label>
                  <Select value={atendimentoType} onValueChange={setAtendimentoType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de atendimento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="presencial">Presencial</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Nome do Paciente <span className="text-[red]">*</span></Label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      className="w-full border rounded-md p-2"
                      placeholder="Digite o nome do paciente"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                    <Button onClick={handleSearch}>
                      <IoIosSearch />
                    </Button>
                  </div>

                  {searchResults.length === 0 && patientName && (
                    <p className="text-red-500 mt-2">Não foram encontrados pacientes com esse nome.</p>
                  )}

                  {searchResults.length > 0 && (
                    <div className="mt-4 border p-3 rounded-md">
                      {searchResults.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between py-2">
                          <span>{patient.name}</span>
                          <input
                            type="radio"
                            name="selectedPatient"
                            value={patient.id}
                            checked={selectedPatient === patient.id}
                            onChange={() => setSelectedPatient(patient.id)}
                          />
                        </div>
                      ))}
                      <div className="flex items-center inline-block">
                        <p>Não encontrou o paciente?</p>
                        <Button className="font-bold" variant={'ghost'} onClick={() => {
                          setIsModalCreateConsultaOpen(true);
                          setIsModalCreateOpen(false);
                        }}
                        >
                          Clique aqui para cadastrar.
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Button variant="ghost" onClick={() => setIsModalCreateOpen(false)}>Cancelar</Button>
            <Button disabled={!selectedPatient}>Confirmar Agendamento</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isModalCreateConsultaOpen} onOpenChange={setIsModalCreateConsultaOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto w-[700px] max-w-3xl">
          <DialogTitle className="text-lg font-semibold mb-4">Cadastro de Profissional</DialogTitle>

          <div>
            <span className='text-[14px]'>Nome completo <span className='text-[red]'>*</span></span>
            <Input placeholder="Nome completo" className="mb-6" />

            <div className="flex items-center grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className='text-[14px]'>E-mail <span className='text-[red]'>*</span></span>
                <Input placeholder="E-mail" className="" />
              </div>
              <div className="">
                <span className='text-[14px]'>Convênio <span className='text-[red]'>*</span></span>
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
            </div>

            <div className="flex gap-4 ">
              <div>
                <span className='text-[14px]'>Telefone <span className='text-[red]'>*</span></span>
                <Input placeholder="Digite aqui" className="mb-6" />
              </div>
              <div>
                <span className='text-[14px]'>CPF <span className='text-[red]'>*</span></span>
                <Input placeholder="Digite aqui" className="mb-6" />
              </div>
              <div>
                <span className='text-[14px]'>Data de nascimento <span className='text-[red]'>*</span></span>
                <Input type="date" placeholder="Digite aqui" className="mb-6" />
              </div>
            </div>
            <div>
              <span className='text-[14px]'>Observações</span>
              <textarea
                placeholder="Digite aqui"
                className="mb-6 w-full p-3 border border-gray-300 rounded-lg resize-none"
              />
            </div>


            <div className="flex items-center justify-end gap-4 mt-4">
              <Button onClick={() => setIsModalCreateConsultaOpen(false)} variant="ghost" className="w-50%">Cancelar</Button>
              <Button className="bg-black text-white w-50%" onClick={() => setIsModalCreateConsultaOpen(false)}>Salvar Alterações</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DailyTable;
