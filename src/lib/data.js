export const createCar = async (car) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(car),
  });
  const { data } = await res.json();
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

export const getSingleCar = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`);
  const car = await res.json();
  return car;
};
