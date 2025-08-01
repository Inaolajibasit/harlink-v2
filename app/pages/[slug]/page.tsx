'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { allServices } from '../../ServiceData';

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug;

  const service = allServices.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-72 md:h-96"
      >
        <Image
          src="/bg-42.jpg"
          alt="Container image"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-20" />
      </motion.section>

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-6 py-16 min-h-[800px] flex flex-col md:flex-row items-start justify-start gap-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl w-fit font-light mb-5 py-3 px-5 text-[13px] rounded-full border border-[#F08825]">
            SERVICE
          </h1>
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <p className="text-gray-500 font-medium mb-8">{service.description}</p>
          <p className="max-w-2xl">{service.details}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.main>
      <Footer />
    </>
  );
}
