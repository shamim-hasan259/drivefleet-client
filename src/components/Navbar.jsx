"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore Cars",
      path: "/explore-cars",
    },
    {
      name: "Add Car",
      path: "/add-car",
    },
    {
      name: "My Bookings",
      path: "/my-bookings",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between  h-20 ">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-wide text-black">
            Drive<span className="text-blue-600">Fleet</span>
          </h1>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative font-bold transition duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <button className="rounded-full border border-gray-300 px-5 py-2  font-bold text-black transition duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="rounded-full bg-blue-700 px-5 py-2 font-bold text-white shadow-md transition duration-300 hover:scale-105 cursor-pointer">
              Register
            </button>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="text-black md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white shadow-md md:hidden">
          <div className="flex flex-col gap-5 px-5 py-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-medium transition ${
                    isActive ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 pt-3">
              <Link href="/login">
                <button className=" w-full rounded-full border border-gray-300 px-5 py-2 font-bold text-black transition duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className=" w-full rounded-full bg-blue-700 px-5 py-2 font-bold text-white shadow-md transition duration-300 hover:scale-105 cursor-pointer">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
