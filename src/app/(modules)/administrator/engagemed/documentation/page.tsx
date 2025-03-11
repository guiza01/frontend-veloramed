import { Input } from "@/components/ui/input";
import { BiSend } from "react-icons/bi";
export default function DocumentationPage() {
  return (
    <main className="w-full min-h-screen 2xl:max-w-[1300px] mx-auto flex flex-col p-4 px-2">
      <h1 className="mb-3 text-xl font-semibold">Documentação</h1>

      <div className="flex flex-col w-full h-full bg-white rounded-lg p-2">
        <h1 className="border-b border-[#EBEBEC] p-2">Pietra</h1>

        <div className="overflow-y-auto h-96 flex flex-col mt-3 text-xs p-2">
          <p className="text-center my-3">5 de abril 2024</p>

          <div className="flex justify-end w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#EBEBEC] rounded-tl-xl rounded-bl-xl rounded-br-xl p-2">
              <p>Dra. Marcela ficará de licença por 2 meses</p>
            </div>
          </div>
          <div className="flex justify-start w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#DEEAFF] rounded-bl-xl rounded-br-xl rounded-tr-xl p-2">
              <p>
                Ok, Dra. Marcela não irá atender pacientes durante os próximos 2
                meses, os agendamentos vinculados a ela foram desmarcados.
              </p>
            </div>
          </div>

          <p className="text-center my-3">5 de abril 2024</p>

          <div className="flex justify-end w-full my-3">
            <div className="w-1/3 bg-[#EBEBEC] rounded-tl-xl rounded-bl-xl rounded-br-xl p-2">
              <p>Dra. Marcela ficará de licença por 2 meses</p>
            </div>
          </div>
          <div className="flex justify-start w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#DEEAFF] rounded-bl-xl rounded-br-xl rounded-tr-xl p-2">
              <p>
                Ok, Dra. Marcela não irá atender pacientes durante os próximos 2
                meses, os agendamentos vinculados a ela foram desmarcados.
              </p>
            </div>
          </div>

          <p className="text-center my-3">5 de abril 2024</p>

          <div className="flex justify-end w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#EBEBEC] rounded-tl-xl rounded-bl-xl rounded-br-xl p-2">
              <p>Dra. Marcela ficará de licença por 2 meses</p>
            </div>
          </div>
          <div className="flex justify-start w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#DEEAFF] rounded-bl-xl rounded-br-xl rounded-tr-xl p-2">
              <p>
                Ok, Dra. Marcela não irá atender pacientes durante os próximos 2
                meses, os agendamentos vinculados a ela foram desmarcados.
              </p>
            </div>
          </div>

          <p className="text-center my-3">5 de abril 2024</p>

          <div className="flex justify-end w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#EBEBEC] rounded-tl-xl rounded-bl-xl rounded-br-xl p-2">
              <p>Dra. Marcela ficará de licença por 2 meses</p>
            </div>
          </div>
          <div className="flex justify-start w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#DEEAFF] rounded-bl-xl rounded-br-xl rounded-tr-xl p-2">
              <p>
                Ok, Dra. Marcela não irá atender pacientes durante os próximos 2
                meses, os agendamentos vinculados a ela foram desmarcados.
              </p>
            </div>
          </div>

          <p className="text-center my-3">5 de abril 2024</p>

          <div className="flex justify-end w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#EBEBEC] rounded-tl-xl rounded-bl-xl rounded-br-xl p-2">
              <p>Dra. Marcela ficará de licença por 2 meses</p>
            </div>
          </div>
          <div className="flex justify-start w-full my-3">
            <div className="w-2/4 max-w-[400px] bg-[#DEEAFF] rounded-bl-xl rounded-br-xl rounded-tr-xl p-2">
              <p>
                Ok, Dra. Marcela não irá atender pacientes durante os próximos 2
                meses, os agendamentos vinculados a ela foram desmarcados.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 relative">
          <Input placeholder="Digite aqui" className="placeholder:text-xs placeholder:text-[#666870] border-[#B4B6BB]" />
          <div className="absolute top-3 right-5">
            <BiSend color="#2955D9" className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </main>
  );
}
