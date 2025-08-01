'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import HoverCards from "./components/Hovercards";
import * as Icons from 'react-icons/fa';
import * as Iconspi from 'react-icons/pi';
import * as Iconstb from 'react-icons/tb';
import * as Iconsgr from 'react-icons/gr';
import * as Iconslia from 'react-icons/lia';
import Link from 'next/link';
import CargoShip from "./components/Cargoship";
import { Button } from "@/components/ui/button"
import { motion, useAnimation, AnimatePresence  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {allServices} from './ServiceData';
import AnimatedContent from "./blocks/Animations/AnimatedContent/AnimatedContent";
import { BsArrowUpRightCircle, BsTruckFront } from "react-icons/bs";
import LogoCarousel from "./components/Logocarosel";
import { useEffect, useState } from "react";
import { FaChartLine, FaCloud, FaLaptopCode, FaMobileAlt, FaPalette, FaShieldAlt } from "react-icons/fa";
import { PiShippingContainer, PiWarehouse } from "react-icons/pi";
import { TbCrane } from "react-icons/tb";
import { GrDocumentVerified } from "react-icons/gr";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { GiShipBow } from "react-icons/gi";
import { FaTruckPlane } from "react-icons/fa6";
import { BiPlanet } from "react-icons/bi";
import CountUp from "./blocks/TextAnimations/CountUp/CountUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { footer } from "framer-motion/client";
import Footer from "./components/Footer";
import { FiArrowRight } from "react-icons/fi";
// import ContactForm from "./components/Contactform";






const teamData = {
    members: [
        {
        id: 1,
        name: 'Alh Nofiu Inaolaji Liadi',
        role: 'CEO',
        img: '/p1.jpg',
        },
        {
        id: 2, 
        name: 'Alhaja Liadi Basirat A.',
        role: 'Head of Administration',
        img: '/aunty.png',
        },
        {
        id: 3,
        name: 'Adesandi Bakare',
        role: 'Operation Manager',
        img: '/bakare.png',
        },
        
    ],
}


const allServices1 = [
    {
      title: 'Shipping',
      image: '/shipingt.jpg',
      icon: <PiShippingContainer  className="text-4xl text-indigo-500" />,
      description:
        'Modern, responsive websites built with best practices and optimized performance.',
    },
    {
      title: 'Custom Bonded Warehousing',
      image: '/warehouse.jpg',
      icon: <PiWarehouse  className="text-4xl text-pink-500" />,
      description:
        'Beautiful and intuitive interfaces that focus on user experience and accessibility.',
    },
    {
      title: 'Export Processing Terminal (EPT)',
      image: '/terminal.jpg',
      icon: <TbCrane className="text-4xl text-green-500" />,
      description:
        'Boost your online presence with SEO strategies and data-driven decisions.',
    },
    {
      title: 'Clearing and Forwarding',
      image: '/paperwork.jpg',
      icon: <GrDocumentVerified className="text-4xl text-purple-500" />,
      description:
        'Cross-platform mobile apps with smooth performance and stunning design.',
    },
    {
      title: 'Haulage',
      image: '/haulage.jpg',
      icon: <BsTruckFront className="text-4xl text-blue-500" />,
      description:
        'Reliable cloud solutions to scale your infrastructure and reduce downtime.',
    },
    {
      title: 'Import and Export Services',
      image: '/import.jpg',
      icon: <LiaPlaneDepartureSolid className="text-4xl text-red-500" />,
      description:
        'Protect your data and infrastructure with robust security practices.',
    },
  ];


export default function Home() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ scaleX: 1 });
    }
  }, [inView, controls]);

  const [showMore, setShowMore] = useState(false);
  const displayedServices = showMore ? allServices : allServices.slice(0, 3); 

  // const [showMoreteam, setShowMoreteam] = useState(false);
  // const displayedTeam = showMoreteam ? teamDetails : teamDetails.slice(0, 3); 
 
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1.8,
        type: 'spring',
        stiffness: 60,
      },
    }),
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };


  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  

  return (
    <>
      <Navbar />
      <main>
        {/* hero section  */}
        <section className="relative  h-screen w-full overflow-hidden rounded-t-[0px] rounded-[0px] bg-black text-white">
          {/* <Image src="/bg1.jpg" alt="Container image" fill className="object-cover" quality={100} priority /> bg image */}
          <video autoPlay loop muted playsInline className="absolute inset-0 object-cover w-full h-full z-0 ">
            <source src="/bgvid.mp4" type="video/mp4" />
            your browser does not support the video tag.
          </video>


          <div className="absolute inset-0 bg-black/50 z-10" />
          {/* Hero Content */}
          <div className="absolute z-20 bottom-10 md:items-start p-3 md:bottom-24 md:left-12 max-w-5xl h-auto flex flex-col justify-end">
            <AnimatedContent delay={1}>
            <h2 className="md:text-8xl text-4xl md:font-light font-medium mb-7 leading-tight">
              Your Trusted Logistics Partner Across Borders
            </h2>
            </AnimatedContent>
            <AnimatedContent delay={1.2}>
            <h2 className="md:text-4xl text-[28px] font-light mb-6 leading-tight">
              End to End Logistics that <br /> works for you
            </h2>
            </AnimatedContent>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay:1.6 ,duration: 0.7 }} viewport={{ once: true }}>
            <Link href={'/contact'} target="_blank">
              <Button variant="outline" className="rounded-full border-[#F08825] w-fit text-[#F08825] bg-[#f0444400] hover:bg-[#F08825] hover:text-white">
                Get Started
              </Button>
            </Link>
            </motion.div>
            
          </div>
          <div className="absolute overflow-hidden hidden  p-4 z-20 bottom-20 right-10 hover:rotate-135 transition w-[80px] cursor-pointer h-[80px] rounded-full text-black shadow-xl md:flex flex-col justify-between bg-white">
            {/* <Image src='/cargo-ship.gif' alt="ship" fill quality={100}  /> */}
            <BsArrowUpRightCircle className=" h-full w-full text-[#F08825]" />
          </div>  
        </section>

        {/* logo carosel  */}
        <LogoCarousel />
        
        {/* about us section  */}
        <section className=" md:mt-[10rem] md:flex-wrap md:mb-[10rem] w-full py-10 md:px-[20rem] my-10 px-6 h-[700px] relative flex flex-col md:flex-row overflow-hidden">
          <div className=" w-[100%] md:w-[40%] my-7 md:my-0 md:h-full flex flex-col items-start justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl w-fit font-light mb-5 py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]"
              >
                Why Choose Us
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:text-4xl w-fit font-light text-left mb-0 py-3 px-0 text-[18px]"
              >
                From Customs to Clearing all Under One Roof
              </motion.h2>
            </div>

            <Link href={'/aboutus'} target="_blank" className=" flex items-center pointer text-lg underline hover:text-[#f08825] " >About us <FiArrowRight /> </Link>
          </div>
          
          <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? {opacity: 1, y:0} : {}} transition={{duration:0.6}} className="w-[100%] md:w-[60%] h-full relative overflow-hidden rounded-4xl">
            <Image src="/bg-29.jpg" alt="Container image" fill className="object-cover" quality={100} priority />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <motion.div  initial={{ opacity: 0, y: -40, scale:0.8 }} animate={inView ? {opacity: 1, y:0, scale:1,} : {}} transition={{duration:0.9}} className="absolute bg-[#ffffff45] z-20 text-white h-auto md:h-[300px] md:bottom-9 md:left-9 md:right-9 bottom-1 left-1 right-1 rounded-4xl backdrop-blur-sm flex justify-start items-end p-3 md:p-7" >
              <h1 className="md:text-[22px] text-[15px] leading-[1.2] md:leading-snug">Harlink Investment is a leading freight forwarding and logistics company based in Lagos Nigeria. With a strong presence across major ports and trade routes, we specialize in shipping, customs clearance, bonded warehousing, haulage, and comprehensive import-export services.  <span className="text-[#f08825] "> Our goal is to simplify trade for businesses of all sizes by offering reliable, end-to-end logistics solutions. </span> </h1>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ scaleX: 0 }}
            animate={controls}
            transition={{ duration: 2.5, ease: "easeIn" }}
            className="origin-left my-5 rounded-full bottom-0 h-[7px] w-full bg-gray-500"
          />
        </section>

        {/* services section   */}
        <section id="services" className="w-full py-10 md:mb-[10rem] md:px-[20rem] px-2 min-h-[700px] relative flex flex-col md:flex-row overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl w-fit font-light mb-5 py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]"
            >
              Our Services
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:text-4xl w-fit font-light text-left mb-4 py-3 px-0 text-[18px]"
            >
              Tailored solutions for your business <br /> requirements
            </motion.h2>


            <div className="grid p-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {displayedServices.map((service, index) => {
                  // const Icon = Iconsgr[service.icon as keyof typeof iconsgr];
                  return(
                    <Link target="_blank" key={service.slug} href={`/pages/${service.slug}`}>
                    
                      <motion.div
                        key={service.title}
                        custom={index}
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ delay: index * 0.15, duration: 1.8, type: 'spring', stiffness: 60 }}
                        viewport={{ once: true }}
                        className="bg-white overflow-hidden p-0 relative h-[500px] flex flex-col justify-end rounded-2xl shadow-md border group hover:shadow-lg transition-all"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          className="absolute hover:scale-[1.1] transition ease-out duration-700 inset-0 w-full h-full object-cover rounded-2xl "
                          fill
                          quality={100}
                          priority
                        />
                        <div className=" backdrop-blur-xs group hover:bg-[#f087251c] transition-all duration-200 ease-in bg-[#ffffff45] text-white p-6 z-10 flex flex-col items-center text-center">
                          <Image src={service.iconGif} alt="gifff" width={50} height={50} />
                          {/* <div className="mb-4 flex justify-center">{service.icon}</div> */}
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-gray-200 text-sm">{service.description}</p> 
                        </div>
                      </motion.div>
                    </Link>
                  )
                })}
              </AnimatePresence>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-2 rounded-full text-white bg-[#F08825] hover:bg-[#f08725] transition ease-in"
              >
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>

        </section>  

        {/* more info section  */}
        <section className="w-full md:mb-[10rem] flex-wrap my-13 py-10 md:px-[20rem] px-2 min-h-[600px]  relative flex flex-col md:flex-row overflow-hidden">
          <div className="  max-w-7xl md:w-[50%] rounded-t-[30px] rounded-tr-none mx-auto py-6 bg-[#F5F7F9] md:rounded-l-[30px] px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl w-fit font-light mb-5 py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]"
            >
              Preparing your Future
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:text-4xl w-fit font-light text-left mb-4 py-3 px-0 text-[18px]"
            >
              Delivering Excellence Across Industries
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:text-[20px] w-fit font-light text-left mb-4 py-3 px-0 text-[18px]"
            >
              more random word to out here baby let give what you want why you dey form for me baby let me give you what you need but you still dey form for me baby let me give you what you want
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-7 mt-6 justify-start">
                <PiWarehouse className="text-4xl text-[#F08825] mr-4" />
                <PiShippingContainer className="text-4xl text-[#F08825] mr-4" />
                <FaTruckPlane  className="text-4xl text-[#F08825] mr-4" />
                <BiPlanet className="text-4xl text-[#F08825] mr-4" />
                
            </motion.div>  

          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:w-[50%] w-full h-[300px] relative rounded-bl-none rounded-b-[30px] md:h-auto md:rounded-r-[30px] bg-amber-300 mx-auto px-4 overflow-hidden ">
            <Image src="/bg-293.jpg" alt="Container image" fill className="object-cover" quality={100} priority />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeIn" }}
            className="origin-left mt-5 rounded-full bottom-0 h-[7px] w-full bg-gray-500"
          />
          {/* <motion.div
            
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeIn" }}
            className="origin-right  rounded-full bottom-0 h-[7px] w-full bg-gray-500"
          /> */}
        </section>

        {/* stats section  */}
        <section className="w-full bg-[#F5F7F9] md:mb-[10rem] py-10 md:px-[20rem] px-2 min-h-[80vh] relative flex flex-col md:flex-row overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 text-center flex flex-col  justify-between gap-10">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-start items-start w-[350px] "
                >
                  <h1 className=" text-4xl md:text-5xl">Active Clients </h1>
                  <h2 className=" text-6xl md:text-[7rem] md:leading-22 font-light" ><CountUp from={0} to={500} separator="," direction="up" duration={3} className="count-up-text"  /></h2>
                  <p className="text-md text-left">We provide best customer tody over the wrold service </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-start items-start w-[350px] "
                >
                  <h1 className="text-4xl md:text-5xl">Active Clients </h1>
                  <h2 className="text-6xl md:text-[7rem] md:leading-22 font-light" ><CountUp from={0} to={14} separator="," direction="up" duration={6} className="count-up-text"  />M</h2>
                  <p className="text-md text-left">We provide best customer service </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-start items-start w-[350px] mb-7 md:mb-0"
                >
                  <h1 className="text-4xl md:text-5xl">Solutions </h1>
                  <h2 className="text-6xl md:text-[7rem] md:leading-22 font-light" ><CountUp from={0} to={15} separator="," direction="up" duration={4} className="count-up-text"  />k</h2>
                  <p className="text-md text-left">We provide best customer service </p>
                </motion.div>
           </div>
           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:w-[50%] w-full h-[500px] relative rounded-bl-none rounded-b-[30px] md:h-auto rounded-t-[30px] md:rounded-r-[30px] mx-auto px-4 overflow-hidden ">
            <Image src="/bg-20.jpg" alt="Container image" fill className="object-cover" quality={100} priority />
            <div className="absolute inset-0 bg-black/0 z-10" />
          </motion.div>
        </section>


        {/* team section  */}
        <section id="team" className="w-full md:mb-[10rem]  py-10 md:px-[20rem] px-2 min-h-[700px] relative flex flex-col md:flex-row overflow-hidden ">
            <div className="max-w-7xl px-4 w-full text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl w-fit font-light mb-5 py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]"
              >
                Our Team
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:text-4xl w-fit font-light text-left mb-4 py-3 px-0 text-[18px]"
              >
                Dedicated Smart and Creative <br /> Individuals For the Job 
              </motion.h2>

              <div className="grid p-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0">
                <AnimatePresence>
                  {teamData.members.map((team, index) => {
                    return(
                        <motion.div
                          key={team.id}
                          custom={index}
                          initial={{opacity: 0, y: 50}}
                          whileInView={{opacity: 1, y: 0}}
                          transition={{ delay: index * 0.15, duration: 1.8, type: 'spring', stiffness: 60 }}
                          viewport={{ once: true }}
                          className="bg-white overflow-hidden p-0 relative h-[400px] w-[300px] flex flex-col justify-end rounded-2xl shadow-md border group hover:shadow-lg transition-all"
                        >
                          
                          <Image src={team.img} alt={team.name} className="absolute hover:scale-[1.1] transition ease-out duration-700 inset-0 w-full h-full object-cover rounded-2xl" fill quality={100} priority />
                          <div className=" backdrop-blur-xs group hover:bg-[#f087251c] transition-all duration-200 ease-in bg-[#f087251c] text-white p-6 z-10 flex flex-col items-center text-center">
                            
                            <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
                            <p className="text-gray-200 text-sm">{team.role}</p> 
                          </div>
                        </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>

              <div className="mt-10">
                <Link href={'/aboutus/#team'} target="_blank" >
                
                <button
                  className="px-6 py-2 rounded-full text-white bg-[#F08825] hover:bg-[#f08725] transition ease-in"
                >
                  See More
                </button>
                </Link>
              </div>


            </div>
        </section>

        {/* FAQ section  */}
        <section className="w-full md:mb-[20rem] py-10 md:px-[20rem] my-20 flex-wrap px-2 min-h-[80vh] relative flex flex-col md:flex-row overflow-hidden">
            
          <div className="  max-w-7xl md:w-[50%] rounded-t-[30px] rounded-tr-none mx-auto py-6 md:rounded-l-[30px] px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl w-fit font-light mb-5 py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]"
            >
             Frequently Asked Questions
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:text-4xl w-fit font-light text-left mb-4 py-3 px-0 text-[18px]"
            >
              Learn more from about us and what we offer twin 
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:text-[20px] w-fit font-light text-left mb-4 py-3 px-0 text-[18px]"
            >
              more random word to out3 you what you u still dey form for me baby let me give you what you want
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-7 mt-6 justify-start">
                
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1"> 
                <AccordionItem className="border-1 rounded-md mb-5" value="item-1">
                  <AccordionTrigger className=" px-2 border-b ">AI is the future of Logistics automation </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance border-b">
                    <p>
                      Our flagship product combines cutting-edge technology with sleek
                      design. Built with premium materials, it offers unparalleled
                      performance and reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-1 rounded-md  mb-5" value="item-2">
                  <AccordionTrigger className=" px-2 border-b ">Do you offer services world wide?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance border-b">
                    <p>
                      Our flagship product combines cutting-edge technology with sleek
                      design. Built with premium materials, it offers unparalleled
                      performance and reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-1 rounded-md  mb-5" value="item-3">
                  <AccordionTrigger className=" px-2 border-b ">How do I reach you ?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance border-b">
                    <p>
                      Our flagship product combines cutting-edge technology with sleek
                      design. Built with premium materials, it offers unparalleled
                      performance and reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>  
            </motion.div>  

          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:w-[50%] w-full h-[300px] relative rounded-[30px] md:h-auto mx-auto px-4 overflow-hidden ">
            <Image src="/bg-41.jpg" alt="Container image" fill className="object-cover md:p-3 md:rounded-full " quality={100} priority />
            {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}

            <div className=" absolute bottom-1 md:bottom-17 z-10"><HoverCards title="Something hard" body="Be a good boy and ill give you money" icon={<PiShippingContainer  className="text-4xl text-indigo-500" />} /></div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeIn" }}
            className="origin-left mt-5 rounded-full bottom-0 h-[7px] w-full bg-gray-500"
          />


        </section>
        
        

        {/* contact form  */}
        {/* <ContactForm/> */}

        {/* footer section  */}
        <Footer/>


      </main>
    </>
  );
}
