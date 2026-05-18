import CarsCard from "@/components/CarsCard";
import SearchBar from "@/components/SearchBar";
import { getAllCars } from "@/lib/data";
import React from "react";

const ExploreCarPage = async () => {
  const allCars = await getAllCars();
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-2">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            Explore Our <span className="text-blue-600">Premium</span> Cars
          </h2>
          <p className="text-center text-neutral-500">
            Explore our selection of premium vehicles available for your next
            adventure.
          </p>
        </div>
        <SearchBar />
        <h2 className="my-2">All Cars</h2>
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allCars.cars.map((car) => (
            <CarsCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCarPage;
