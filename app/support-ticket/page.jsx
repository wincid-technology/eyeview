"use client";
import { useState } from "react";

export default function SupportTicket() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Manuscript Submission",
    priority: "Medium",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Manuscript Submission",
      priority: "Medium",
      message: "",
    });
  };

  return (
    <section className="w-full bg-[#f9f4ed] py-16 px-6 heroBg">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
          Need Assistance?
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Submit a support ticket and our team will get back to you within 24 hours.
        </p>

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Your ticket has been submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option>Manuscript Submission</option>
              <option>Editing & Proofreading</option>
              <option>Publishing Inquiry</option>
              <option>Marketing Support</option>
              <option>Other</option>
            </select>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Describe your issue..."
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-tl-xl rounded-br-xl transition duration-300"
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </section>
  );
}