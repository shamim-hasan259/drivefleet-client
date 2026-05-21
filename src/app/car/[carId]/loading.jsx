import { FadeLoader } from "react-spinners";
const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FadeLoader />
    </div>
  );
};
export default loading;
