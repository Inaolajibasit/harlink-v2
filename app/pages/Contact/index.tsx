// components/Footer.tsx
'use client';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <footer className="bg-[#f8f9fa] py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <div className="bg-white rounded-xl p-6 md:p-10 shadow-md">
          <h2 className="text-2xl font-semibold mb-1">Reach Out to Us</h2>
          <p className="text-orange-500 mb-6">Let's Get Started</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              className="col-span-1 p-3 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last name"
              className="col-span-1 p-3 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              className="col-span-2 p-3 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone number"
              className="col-span-2 p-3 rounded-md border border-gray-300 focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="What can we do for you?"
              className="col-span-2 p-3 rounded-md border border-gray-300 focus:outline-none resize-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-medium py-2 px-6 rounded-md w-fit"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Contact Info & Image */}
        <div className="space-y-6">
          <img
            src="/bg1.jpg"
            alt="Ship"
            className="rounded-xl object-cover w-full h-60 md:h-80"
          />

          <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
            <ContactItem emoji="📧" label="Email" value="inaolajibasit@gmail.com" />
            <ContactItem emoji="📞" label="Phone" value="0808064916" />
            <ContactItem emoji="📍" label="Address" value="Apapa port, Lagos, Nigeria" />
          </div>
        </div>
      </div>
    </footer>
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
