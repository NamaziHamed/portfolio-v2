"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4"
    >
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Name:
      </label>
      <input
        required
        type="text"
        placeholder="Name"
        value={formData.name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <label
        htmlFor="email"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Email:
      </label>
      <input
        required
        type="email"
        placeholder="Email"
        value={formData.email}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <label
        htmlFor="message"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Message:
      </label>
      <textarea
        required
        placeholder="Message"
        value={formData.message}
        rows={6}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
