import AddedBook from "@/components/AddedBook";
import { auth } from "@/lib/auth";
import { getAddedCar } from "@/lib/data";
import { headers } from "next/headers";
const MyAddedCarPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const { data } = await getAddedCar(token);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 min-h-screen py-10">
      <div>
        <h2 className="text-3xl font-bold">My added car</h2>

        {data.length === 0 && (
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
        <div className="mt-8 mb-5">
          {data.map((car) => (
            <AddedBook key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAddedCarPage;
