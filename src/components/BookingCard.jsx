import { TextArea, Select, ListBox, Label } from "@heroui/react";
import { Wallet } from "lucide-react";

const BookingCard = ({ car }) => {
  const { pickupLocation, seatCapacity, dailyRentPrice, carType } = car;
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
        <Select className="w-full my-2" placeholder="Select one">
          <Label>Driver Needed</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="florida" textValue="Florida">
                Yes
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="delaware" textValue="Delaware">
                No
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <div className="flex w-full flex-col gap-2">
          <label>Special Notes</label>
          <TextArea
            aria-describedby="textarea-controlled-description"
            aria-label="Announcement"
            placeholder="Compose an announcement..."
          />
        </div>

        {/* Button */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-indigo-700">
          <Wallet size={22} />
          Book Now
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          No hidden charges. Secure booking system.
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
