"use client";
import { authClient } from "@/lib/auth-client";
import { updatedCar } from "@/lib/data";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { Edit } from "lucide-react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
const EditModal = ({ car }) => {
  const { _id, dailyRentPrice, description, image, pickupLocation } = car;
  const handleEditCar = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const {
      data: { token },
    } = await authClient.token();
    const res = await updatedCar(_id, token, { ...data });
    if (res.status) {
      toast.success(`${res.message}`);
      redirect("/my-added-car");
    }
  };
  return (
    <div>
      <Modal>
        <Button variant="secondary">
          <Edit /> Edit car
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    onSubmit={handleEditCar}
                    className="flex flex-col gap-4"
                  >
                    <TextField
                      defaultValue={dailyRentPrice}
                      className="w-full"
                      name="dailyRentPrice"
                      type="text"
                      variant="secondary"
                    >
                      <Label>RentPrice</Label>
                      <Input placeholder="Enter your price" />
                    </TextField>
                    <TextField
                      defaultValue={description}
                      name="description"
                      isRequired
                    >
                      <Label>Description</Label>

                      <TextArea
                        placeholder="Write car details..."
                        className="rounded-3xl"
                      />
                    </TextField>
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

                          <ListBox.Item
                            id="Unavailable"
                            textValue="Unavailable"
                          >
                            Unavailable
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    <TextField
                      defaultValue={image}
                      className="w-full"
                      name="image"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Image</Label>
                      <Input placeholder="Enter your image url" />
                    </TextField>
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
                    <TextField
                      defaultValue={pickupLocation}
                      className="w-full"
                      name="pickupLocation"
                      variant="secondary"
                    >
                      <Label>location</Label>
                      <Input placeholder="Enter your location" />
                    </TextField>
                    <div>
                      <Button
                        slot="close"
                        className="w-full"
                        type="submit"
                        variant="secondary"
                      >
                        Save
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;
