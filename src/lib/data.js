export const createCar = async (car, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(car),
  });
  const data = await res.json();
  return data;
};
export const getAddedCar = async (token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getFeatureCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available`);
  const cars = await res.json();
  return cars;
};
export const getAllCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`);
  const cars = await res.json();
  return cars;
};

export const getSingleCar = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const car = await res.json();
  return car;
};

export const updatedCar = async (id, token, data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const car = await res.json();
  return car;
};

export const deleteCar = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const car = await res.json();
  return car;
};
// booking api
export const createBooking = async (bookingData, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ bookingData }),
  });
  const data = await res.json();
  return data;
};
export const getAllBooking = async (token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const { data } = await res.json();
  return data;
};
