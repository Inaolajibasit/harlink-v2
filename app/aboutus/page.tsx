'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamData = {
    members: [
        {
        name: 'Alh Nofiu Inaolaji Liadi',
        role: 'CEO',
        img: '/p1.jpg',
        },
        {
        name: 'Alhaja Liadi Basirat A.',
        role: 'Head of Administration',
        img: '/aunty.png',
        },
        {
        name: 'Adesandi Bakare',
        role: 'Operation Manager',
        img: '/bakare.png',
        },
        {
        name: 'Jimoh Mojeed',
        role: 'Frieght Clerk',
        img: '/mojeed.png',
        },
        {
        name: 'Olabiyi Muhsin',
        role: 'Frieght Clerk',
        img: '/muhsin.png',
        },
        {
        name: 'Adebayo Abass',
        role: 'Logistics Clerk',
        img: '/placeholder.png',
        },
        {
        name: 'Sikiru Aliu',
        role: 'Logistics Clerk',
        img: '/aliu.png',
        },
        {
        name: 'Abiona Sunkanmi',
        role: 'Logistics Clerk',
        img: '/sunkanmi.png',
        },
    ],
}

export default function AboutPage() {


  return (
    <>
      <Navbar />
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ duration: 0.6 }} className="relative h-72 md:h-96" >
        <Image src="/bg-42.jpg" alt="Container image" fill className="object-cover" quality={100} priority  />
        <div className="absolute inset-0 bg-black opacity-20" />
      </motion.section>
      <main className="md:mt-[10rem] md:flex-wrap md:mb-[10rem] w-full py-10 md:px-[20rem] my-10 px-6 min-h-[700px] relative flex flex-col md:flex-row overflow-hidden">
        {/* harlink overview  */}
        <div className='flex justify-center gap-2 flex-col md:flex-row'>
            <div className='md:w-[50%] p-3'>

                <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl w-fit font-light mb-5 py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]"
                >
                About Us
                </motion.h2>
                <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{  delay:1, duration: 0.8 }}
                viewport={{ once: true }}
                className="md:text-4xl w-fit font-light text-left mb-0 py-3 px-0 text-[20px]"
                >
                Harlink Investment LTD
                </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay:1.5,  duration: 0.8 }}
                viewport={{ once: true }}
                className="md:text-[18px] font-normal w-fit text-left mb-0 py-3 px-0 text-[18px]"
                >
                Harlink Investment is a trusted freight forwarding and logistics company based in Lagos Nigeria, with over 50 years of experience in the industry. We offer end-to-end logistics solutions including shipping, customs clearance, bonded warehousing, haulage, and import/export services.
                With a strong presence across major ports and trade routes, we’ve earned recognition for our reliability, compliance, and speed. Our team of seasoned logistics professionals ensures every shipment is handled with precision, from documentation to final delivery. Backed by decades of expertise and industry partnerships, Harlink simplifies trade for businesses of all sizes — locally and globally
                </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{opacity: 1, y: 0}} transition={{duration:0.6}} className="w-[100%] md:w-[50%] h-[400px] md:h-full relative overflow-hidden rounded-4xl">
                <Image src="/bg-222.jpg" alt="Container image" fill className="object-cover" quality={100} priority />
                <div className="absolute inset-0 bg-black/20 z-10" />
            </motion.div>
        </div>

        {/* Mission and Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10  md:mt-[10rem] md:ml-10 space-y-6 flex flex-col justify-center items-center md:flex-row md:space-x-10 bg-gray-50 p-6 rounded-lg shadow-xl">
            <div className="space-y-4 md:w-[50%] text-center ">
                <h2 className='w-fit font-light mx-auto py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]'>Our Mission</h2>
                <p>
                    To become Africa’s most trusted logistics partner, setting the standard for innovation, reliability, and customer satisfaction in international freight services.
                </p>
            </div>
            <div className="space-y-4 md:w-[50%] text-center ">
                <h2 className='w-fit font-light mx-auto py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]' >Our Vision</h2>
                <p>
                    Our vision is to be the leading logistics provider in Nigeria and beyond, recognized for our reliability, integrity, and customer-centric approach. We aim to set new standards in the industry by leveraging technology and expertise to deliver unparalleled value to our clients.
                </p>
            </div>
        </motion.div>

        {/* our core values  */}
        <motion.div initial={{opacity:0, x:40}} whileInView={{opacity:1, x:0}} transition={{duration:0.8}} viewport={{once: true}} className=" mt-[10rem] flex w-full min-h-[500px] flex-col md:flex-row justify-center gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{opacity: 1, x: 0}} transition={{ delay:1, duration:0.6}} className="w-[100%] md:w-[50%] h-[300px] md:h-full relative overflow-hidden rounded-4xl">
                <Image src="/terminal.jpg" alt="Container image" fill className="object-cover" quality={100} priority />
                <div className="absolute inset-0 bg-black/20 z-10" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{opacity: 1, x: 0}} transition={{ delay:1, duration:0.6}} className="w-[100%] md:w-[50%] mih-h-[300px] md:h-full relative overflow-hidden p-4">
                <h2 className='w-fit font-light  py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]'>Our Core Values </h2>
                <ol className=' mt-4 md:p-3 '>
                    <li className='md:text-lg my-1'><span className='text-[#f08825] font-bold'>Integrity</span> - We operate with transparency and stand by our word.</li>
                    <li className='md:text-lg my-1'><span className='text-[#f08825] font-bold'>Efficiency </span> - We prioritize speed, accuracy, and optimization in every shipment.</li>
                    <li className='md:text-lg my-1'><span className='text-[#f08825] font-bold'>Customer Commitment</span> -  We go the extra mile to understand and meet your needs.</li>
                    <li className='md:text-lg my-1'><span className='text-[#f08825] font-bold'>Innovation </span> - We continuously improve our systems and processes to stay ahead.</li>
                    <li className='md:text-lg my-1'><span className='text-[#f08825] font-bold'>Collaboration </span> - We work closely with clients, customs, and carriers to deliver smooth operations.</li>
                </ol>
            </motion.div>
        </motion.div>

        {/* our infrastructure */}
        <motion.div initial={{opacity:0, y:20, scale:0.7}} whileInView={{opacity:1, y:0, scale:1}} transition={{duration:0.8}} viewport={{once: true}} className=" my-[0rem] flex w-full min-h-[500px] flex-col justify-center gap-10 items-center">
            <h1 className='text-4xl font-light mb-1 py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]'>
                Our Infrastructure
            </h1>
            <p className='text-center md:text-xl'>With secure, custom bonded warehouses near major seaports, a reliable fleet for haulage, and access to an expansive global shipping network, Harlink is positioned to deliver goods efficiently from origin to final destination. <span className=' text-[#F08825]'> Our Export Processing Terminal (EPT) ensures faster inspections and streamlined clearance, saving our clients time and money.</span></p>
        </motion.div>

        {/* our team section  */}
        <motion.section
          id='team'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
            <h1 className='text-4xl w-fit mx-auto font-light mb-1 py-3 px-5 text-[13px] rounded-full border-2 border-[#F08825]'>
                Our Team
            </h1>
            <p className='md:text-3xl text-center text-gray-700 my-2'>
                Dedicated Smart and Creative <br />
                    Individuals For the Job
            </p>
          <div className="grid gap-6 md:grid-cols-3">
            {teamData.members.map((team, i) => (
              <motion.div
                key={i}
                custom={i}
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ delay: i * 0.15, duration: 1.8, type: 'spring', stiffness: 60 }}
                viewport={{ once: true }}
                className="bg-white overflow-hidden p-0 relative h-[400px] w-[300px] flex flex-col justify-end rounded-2xl shadow-md border group hover:shadow-lg transition-all"
              >
                
                <Image src={team.img} alt={team.name} className="absolute hover:scale-[1.1] transition ease-out duration-700 inset-0 w-full h-full object-cover rounded-2xl" fill quality={100} priority />
                <div className=" backdrop-blur-xs group hover:bg-[#f087251c] transition-all duration-200 ease-in bg-[#f087251c] text-white p-6 z-10 flex flex-col items-center text-center">
                  
                  <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
                  <p className="text-gray-200 text-sm">{team.role}</p> 
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
      </main>
      <Footer />
    </>
  );
}
