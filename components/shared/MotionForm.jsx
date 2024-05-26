"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { fadeIn } from "../../lib/utils/motion";

const MotionForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ojwmnwj",
        "template_nko8rr6",
        {
          from_name: form.name,
          to_name: "Brennam",
          from_email: form.email,
          from_subject: form.subject,
          to_email: "brennambond@gmail.com",
          message: form.message,
        },
        "BgCMsIOQWiQK5Tblm"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message! I will get back to you as soon as possible."
          );
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong");
        }
      );
  };

  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='z-[1] flex w-full lg:w-[60%] flex-col sm:max-w-[85%]'
    >
      <form
        className='flex flex-col gap-8 px-6 '
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label className='text-white block mb-2 2xl:mb-3 text-base font-medium lg:text-[18px] 2xl:text-[20px]'>
            Name
          </label>
          <input
            name='name'
            type='text'
            value={form.name}
            onChange={handleChange}
            required
            placeholder='Your name'
            className='bg-[#1b1b2e] border border-[#18191e] placeholder-gray-300 text-gray-100 text-sm xl:text-base rounded-lg block w-full px-2 py-3'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-white block mb-2 2xl:mb-3 text-base font-medium lg:text-[18px] 2xl:text-[20px]'>
            Email
          </label>
          <input
            name='email'
            type='email'
            value={form.email}
            onChange={handleChange}
            required
            placeholder='email@gmail.com'
            className='bg-[#1b1b2e] border border-[#18191e] placeholder-gray-300 text-gray-100 text-sm xl:text-base rounded-lg block w-full px-2 py-3'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-white block mb-2 2xl:mb-3 text-base font-medium lg:text-[18px] 2xl:text-[20px]'>
            Subject
          </label>
          <input
            name='subject'
            type='text'
            value={form.subject}
            onChange={handleChange}
            required
            placeholder='Email Subject'
            className='bg-[#1b1b2e] border border-[#18191e] placeholder-gray-300 text-gray-100 text-sm xl:text-base rounded-lg block w-full px-2 py-3'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-white block mb-2 2xl:mb-3 text-base font-medium lg:text-[18px] 2xl:text-[20px]'>
            Message
          </label>
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            className='bg-[#1b1b2e] border border-[#18191e] placeholder-gray-300 text-gray-100 text-sm xl:text-base rounded-lg block w-full px-2 py-3 h-[250px]'
            placeholder='Leave your message here'
          />
        </div>
        <button
          type='submit'
          className=' w-[175px] md:w-[200px] self-center transition-colors bg-gradient-to-r from-pink-700 to-purple-500 hover:bg-gradient-to-r hover:from-pink-800 hover:to-purple-600  text-white border-4 border-white font-semibold tracking-wider uppercase py-2 px-4 rounded-lg'
        >
          <p>{loading ? "Sending..." : "Send Message"}</p>
        </button>
      </form>
    </motion.div>
  );
};

export default MotionForm;
