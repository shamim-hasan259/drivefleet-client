import CarsCard from "@/components/CarsCard";
import SearchBar from "@/components/SearchBar";
import { getAllCars } from "@/lib/data";
const ExploreCarPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params.search || "";
  const category = params.category || "";
  const allCars = await getAllCars(search, category);
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <SearchBar />
        <h2 className="text-xl my-2 font-bold">All Cars</h2>
        {allCars.cars.length === 0 && (
          <div className="col-span-full flex items-center justify-center">
            <div className="bg-white border border-neutral-200 shadow-sm rounded-2xl px-8 py-12 text-center max-w-md w-full">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">
                <span className="text-3xl">🚘</span>
              </div>

              <h2 className="text-2xl font-bold text-neutral-800 mb-2">
                No Cars Found
              </h2>

              <p className="text-neutral-500 text-sm leading-relaxed">
                We couldn't find any cars matching your search or filter. Try
                changing your search keywords or category.
              </p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {allCars?.cars?.map((car) => (
            <CarsCard key={car._id} car={car} />
          ))}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default ExploreCarPage;
