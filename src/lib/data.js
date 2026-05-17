export const getFeatureCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/features`);
  const cars = await res.json();
  return cars;
};
