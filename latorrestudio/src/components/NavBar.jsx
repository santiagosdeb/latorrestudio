import { useState } from "react";
import { BiCalendar, BiHomeAlt  } from "react-icons/bi";
import { RxScissors } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsInstagram, BsWhatsapp  } from "react-icons/bs";
import { IoMdCash, IoIosArrowBack } from "react-icons/io";
import { MdOutlinePayment, MdPhonelink } from "react-icons/md";
import { SiMercadopago } from "react-icons/si";
import { TbBrandStackshare } from "react-icons/tb";

import logo from '../assets/latoLogo.png'



const NavBar = () => {
  const [open, setOpen] = useState(true);
  const items = [
    {titulo: "Inicio", logo: <BiHomeAlt size={26}  /> },
    {titulo: "Turnos", logo: <BiCalendar size={26}  />},
    {titulo: "Cortes", logo: <RxScissors size={26}  />},
    {titulo: "Ubicacion", logo: <FaMapMarkerAlt  size={26}  />},
  ];
  const redes = [
    {titulo: "Seguinos en Instagram!", logo: <BsInstagram size={25}/>},
    {titulo: "Contactanos por Whatsapp!", logo: <BsWhatsapp size={25}/> },
  ]
  
  return (
    <div className={`${open ? 'w-60' : 'w-24'} duration-500 h-screen p-4 pt-8 bg-lato-red fixed`}>
      
      <IoIosArrowBack className={`absolute cursor-pointer rounded-full -right-3 top-9 border-2 border-black text-black bg-white w-[24px] h-[24px] items-center mx-auto ${!open && 'rotate-180'} duration-500`} onClick={()=>setOpen(!open)}/>
      <div className="flex gap-x-4 items-center justify-center">
        <img src={logo} className={`w-12 duration-500 cursor-pointer`}/>
        <h4 className={`text-white ${!open && 'hidden'} duration-500 origin-left font-medium`}>LatorreStudio</h4>
      </div>
      <ul className={`pt-6 ${!open ? 'flex flex-col items-center' : ''}`}>
        {items.map((item, index) => (
          <li key={index} className={`flex text-white items-center gap-x-4 my-3 cursor-pointer p-2 hover:bg-light-white rounded-md`}>
            <div>{item.logo}</div>
            <span className={`${!open && 'hidden'} duration-300 origin-left font-medium`}> {item.titulo} </span>
          </li>
        ))}
      </ul>
      <div className='pt-10'>
        {/* con navbar cerrada un icono en vez de wp e ig <div className={`flex flex-col text-white items-center my-3 cursor-pointer p-2 hover:bg-light-white rounded-md ${open && 'hidden'}`}> <MdPhonelink size={28}/> </div> */}
        {/* con navbar cerrada un icono en vez de wp e ig <div className={`flex flex-col text-white items-center my-3 cursor-pointer p-2 hover:bg-light-white rounded-md ${open && 'hidden'}`}> <TbBrandStackshare size={28}/> </div> */}
        <h4 className={`text-center text-white text-[19px] ${!open && 'hidden'} transition duration-1000 font-medium`}>Contacto</h4>
        <ul className={`${open ? 'flex justify-around transition-all duration-500' : 'flex flex-col items-center transition-all duration-500' }`}>
        {/* si usas un icono, se esconden wp e ig <ul className={`${open ? 'flex justify-around transition-all duration-500' : 'hidden' }`}> */}
          {redes.map((red, index) => (
            <li key={index} className={`text-white items-center my-3 cursor-pointer p-2 hover:bg-light-white rounded-md`} >  
              <div>{red.logo}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`pt-10`}>
        <div className={`flex flex-col text-white items-center cursor-pointer p-2 hover:bg-light-white rounded-md ${open && 'hidden'}`}> <MdOutlinePayment size={28}/> </div>
        <h4 className={`text-center text-white text-[19px] ${!open && 'hidden'} transition duration-1000 font-medium`}>Metodos de pago</h4>
        <ul className={`${open ? 'flex justify-around transition-all duration-500' : 'hidden'}`}>
          <li className={`text-blue-500 items-center my-3 cursor-pointer p-2 hover:bg-light-white rounded-md`}> <SiMercadopago size={29}/> </li>
          <li className={`text-green-600 items-center my-3 cursor-pointer p-2 hover:bg-light-white rounded-md`}> <IoMdCash size={29}/> </li>
        </ul>      
      </div>
    </div>
  )
}

export default NavBar

//     