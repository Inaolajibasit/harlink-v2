'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from "../components/Footer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        'service_pjurlkk',
        'template_joo186m',
        {
          ...formData,
          fullName: `${formData.firstName} ${formData.lastName}`,
        },
        '0qHGFMTFxCuMZ_MxO'
      );

      setModalMessage('✅ Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setModalMessage('❌ Failed to send message. Try again.');
    } finally {
      setIsLoading(false);
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#f8f9fa] flex justify-center items-center relative w-full min-h-[100vh] py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Form */}
          <motion.div
            className="bg-white min-h-[586px] rounded-xl p-6 md:p-10 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl font-semibold mb-1">Reach Out to Us</h1>
            <p className="text-orange-500 mb-6">Let's Get Started</p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
              <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="col-span-2 md:col-span-1 p-3 rounded-md border border-gray-300" required />
              <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="col-span-2 md:col-span-1 p-3 rounded-md border border-gray-300" required />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email address" type="email" className="col-span-2 p-3 rounded-md border border-gray-300" required />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className="col-span-2 p-3 rounded-md border border-gray-300" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="What can we do for you?" rows={4} className="col-span-2 p-3 rounded-md border border-gray-300 resize-none" required />
              <button type="submit" className="bg-orange-500 text-white py-2 px-6 rounded-md w-fit">
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/bg1.jpg" alt="Ship" className="rounded-xl object-cover w-full h-60 md:h-80" />
            <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
              <ContactItem emoji="📧" label="Email" value="harlinkinvestment@gmail.com" />
              <ContactItem emoji="📞" label="Phone" value="080330447379" />
              <ContactItem emoji="📍" label="Address" value="34 Rhodes Crescent Apapa Lagos, Nigeria" />
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
              onClick={() => setShowModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-medium">{modalMessage}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

function ContactItem({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-orange-400 p-3 rounded-full text-lg">{emoji}</div>
      <div>
        <p className="font-bold">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}
