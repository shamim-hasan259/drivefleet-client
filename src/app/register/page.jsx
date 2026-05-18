"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { signOut } from "better-auth/api";

import { Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      ...userData,
    });
    if (data) {
      signOut();
      toast.success(`register successfully`);
      redirect("/login");
    }
    toast.error(`${error.message}`);
  };
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="rounded-full flex flex-col justify-center items-center ">
        <User size={30} className="bg-slate-200 text-black " />
        <h2 className="text-3xl font-bold text-center">
          Create an <span className="text-blue-600 my-2">account</span>
        </h2>
      </div>
      <Form
        onSubmit={handleRegister}
        className="flex w-100 mx-auto flex-col gap-4 shadow bg-slate-50 px-8 py-5 rounded-xl"
      >
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.trim().length < 3) {
              return "Name must be at least 3 characters";
            }

            return null;
          }}
        >
          <Label>Name</Label>

          <Input placeholder="Enter your name" />

          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your valid email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="image"
          type="url"
          validate={(value) => {
            try {
              new URL(value);
              return null;
            } catch {
              return "Please enter a valid image URL";
            }
          }}
        >
          <Label>Image URL</Label>

          <Input placeholder="Enter your image url" />

          <FieldError />
        </TextField>

        <div className="relative">
          <TextField
            isRequired
            minLength={8}
            name="password"
            type={showPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" className="pr-10" />

            <FieldError />
          </TextField>

          <button
            type="button"
            className="absolute right-3 top-8 z-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        <div>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-900 duration-500"
            type="submit"
          >
            Register
          </Button>
          <div className="my-3 text-center">
            <span>OR</span>
          </div>
          <button
            className="flex items-center justify-center w-full px-4 py-2 bg-slate-200 text-black rounded-full cursor-pointer hover:bg-slate-300 transition duration-300"
            // onClick={googleLogin}
          >
            <FcGoogle className="me-2 size-5" />
            Login with google
          </button>
          <p className="my-3 text-center">
            Already have an account{" "}
            <Link className="text-blue-600 font-semibold" href="/login">
              login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
