import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="flex w-full max-w-5xl items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-md">
        {/* Category */}
        <select className="h-14 w-56 border-r border-gray-200 bg-transparent px-4 text-gray-700 outline-none">
          <option>All Categories</option>
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>Mobile Development</option>
          <option>Data Science</option>
          <option>Marketing</option>
        </select>

        {/* Search Input */}
        <div className="flex flex-1 items-center px-4">
          <Search className="text-gray-400" size={20} />

          <input
            type="text"
            placeholder="Search for courses (e.g. Next.js, Web Design...)"
            className="h-14 w-full bg-transparent px-3 outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Search Button */}
        <button className="h-14 rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
