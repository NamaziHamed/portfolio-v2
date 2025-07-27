import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="ct-container flex flex-col gap-5">
      <h2 className="title">Contact</h2>
      <p className="subtitle">
        If you have any questions or inquiries, please don't hesitate to contact
        me. I'm always open to new opportunities and collaborations.
      </p>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:justify-evenly">
        <div>
          <ul className="space-y-4">
            <li className="text-lg">
              <span className="font-semibold">Email:</span>{" "}
              h.namazi91@gmail.com
            </li>
            <li className="text-lg">
              <span className="font-semibold">Phone:</span> +98 914 582 3427
            </li>
            <li className="text-lg">
              <span className="font-semibold">Github: </span>
              <Link href="https://github.com/namazihamed" target="_blank">
                https://github.com/namazihamed
              </Link>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
