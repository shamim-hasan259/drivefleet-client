"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
const RegisterPage = () => {
  return (
    <div className="min-h-screen mmx-w-7xl mx-auto ">
      <Form className="flex w-96 flex-col gap-4">
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

          <Input placeholder="John Doe" />

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

          <Description>Enter a valid profile image URL</Description>

          <FieldError />
        </TextField>

        {/* Email */}
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
          minLength={8}
          name="password"
          type="password"
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

          <Input placeholder="Enter your password" />

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        <div>
          <Button className="w-full" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
