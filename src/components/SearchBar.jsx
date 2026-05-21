"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const form = e.target;
    const search = form.search.value;
    const category = form.category.value;

    router.push(`/explore-cars?search=${search}&category=${category}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white border border-neutral-200 shadow-sm rounded-2xl p-4 md:p-5 mt-8"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* search input */}
        <div className="flex-1">
          <label className="text-sm font-medium text-neutral-600 mb-2 block">
            Search Cars
          </label>

          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Search by car model..."
              className="w-full border border-neutral-200 rounded-xl h-12 pl-12 pr-4 outline-none focus:border-blue-500"
            />

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
          </div>
        </div>

        {/* category */}
        <div className="md:w-[220px]">
          <label className="text-sm font-medium text-neutral-600 mb-2 block">
            Category
          </label>

          <select
            name="category"
            className="w-full border border-neutral-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
          >
            <option value="">All Category</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        {/* button */}
        <div className="md:w-[160px] flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white h-12 rounded-xl font-medium"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
