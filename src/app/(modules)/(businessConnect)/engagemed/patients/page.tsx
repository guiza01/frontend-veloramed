import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { IPatients } from "@/types/IPatients";
import { Plus } from "lucide-react";
import { MdOutlineFilterAlt, MdSearch } from "react-icons/md";

export default function PatientsPage() {
    const mockPatients: IPatients[] = [
        {
            name:"Maria Elisângela dos Santos",
            email:"email@exemplo.com",
            agreement: "Unimed",
            phone: "(71) 9 8888-8888"
        },
        {
            name:"Maria Elisângela dos Santos",
            email:"email@exemplo.com",
            agreement: "Unimed",
            phone: "(71) 9 8888-8888"
        },
        {
            name:"Maria Elisângela dos Santos",
            email:"email@exemplo.com",
            agreement: "Unimed",
            phone: "(71) 9 8888-8888"
        },
        {
            name:"Maria Elisângela dos Santos",
            email:"email@exemplo.com",
            agreement: "Unimed",
            phone: "(71) 9 8888-8888"
        },
        {
            name:"Maria Elisângela dos Santos",
            email:"email@exemplo.com",
            agreement: "Unimed",
            phone: "(71) 9 8888-8888"
        },
        {
            name:"Maria Elisângela dos Santos",
            email:"email@exemplo.com",
            agreement: "Unimed",
            phone: "(71) 9 8888-8888"
        }
        
    ] 

  return (
    <main className="w-full min-h-screen 2xl:max-w-[1300px] mx-auto flex flex-col p-4 px-2">
      <div className="flex justify-between flex-col md:flex-row">
        <h1 className="font-semibold text-xl mb-3">Pacientes</h1>

        <div className="flex gap-3">
          <Button
            variant={"outline"}
            className="flex items-center gap-2 justify-center bg-transparent border-[#1E1E1E]"
          >
            <MdSearch size={18} />
            Buscar
          </Button>
          <Button
            variant={"outline"}
            className="flex items-center gap-2 justify-center bg-transparent border-[#1E1E1E]"
          >
            <MdOutlineFilterAlt size={18} />
            <span className="hidden md:flex">Filtrar</span>
          </Button>
          <Button
            className="flex items-center gap-2 justify-center border-[#1E1E1E]"
          >
            <Plus size={18} />
            Novo paciente
          </Button>
        </div>
      </div>
      {mockPatients.map((patient, index) => (
       
        <div key={index} className="mt-4 p-4 bg-white rounded-xl flex justify-between items-center">
            <div className="flex flex-col" key={index}>
                <span>{patient.name}</span>
                <div className="flex flex-col items-start md:items-center md:justify-start md:flex-row md:divide-x w-full text-xs text-[#666870]">
                    <span className="text-center px-2">{patient.agreement}</span>
                    <span className="text-center px-2">{patient.phone}</span>
                    <span className="text-center px-2">{patient.email}</span>
                </div>
            </div>
            <Button
            variant={"outline"}
            className="flex items-center gap-2 justify-center bg-transparent border-[#1E1E1E]"
          >
            Detalhes
          </Button>
        </div>
      ))}

<div className="overflow-x-auto">
  <Pagination className="w-full mt-4">
        <PaginationContent className="flex w-full justify-between bg-white rounded-md py-2">
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <div className="flex">
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-[#2955D9] text-xs rounded-[8px]"><span className="text-white">1</span></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="text-xs" href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="text-xs" href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className="text-xs" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="text-xs" href="#">
                  8
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="text-xs" href="#">
                  9
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="text-xs" href="#">
                  10
                </PaginationLink>
              </PaginationItem>
          </div>
          <PaginationItem>
            <PaginationNext href="#"/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
</div>
      
    </main>
  );
}
