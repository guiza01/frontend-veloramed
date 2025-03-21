"use client"
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import Image from 'next/image';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../ui/select';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Agenda');
  const [selectedProfile, setSelectedProfile] = useState("1");

  const profiles = [
    { id: "1", name: "Dra. Carla Fernandez", avatar: "/icone-perfil.jpg" },
    { id: "2", name: "Dra. Carla Fernandez", avatar: "/icone-perfil.jpg" },
    { id: "3", name: "Dra. Carla Fernandez", avatar: "/icone-perfil.jpg" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-400 p-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Image
          src="/logoVerolaMenor.png"
          alt="Logo"
          width={30}
          height={30}
        />
        <ul className="hidden md:flex gap-6 text-sm">
          {[{ name: 'Integração', path: '/engagemed/integration' },
          { name: 'Agenda', path: '/engagemed/agenda' },
          { name: 'Pacientes', path: '/engagemed/patients' },
          ].map((item) => (
            <li key={item.name} onClick={() => handleTabClick(item.name)}
              className={`p-2 rounded-md cursor-pointer hover:bg-gray-100 ${activeTab === item.name ? 'text-[#2955D9] border border-[#2955D9]' : ''}`}>
              <Link href={item.path} className="flex items-center gap-2">
                <MdOutlineDashboard /> {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-4">
        {activeTab === 'Agenda' && (
          <Select value={selectedProfile} onValueChange={setSelectedProfile}>
            <SelectTrigger className="w-60 border border-gray-300 p-2 rounded-md">
              <SelectValue placeholder="Selecione um perfil" />
            </SelectTrigger>
            <SelectContent>
              {profiles.map(profile => (
                <SelectItem key={profile.id} value={profile.id} >
                  <div className='flex items-center gap-2'>
                    <img src={profile.avatar} alt="Icone do perfil" className='w-6 h-6' />
                    {profile.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <Link href="/" className="p-2 rounded-md hover:bg-gray-100 flex items-center gap-2">
          <IoIosLogOut size={20} /> Sair
        </Link>
      </div>
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start p-4">
          {[{ name: 'Integração', path: '/engagemed/integration' },
          { name: 'Agenda', path: '/engagemed/agenda' },
          { name: 'Histórico', path: '/engagemed/patients' },
          ].map((item) => (
            <Link key={item.name} href={item.path} className="p-2 w-full hover:bg-gray-100">
              {item.name}
            </Link>
          ))}
          <Select value={selectedProfile} onValueChange={setSelectedProfile}>
            <SelectTrigger className="w-full border border-gray-300 p-2 rounded-md">
              <SelectValue placeholder="Selecione um perfil" />
            </SelectTrigger>
            <SelectContent>
              {profiles.map(profile => (
                <SelectItem key={profile.id} value={profile.id}>
                  {profile.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Link href="/" className="p-2 w-full hover:bg-gray-100 flex items-center gap-2">
            <IoIosLogOut size={20} /> Sair
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
