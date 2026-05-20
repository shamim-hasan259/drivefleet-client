import { Button } from "@heroui/react";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import EditModal from "./EditModal";
import DeleModal from "./DeleModal";

const AddedBook = ({ car }) => {
  const {
    image,
    carName,
    carType,
    availabilityStatus,
    pickupLocation,
    seatCapacity,
    dailyRentPrice,
  } = car;

  return (
    <div className="bg-white border border-neutral-200 overflow-hidden shadow mb-5">
      <div className="flex flex-col md:flex-row ">
        <div className="relative md:w-[320px] h-[230px]">
          <Image src={image} alt={carName} fill className="object-cover" />
        </div>

        {/* content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            {/* top */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900">
                  {carName}
                </h2>

                <p className="text-neutral-500 mt-1">{carType}</p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  availabilityStatus === "Available"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {availabilityStatus}
              </span>
            </div>

            <div className="flex flex-wrap gap-8 mt-8">
              {/* location */}
              <div className="flex items-center gap-2 text-neutral-700">
                <MapPin size={20} className="text-blue-600" />

                <span>{pickupLocation}</span>
              </div>

              {/* seats */}
              <div className="flex items-center gap-2 text-neutral-700">
                <Users size={20} className="text-blue-600" />

                <span>{seatCapacity} Seats</span>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
            <h2 className="text-4xl font-bold text-blue-600">
              ${dailyRentPrice}
              <span className="text-lg text-neutral-500 font-medium">/day</span>
            </h2>
            <div className="flex gap-3 items-center">
              <EditModal car={car} />
              <DeleModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedBook;
