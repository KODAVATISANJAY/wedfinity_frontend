import React, { useState } from 'react';

const ContactForm = ({ setCurrentPage }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setCurrentPage('home'), 2000);
  };

  return (
    <section className="max-w-2xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">Get in Touch</h2>
      <p className="text-center text-gray-600 mb-8">Let's plan your perfect wedding together</p>
      {submitted ? (
        <div className="bg-green-50 border-2 border-green-500 p-8 rounded-xl text-center">
          <p className="text-2xl text-green-700 font-bold mb-2">✓ Thank You!</p>
          <p className="text-gray-700">We'll contact you soon to discuss your wedding plans.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-4">
          <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 outline-none" required />
          <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 outline-none" required />
          <textarea placeholder="Tell us about your wedding" rows="5" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 outline-none" required></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">Send Message</button>
        </form>
      )}
    </section>
  );
};
export default ContactForm;
