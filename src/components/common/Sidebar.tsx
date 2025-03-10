"use client"
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { LuSquareUser } from 'react-icons/lu';
import { MdOutlineDashboard } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { LuStethoscope } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Integração');
  const [gestaoOpen, setGestaoOpen] = useState(false);
  const [cadastroOpen, setCadastroOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
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
          <li onClick={() => handleTabClick('Integração')} className={`p-2 rounded-md cursor-pointer hover:bg-gray-100 ${activeTab === 'Integração' ? 'text-[#2955D9] border border-[#2955D9]' : ''}`}>
            <Link href="/businessConnect/dashboard" className="flex items-center">
              <MdOutlineDashboard className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="p-2 rounded-md cursor-pointer hover:bg-gray-100" onClick={() => setGestaoOpen(!gestaoOpen)}>
            <div className="flex items-center justify-between">
              <Link href="#" className="flex items-center">
                <LuSquareUser className="mr-2" /> Gestão
              </Link>
              <FiChevronDown className={`${gestaoOpen ? 'rotate-180' : ''} transition-transform`} />
            </div>
            {gestaoOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li><Link href="/businessConnect/gestao/medicos" className="block p-2 hover:bg-gray-100">Médicos</Link></li>
                <li><Link href="/businessConnect/gestao/atendentes" className="block p-2 hover:bg-gray-100">Atendentes</Link></li>
              </ul>
            )}
          </li>
          <li className="p-2 rounded-md cursor-pointer hover:bg-gray-100" onClick={() => setCadastroOpen(!cadastroOpen)}>
            <div className="flex items-center justify-between">
              <Link href="#" className="flex items-center">
                <LiaClipboardListSolid className="mr-2" /> Cadastro
              </Link>
              <FiChevronDown className={`${cadastroOpen ? 'rotate-180' : ''} transition-transform`} />
            </div>
            {cadastroOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li><Link href="/businessConnect/cadastro/convenios" className="block p-2 hover:bg-gray-100">Convênios</Link></li>
                <li><Link href="/businessConnect/cadastro/tabela" className="block p-2 hover:bg-gray-100">Tabela de valores</Link></li>
                <li><Link href="/businessConnect/cadastro/agenda" className="block p-2 hover:bg-gray-100">Agenda</Link></li>
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
