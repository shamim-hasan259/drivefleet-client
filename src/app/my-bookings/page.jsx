import Image from "next/image";
import { ClockCheck, MapPin, Users } from "lucide-react";
import { getAllBooking } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingsCarPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);
  const data = await getAllBooking(token);
  // console.log(data);
  return (
    <section className="py-10 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-neutral-900">My Bookings</h2>

          <p className="text-neutral-500 mt-2">
            Manage your booked rental cars
          </p>
        </div>

        {/* cards */}
        <div className="space-y-6">
          {data.map((bookCar) => (
            <div
              key={bookCar._id}
              className="bg-white border border-neutral-200 overflow-hidden shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* image */}
                <div className="relative md:w-[320px] h-[230px]">
                  <Image
                    src={bookCar.image}
                    alt={bookCar.carName}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    {/* top */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h2 className="text-3xl font-bold text-neutral-900">
                          {bookCar.carName}
                        </h2>

                        <p className="text-neutral-500 mt-1">
                          {bookCar.carType}
                        </p>
                      </div>

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          bookCar.availabilityStatus === "Available"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {bookCar.availabilityStatus}
                      </span>
                    </div>

                    {/* info */}
                    <div className="flex flex-wrap gap-8 mt-8">
                      {/* location */}
                      <div className="flex items-center gap-2 text-neutral-700">
                        <MapPin size={20} className="text-blue-600" />

                        <span>{bookCar.pickupLocation}</span>
                      </div>

                      {/* seats */}
                      <div className="flex items-center gap-2 text-neutral-700">
                        <Users size={20} className="text-blue-600" />

                        <span>{bookCar.seatCapacity} Seats</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-700">
                        <ClockCheck className="text-blue-600" />
                        <span>{new Date(bookCar.date).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <h2 className="text-4xl font-bold text-blue-600">
                      ${bookCar.dailyRentPrice}
                      <span className="text-lg text-neutral-500 font-medium">
                        /day
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookingsCarPage;
