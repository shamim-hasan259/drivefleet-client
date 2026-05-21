import React from "react";
import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center">
      <FadeLoader />
    </div>
  );
};

export default loading;
