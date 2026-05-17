"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import carImage from "../assets/main_car-hpkzbezO.png";

const Banner = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto grid min-h-[90vh] items-center gap-14 px-4 py-16 md:grid-cols-2 md:px-8">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
          >
            Premium Car Rental Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-black leading-tight text-blue-600 md:text-6xl"
          >
            Find The Perfect Car For Every Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-600"
          >
            Rent premium cars at affordable prices with smooth booking, reliable
            service, and comfortable driving experience anytime, anywhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/explore-cars">
              <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white shadow-md transition hover:scale-105">
                Explore Cars
              </button>
            </Link>

            <Link href="/add-car">
              <button className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-black transition hover:bg-blue-600 hover:text-white">
                Add Car
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* IMAGE FIXED */}
          <Image
            src={carImage}
            alt="Luxury Car"
            width={600}
            height={500}
            className="w-full z-10 rounded-[30px] "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
