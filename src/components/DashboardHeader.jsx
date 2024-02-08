import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";

const DashboardHeader = () => {
  const [redirect, setRedirect] = useState(false);
  const handelLogout = async () => {
    try {
      const res = await axios.post("/user/logout");
      toast.success(`${res.data.message}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setRedirect(true);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(`${message}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex flex-row text-black  p-2 bg-gray-100 justify-between border-b-4 border-gray-300">
      <div className=" flex justify-center items-center">
        <img src={logo} className="mx-4 h-6 sm:h-9" alt="Flowbite Logo" />
        <p className="m my-1 py-1 text-2xl font-bold  text-gray-800">
          Dashboard
        </p>
      </div>

      <button
        className="px-3 text-black rounded-3xl bg-white hover:bg-pink-50 shadow-sm   mx-8 border-4 border-[#f5385d]"
        onClick={() => handelLogout()}
      >
        Log out
      </button>
    </div>
  );
};

export default DashboardHeader;
