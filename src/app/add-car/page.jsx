"use client";
import { authClient } from "@/lib/auth-client";
import { createCar } from "@/lib/data";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
const AddCarPage = () => {
  const handleCreateCar = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const {
      data: { token },
    } = await authClient.token();
    const carData = await createCar({ ...data }, token);
    // console.log("data resolve promise", carData);
    if (carData) {
      toast.success(`car created successfully`);
      redirect("/");
    }
  };
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden">
        <div className="bg-black text-white p-8 md:p-10">
          <h1 className="text-4xl font-bold">Add New Car</h1>
          <p className="text-slate-300 mt-3">
            Add your car details and make it available for booking.
          </p>
        </div>
        <form onSubmit={handleCreateCar} className="p-6 md:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <TextField name="carName" isRequired>
                <Label>Car Name</Label>
                <Input placeholder="Tesla Model S" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>
            <TextField name="dailyRentPrice" type="number" isRequired>
              <Label>Daily Rent Price</Label>

              <Input type="number" placeholder="0" className="rounded-2xl" />
              <FieldError />
            </TextField>
            <div>
              <Select
                name="carType"
                isRequired
                className="w-full"
                placeholder="Select car type"
              >
                <Label>Car Type</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="SUV" textValue="SUV">
                      SUV
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Sedan" textValue="Sedan">
                      Sedan
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Hatchback" textValue="Hatchback">
                      Hatchback
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Sports" textValue="Sports">
                      Sports
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>
            <TextField name="seatCapacity" type="number" isRequired>
              <Label>Seat Capacity</Label>

              <Input type="number" placeholder="0" className="rounded-2xl" />

              <FieldError />
            </TextField>

            <TextField name="pickupLocation" isRequired>
              <Label>Pickup Location</Label>
              <Input placeholder="location" className="rounded-2xl" />
              <FieldError />
            </TextField>
            <div>
              <Select
                name="availabilityStatus"
                isRequired
                className="w-full"
                placeholder="Select availability"
              >
                <Label>Availability Status</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Available" textValue="Available">
                      Available
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Unavailable" textValue="Unavailable">
                      Unavailable
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div className="md:col-span-2">
              <TextField name="image" isRequired>
                <Label>Car Image URL</Label>

                <Input
                  type="url"
                  placeholder="https://example.com/car-image.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>

                <TextArea
                  placeholder="Write car details..."
                  className="rounded-3xl"
                />

                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Button */}
          <Button
            type="submit"
            className="w-full h-14 rounded-2xl bg-black text-white text-lg font-semibold hover:scale-[1.01] transition-all duration-300"
          >
            Add Car
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddCarPage;

// "use client";

// import { authClient } from "@/lib/auth-client";
// import { createCar } from "@/lib/data";
// import {
//   Button,
//   FieldError,
//   Input,
//   Label,
//   TextArea,
//   TextField,
//   Select,
//   ListBox,
// } from "@heroui/react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// const AddCarPage = () => {
//   const router = useRouter();

//   const handleCreateCar = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData.entries());

//     const jwtResponse = await authClient.jwt();
//     const token = jwtResponse?.data?.jwt;
//     console.log(token);

//     if (!token) {
//       toast.error("Authentication required! Please login again.");
//       return;
//     }

//     try {
//       const carData = await createCar({ ...data }, token);
//       if (carData) {
//         toast.success(`car created successfully`);
//         router.push("/");
//       }
//     } catch (error) {
//       toast.error("Failed to create car.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 py-10 px-4">
//       <div className="max-w-5xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden">
//         <div className="bg-black text-white p-8 md:p-10">
//           <h1 className="text-4xl font-bold">Add New Car</h1>
//           <p className="text-slate-300 mt-3">
//             Add your car details and make it available for booking.
//           </p>
//         </div>

//         <form onSubmit={handleCreateCar} className="p-6 md:p-10 space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="md:col-span-2">
//               <TextField name="carName" isRequired>
//                 <Label>Car Name</Label>
//                 <Input placeholder="Tesla Model S" className="rounded-2xl" />
//                 <FieldError />
//               </TextField>
//             </div>
//             <TextField name="dailyRentPrice" type="number" isRequired>
//               <Label>Daily Rent Price</Label>

//               <Input type="number" placeholder="120" className="rounded-2xl" />
//               <FieldError />
//             </TextField>
//             <div>
//               <Select
//                 name="carType"
//                 isRequired
//                 className="w-full"
//                 placeholder="Select car type"
//               >
//                 <Label>Car Type</Label>

//                 <Select.Trigger className="rounded-2xl">
//                   <Select.Value />
//                   <Select.Indicator />
//                 </Select.Trigger>

//                 <Select.Popover>
//                   <ListBox>
//                     <ListBox.Item id="SUV" textValue="SUV">
//                       SUV
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="Sedan" textValue="Sedan">
//                       Sedan
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="Hatchback" textValue="Hatchback">
//                       Hatchback
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="Luxury" textValue="Luxury">
//                       Luxury
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="Sports" textValue="Sports">
//                       Sports
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                   </ListBox>
//                 </Select.Popover>
//               </Select>
//             </div>
//             <TextField name="seatCapacity" type="number" isRequired>
//               <Label>Seat Capacity</Label>

//               <Input type="number" placeholder="0" className="rounded-2xl" />

//               <FieldError />
//             </TextField>

//             <TextField name="pickupLocation" isRequired>
//               <Label>Pickup Location</Label>
//               <Input placeholder="location" className="rounded-2xl" />
//               <FieldError />
//             </TextField>
//             <div>
//               <Select
//                 name="availabilityStatus"
//                 isRequired
//                 className="w-full"
//                 placeholder="Select availability"
//               >
//                 <Label>Availability Status</Label>

//                 <Select.Trigger className="rounded-2xl">
//                   <Select.Value />
//                   <Select.Indicator />
//                 </Select.Trigger>

//                 <Select.Popover>
//                   <ListBox>
//                     <ListBox.Item id="Available" textValue="Available">
//                       Available
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>

//                     <ListBox.Item id="Unavailable" textValue="Unavailable">
//                       Unavailable
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                   </ListBox>
//                 </Select.Popover>
//               </Select>
//             </div>

//             <div className="md:col-span-2">
//               <TextField name="image" isRequired>
//                 <Label>Car Image URL</Label>

//                 <Input
//                   type="url"
//                   placeholder="https://example.com/car-image.jpg"
//                   className="rounded-2xl"
//                 />
//                 <FieldError />
//               </TextField>
//             </div>

//             <div className="md:col-span-2">
//               <TextField name="description" isRequired>
//                 <Label>Description</Label>

//                 <TextArea
//                   placeholder="Write car details..."
//                   className="rounded-3xl"
//                 />

//                 <FieldError />
//               </TextField>
//             </div>
//           </div>

//           <Button
//             type="submit"
//             className="w-full h-14 rounded-2xl bg-black text-white text-lg font-semibold hover:scale-[1.01] transition-all duration-300"
//           >
//             Add Car
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCarPage;
