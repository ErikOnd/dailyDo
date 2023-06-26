import React from "react";
import { HiPlusCircle } from "react-icons/hi";

const FormContainer = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-[url('https://res.cloudinary.com/dyy38u8x7/image/upload/v1687788221/DailyDo/bg.jpg')]">
      <div className="relative pt-48">
        <input
          className="rounded-full w-1/2  h-16 py-2 px-5 leading-tight focus:outline-none focus:shadow-outline bg-white/70 text-2xl placeholder-gray-600"
          id="username"
          type="text"
          placeholder="add task..."
        ></input>
      </div>
    </div>
  );
};

export default FormContainer;
