"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Users, Car } from "lucide-react";
const CarsCard = ({ car }) => {
  const {
    carName,
    dailyRentPrice,
    carType,
    image,
    seatCapacity,
    pickupLocation,
    description,
    availabilityStatus,
  } = car;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm flex flex-col h-full"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <motion.img
          src={image}
          alt={carName}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${
            availabilityStatus === "Available" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {availabilityStatus}
        </span>

        <div className="absolute bottom-3 right-3 rounded-full bg-black/80 px-4 py-1 text-sm font-semibold text-white">
          ${dailyRentPrice}/day
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-bold text-gray-900">{carName}</h2>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
              {carType}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={16} />
            <span>{pickupLocation}</span>
          </div>

          <p className="mt-3 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{seatCapacity} Seats</span>
            </div>

            <div className="flex items-center gap-2">
              <Car size={16} />
              <span>{carType}</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link href="#">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarsCard;
