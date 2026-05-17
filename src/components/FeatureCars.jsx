import { getFeatureCars } from "@/lib/data";
import CarsCard from "./CarsCard";

const FeatureCars = async () => {
  const cars = await getFeatureCars();
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h2 className="font-bold text-4xl">
            Featured <span className="text-blue-500">Vehicles</span>
          </h2>
          <p className="text-neutral-500 font-semibold ">
            Explore our selection of premium vehicles available for your next
            adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {cars.cars.map((car) => (
            <CarsCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCars;
