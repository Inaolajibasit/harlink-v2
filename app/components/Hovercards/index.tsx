'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion';
import { LuWarehouse } from "react-icons/lu";

interface HoverCardProps {
  icon: ReactNode;
  title: string;
  body: string;
}

function HoverCards({icon, title, body}: HoverCardProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="group md:w-[300px] md:h-[83px] w-[250px] h-[70px] p-[12px] bg-[#efefef] rounded-3xl  md:rounded-4xl flex transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:bg-[#f3f3f3]"
    >
      <motion.div
        whileHover={{ rotate: 6 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-[50px] h-[50px] md:p-3 p-2 md:w-[60px] md:h-[60px] bg-[#F08825] flex justify-center items-center rounded-2xl"
      >
        {icon}
      </motion.div>
      <div className="flex w-[180px] flex-col pl-2 justify-center">
        <h1 className="font-bold leading-5 mb-1">{title}</h1>
        <h4 className="text-[14px] font-medium leading-3">{body}</h4>
      </div>
    </motion.div>
  );
}

export default HoverCards