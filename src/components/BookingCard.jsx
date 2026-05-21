"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { createBooking } from "@/lib/data";
import { Form, TextArea } from "@heroui/react";
import { Wallet } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const BookingCard = ({ car }) => {
  const [driver, setDriver] = useState("");
  const [notes, setNotes] = useState("");
  const { data } = useSession();
  const user = data?.user;
  const { dailyRentPrice, carType } = car;
  const handleBooking = async (e) => {
    e.preventDefault();
    const { data: token } = await authClient.token();
    console.log(token);
    const bookingData = {
      name: user?.name,
      email: user?.email,
      driver,
      notes,
      ...car,
    };
    const res = await createBooking(bookingData, token);
    console.log(res);
    if (res.status) {
      toast.success(`${res.message}`);
      redirect("/my-bookings");
    }
  };
  return (
    <div>
      <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-lg ">
        <div className="mb-6">
          <p className="text-gray-500">Daily Rental Price</p>

          <h2 className="mt-2 text-4xl font-extrabold text-indigo-600">
            ${dailyRentPrice}
            <span className="text-lg font-medium text-gray-500">/day</span>
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-4 border-y border-gray-100 py-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Car Type</span>
            <span className="font-semibold text-gray-800">{carType}</span>
          </div>
        </div>
        <Form onSubmit={handleBooking}>
          <div className="w-full my-3">
            <label className="mb-2 block text-gray-600">Driver Needed</label>

            <select
              value={driver}
              onChange={(e) => setDriver(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label>Special Notes</label>
            <TextArea
              onChange={(e) => setNotes(e.target.value)}
              aria-describedby="textarea-controlled-description"
              aria-label="Announcement"
              placeholder="Compose an announcement..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-indigo-700"
          >
            <Wallet size={22} />
            Book Now
          </button>
        </Form>

        <p className="mt-4 text-center text-sm text-gray-400">
          No hidden charges. Secure booking system.
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
