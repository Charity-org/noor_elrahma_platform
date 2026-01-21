"use client";

import { motion } from "framer-motion";

import SubPagesHero from "@/components/custom/SubPagesHero";
import { contactInfoData } from "@/constants/contactInfo";
import ContactForm from "@/components/pages/contact-us/ContactForm";

import { container, subTextBox } from "@/lib/animations/news/SubHeroAnimationOptions";

function ContactUsPage() {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
      >
        <SubPagesHero bgImage="/assets/real-pr-5.png">
          <motion.div
            variants={subTextBox}
            className="h-full flex flex-col gap-4 justify-center items-center text-center text-white"
          >
            <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
              Stories and progress from our charitable work
            </h1>
            <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md">
              Real updates and stories showing the impact of your donations..
            </p>
          </motion.div>
        </SubPagesHero>
      </motion.div>

      <main className="container py-10 flex min-h-[calc(100dvh-50vh)] flex-col md:flex-row gap-0">
        {/* <ContactInfo /> */}
        <div className="bg-primary flex-1 px-10 py-10 rounded-l-md md:max-w-104">
          <h2 className="text-white font-teachers font-bold text-[40px] mb-6 leading-[1.2]">
            Share love, donate hope.
          </h2>
          <p className="text-white font-inter mb-10 font-light">
            Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend. Est eros facilisi aenean
            nisl..
          </p>

          <p className="text-white font-inter mb-5 font-medium max-w-sm">
            8911 Tanglewood Ave. Capitol Heights, MD 20743
          </p>

          {contactInfoData.map(({ text, icon: Icon }) => (
            <div className="flex items-center mb-5" key={text}>
              <Icon color="#C9A24D" size={19} />
              <span className="text-white font-inter text-[20px] ml-3">{text}</span>
            </div>
          ))}
        </div>

        {/* ContactForm */}
        <ContactForm />
      </main>
    </>
  );
}

export default ContactUsPage;
