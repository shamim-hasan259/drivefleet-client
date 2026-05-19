import { getSingleCar } from "@/lib/data";
import Image from "next/image";
import { MapPin, Users, BadgeCheck, CarFront, Wallet } from "lucide-react";
import Link from "next/link";
import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const CarDetailsPage = async ({ params }) => {
  const { carId } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const { car } = await getSingleCar(carId, token);

  const {
    carName,
    carType,
    image,
    seatCapacity,
    pickupLocation,
    description,
    availabilityStatus,
  } = car;

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <Link className="text-blue-600 font-medium" href="/">
          ← Back to home
        </Link>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">
            {/* Image */}
            <div className="relative h-[300px] overflow-hidden rounded-3xl md:h-[500px]">
              <Image
                src={image}
                alt={carName}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-800 shadow">
                {carType}
              </div>
            </div>

            {/* Description Card */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900">
                    {carName}
                  </h1>

                  <p className="mt-2 text-gray-500">
                    Premium and comfortable car for your next journey.
                  </p>
                </div>

                <div
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    availabilityStatus === "Available"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {availabilityStatus}
                </div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-1 gap-4 border-y border-gray-100 py-6 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-100 p-3">
                    <Users className="text-indigo-600" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Seats</p>

                    <h3 className="font-bold text-gray-800">
                      {seatCapacity} Persons
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-rose-100 p-3">
                    <MapPin className="text-rose-500" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Location</p>

                    <h3 className="font-bold text-gray-800">
                      {pickupLocation}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-100 p-3">
                    <BadgeCheck className="text-emerald-600" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Availability</p>

                    <h3 className="font-bold text-emerald-600">
                      {availabilityStatus}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="pt-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Description
                </h2>

                <p className="leading-8 text-gray-600">{description}</p>
              </div>
            </div>
          </div>

          {/* Right Side Booking Card */}
          <BookingCard car={car} />
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;
