"use client";

import React from "react";
import { Shield, Clock, Car, MapPin } from "lucide-react";
import * as motion from "framer-motion/client";

const WhyChooseUs = () => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Huge Car Collection",
      desc: "Choose from economy to luxury cars anytime you want.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Verified",
      desc: "All cars are verified for safety and quality assurance.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Booking",
      desc: "Book your car within seconds with instant confirmation.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Multiple Locations",
      desc: "Pick up and drop anywhere across major cities.",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-blue-600">DriveFleet</span>
          </h2>
          <p className="text-gray-500 mt-3">
            We make your car rental experience smooth, fast, and reliable
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="text-blue-600 mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">{f.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
