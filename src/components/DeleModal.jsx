"use client";
import { AlertDialog, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { deleteCar } from "@/lib/data";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const DeleModal = ({ car }) => {
  const { _id, carName } = car;
  const handleDeleCar = async () => {
    const { data: token } = await authClient.token();
    const res = await deleteCar(_id, token);
    console.log(res);
    if (res.data.deletedCount > 0) {
      toast.success(`${res.message}`);
      redirect("/my-added-car");
    }
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger">Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will car permanently delete <strong>{carName}</strong>
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDeleCar} slot="close" variant="danger">
                  Delete Project
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleModal;
