import AddedBook from "@/components/AddedBook";
import { getAddedCar } from "@/lib/data";
const MyAddedCarPage = async () => {
  const { cars } = await getAddedCar();
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <div>
        <h2 className="text-3xl font-bold">My added car</h2>
        <div className="mt-8 mb-5">
          {cars.map((car) => (
            <AddedBook key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAddedCarPage;
