"use client"
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LuSquareUser, LuStethoscope } from 'react-icons/lu';
import { MdOutlineDashboard } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [gestaoOpen, setGestaoOpen] = useState(false);
  const [cadastroOpen, setCadastroOpen] = useState(false);

  useEffect(() => {
    setGestaoOpen(pathname.includes('/gestao'));
    setCadastroOpen(pathname.includes('/cadastro'));
  }, [pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform md:translate-x-0 ${isOpen ? 'translate-x-0 z-10' : '-translate-x-full'} md:block overflow-y-auto`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className='flex items-center justify-start w-full'>
            <Image
              src="/logoVerola.png"
              alt="Descrição da imagem"
              width={150}
              height={50}
            />
          </div>
          <button onClick={toggleSidebar} className="text-2xl md:hidden">
            <FiX />
          </button>
        </div>
        <ul className="p-4 space-y-4 text-sm">
          <li className={`p-2 rounded-md cursor-pointer hover:bg-gray-100 ${pathname === '/administrator/businessConnect/dashboard' ? 'text-[#2955D9] border border-[#2955D9]' : ''}`}>
            <Link href="/administrator/businessConnect/dashboard" className="flex items-center">
              <MdOutlineDashboard className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="p-2 rounded-md cursor-pointer hover:bg-gray-100" onClick={() => setGestaoOpen(!gestaoOpen)}>
            <div className="flex items-center justify-between">
              <span className={`flex items-center ${gestaoOpen ? 'text-[#2955D9]' : ''}`}>
                <LuSquareUser className="mr-2" /> Gestão
              </span>
              <FiChevronDown className={`${gestaoOpen ? 'rotate-180' : ''} transition-transform`} />
            </div>
            {gestaoOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li className={`${pathname.includes('/gestao/medicos') ? 'text-[#2955D9]' : ''}`}>
                  <Link href="/administrator/businessConnect/gestao/medicos" className="block p-2 hover:bg-gray-100">Médicos</Link>
                </li>
                <li className={`${pathname.includes('/gestao/atendentes') ? 'text-[#2955D9]' : ''}`}>
                  <Link href="/administrator/businessConnect/gestao/atendentes" className="block p-2 hover:bg-gray-100">Atendentes</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="p-2 rounded-md cursor-pointer hover:bg-gray-100" onClick={() => setCadastroOpen(!cadastroOpen)}>
            <div className="flex items-center justify-between">
              <span className={`flex items-center ${cadastroOpen ? 'text-[#2955D9]' : ''}`}>
                <LiaClipboardListSolid className="mr-2" /> Cadastro
              </span>
              <FiChevronDown className={`${cadastroOpen ? 'rotate-180' : ''} transition-transform`} />
            </div>
            {cadastroOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li className={`${pathname.includes('/cadastro/convenios') ? 'text-[#2955D9]' : ''}`}>
                  <Link href="/administrator/businessConnect/cadastro/convenios" className="block p-2 hover:bg-gray-100">Convênios</Link>
                </li>
                <li className={`${pathname.includes('/cadastro/tabelas') ? 'text-[#2955D9]' : ''}`}>
                  <Link href="/administrator/businessConnect/cadastro/tabelas" className="block p-2 hover:bg-gray-100">Tabela de valores</Link>
                </li>
                <li className={`${pathname.includes('/cadastro/agenda') ? 'text-[#2955D9]' : ''}`}>
                  <Link href="/administrator/businessConnect/cadastro/agenda" className="block p-2 hover:bg-gray-100">Agenda</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="border-t border-gray-300 p-4">
          <h3 className="text-sm">Módulos</h3>
          <ul className="mt-2 space-y-4 text-sm">
            <li className="p-2 rounded-md cursor-pointer hover:bg-gray-100 bg-[#ECF2FF] text-[#2955D9]">
              <Link href="#" className="flex items-center gap-2">
                <Image width={14} height={22} alt="adm clinico" src="/graph_5.png" /> Business Connect
              </Link>
            </li>
            <li className="p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <Link href="#" className="flex items-center">
                <LuStethoscope className="mr-2" color='#F4AD27' size={16} /> Med Assist
              </Link>
            </li>
            <li className="p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <Link href="#" className="flex items-center gap-2">
                <Image width={14} height={22} alt="adm clinico" src="/agenda.svg" /> Engage Med
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <Link href="/" className="w-full text-left flex p-4 hover:bg-gray-100 gap-2">
            <IoIosLogOut size={20} /> Sair
          </Link>
        </div>
      </div>
      <div className="p-2 w-full border-b md:hidden">
        <button onClick={toggleSidebar} className={`text-2xl md:hidden`}>
          <FiMenu />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
