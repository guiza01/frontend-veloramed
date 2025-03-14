"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { MdSearch } from "react-icons/md";
import WeekTable from "./components/WeekTable";
import DailyTable from "./components/DailyTable";
import { ptBR } from "date-fns/locale"; // Importando o locale em português

export default function AgendaPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main className="w-full min-h-screen 2xl:max-w-[1300px] mx-auto flex flex-col p-4 px-6">
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl mb-8">Agenda</h1>

        <Tabs className="mb-4" defaultValue="weekly">
          <div className="flex w-full justify-between">
            <TabsList className="flex gap-1 w-[200px] bg-transparent">
              <TabsTrigger className="w-full bg-white" value="weekly">
                Semanal
              </TabsTrigger>
              <TabsTrigger className="w-full bg-white" value="daily">
                Diária
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2 items-center">
              <Button
                variant={"outline"}
                className="flex items-center gap-2 justify-center bg-transparent border-[#1E1E1E]"
              >
                <MdSearch size={18} />
                Buscar
              </Button>
              <div className="flex gap-2"><Switch /><span className="text-sm">Mostrar domingos</span></div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full flex mt-4 max-w-[350px]">
              <div className="flex flex-col gap-3">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={ptBR}

                  className="rounded-md border bg-white w-[300px] flex justify-center capitalize"
                />
                <div className="bg-white w-[300px] p-3 rounded-md">
                  <h1 className="text-sm text-[#666870]">Status</h1>
                  <div className="h-px w-full bg-[#EBEBEC] my-2"></div>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-4 h-4 bg-[#2955D9] rounded-md"></div>
                    Agendado
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-4 h-4 bg-[#22B257] rounded-md"></div>
                    Confirmado
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-4 h-4 bg-[#27B9F2] rounded-md"></div>
                    Chegou
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-4 h-4 bg-[#F23E2E] rounded-md"></div>
                    Cancelado
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-4 h-4 bg-[#F4AD27] rounded-md"></div>
                    Faltou
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-4 h-4 bg-[#9A9CA2] rounded-md"></div>
                    Finalizado
                  </Button>
                </div>
                <div className="bg-white w-[300px] p-3 rounded-md">
                  <h1 className="text-sm text-[#666870]">Tipo de consulta</h1>
                  <div className="h-px w-full bg-[#EBEBEC] my-2"></div>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-5 h-6 bg-[#EBEBEC] rounded-md flex justify-center items-center text-[#4D5056]">
                      1
                    </div>
                    Primeira consulta
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-5 h-6 bg-[#EBEBEC] rounded-md flex justify-center items-center text-[#4D5056]">
                      R
                    </div>
                    Reagendamento
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="w-full flex justify-start"
                  >
                    <div className="w-5 h-6 bg-[#EBEBEC] rounded-md flex justify-center items-center text-[#4D5056]">
                      S
                    </div>
                    Subsequente
                  </Button>
                </div>
              </div>
            </div>
            <TabsContent value="weekly" className="overflow-x-auto">
              <WeekTable />
            </TabsContent>
            <TabsContent value="daily" className="overflow-x-auto">
              <DailyTable />
            </TabsContent>
          </div>
        </Tabs>

      </div>
    </main>
  );
}
