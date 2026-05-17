"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    review:
      "I've rented cars from various companies, but the experience with CarRental was exceptional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
  {
    id: 2,
    name: "John Smith",
    location: "New York, USA",
    review:
      "CarRental made my trip so much easier. The car was delivered right to my door.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
  {
    id: 3,
    name: "Ava Johnson",
    location: "Sydney, Australia",
    review: "I highly recommend CarRental! Their fleet is amazing and premium.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
  {
    id: 4,
    name: "Michael Brown",
    location: "Toronto, Canada",
    review:
      "The booking process was smooth and the customer support was fantastic.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
  },
  {
    id: 5,
    name: "Sophia Williams",
    location: "Paris, France",
    review:
      "Clean cars, affordable pricing, and a very professional service overall.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
  },
  {
    id: 6,
    name: "Daniel Lee",
    location: "Singapore",
    review: "DriveFleet exceeded my expectations. I’ll definitely rent again.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
];

const ReviewSection = () => {
  return (
    <section className="py-16 bg-[#f7f7f7] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Trusted by premium customers worldwide
        </p>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={review.id} className="h-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm  transition-all duration-300 h-full min-h-[280px] flex flex-col"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </h3>

                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-blue-600 text-blue-600"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-8 mt-6 flex-1">
                  "{review.review}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSection;
