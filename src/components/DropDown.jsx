"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, Button } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
const DropDown = ({ user }) => {
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("logout successfully");
  };
  return (
    <div>
      <Dropdown>
        <Dropdown.Trigger className="rounded-full">
          <Avatar>
            <Avatar.Image alt={user.name} src={user?.image} />
            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link className="w-full" href="/my-bookings">
                My Bookings
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="w-full" href="/add-car">
                Add Car
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="w-full" href="/my-added-car">
                My Added Cars
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button
                variant="danger"
                className="w-full text-left"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default DropDown;
