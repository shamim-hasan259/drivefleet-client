"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown } from "@heroui/react";
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
              <Link href="/my-bookings">My Bookings</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="w-full" href="/add-car">
                Add Car
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="w-full" href="/added-car">
                My Added Cars
              </Link>
            </Dropdown.Item>
            <Dropdown.Item variant="danger">
              <button onClick={handleLogout}>Logout</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default DropDown;
