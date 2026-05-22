"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { createBooking } from "@/lib/data";
import { Wallet, MapPin, Users, Car, BadgeCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ car }) => {
  const [driver, setDriver] = useState("");
  const [notes, setNotes] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { data } = useSession();
  const user = data?.user;

  const {
    carName,
    dailyRentPrice,
    carType,
    seatCapacity,
    pickupLocation,
    availabilityStatus,
  } = car;

  const handleBooking = async (e) => {
    e.preventDefault();

    const {
      data: { token },
    } = await authClient.token();

    const bookingData = {
      name: user?.name,
      email: user?.email,
      date: new Date(),
      driver,
      notes,
      ...car,
    };

    const res = await createBooking(bookingData, token);

    if (res.status) {
      toast.success(res.message);
      setOpen(false);
      router.push("/my-bookings");
    }
  };

  return (
    <div>
      {/* CARD */}
      <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
        {/* Car Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{carName}</h2>

        {/* Price */}
        <div className="mb-5">
          <p className="text-gray-500 text-sm">Daily Rental Price</p>
          <h2 className="mt-1 text-4xl font-extrabold text-indigo-600">
            ${dailyRentPrice}
            <span className="text-lg font-medium text-gray-500">/day</span>
          </h2>
        </div>

        {/* Info Grid */}
        <div className="space-y-3 border-y py-5 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-1">
              <Car size={16} /> Type
            </span>
            <span className="font-semibold">{carType}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-1">
              <Users size={16} /> Seats
            </span>
            <span className="font-semibold">{seatCapacity}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-1">
              <MapPin size={16} /> Pickup
            </span>
            <span className="font-semibold">{pickupLocation}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-1">
              <BadgeCheck size={16} /> Status
            </span>
            <span
              className={`font-semibold ${
                availabilityStatus === "Available"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {availabilityStatus}
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-white font-semibold hover:bg-indigo-700 transition"
        >
          <Wallet size={20} />
          Book Now
        </button>

        <p className="mt-3 text-center text-xs text-gray-400">
          Secure booking • Instant confirmation
        </p>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Complete Booking</h2>

            <form onSubmit={handleBooking}>
              <div className="mb-3">
                <label className="block mb-1">Driver Needed</label>
                <select
                  value={driver}
                  onChange={(e) => setDriver(e.target.value)}
                  className="w-full border p-2 rounded-lg"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="block mb-1">Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border p-2 rounded-lg"
                  placeholder="Any special request..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-xl mt-4 hover:bg-indigo-700"
              >
                Confirm Booking
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
