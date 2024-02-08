import React, { useState } from "react";
import copyImg from "../assets/copy.png";
import axios from "axios";
import { toast } from "react-toastify";

const DivRow = ({
  url,
  handleGetData,
  index,
  setUpdateModal,
  setURL,
  setAnalyticsModal,
}) => {
  const baseURL = axios.defaults.baseURL;
  //   const [updateModal, setUpdateModal] = useState(false);
  //   const [analyticsModal, setAnalyticsModal] = useState(false);
  const handleModal = (url) => {
    setUpdateModal(true);

    setURL(url);
  };

  const deleteData = async (e, id) => {
    const res = await axios.delete(`/url/${id}`);
    toast.error(`${res.data.message}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    handleGetData();
  };
  return (
    <div className="flex flex-row  text-sm text-black   bg-white border-b  hover:bg-gray-100 ">
      <div className="px-6 py-3 w-[5%] ">{index + 1}</div>
      <div className="px-6 py-3   w-[15%]">
        <span
          className="cursor-pointer  text-green-500 flex gap-2"
          onClick={() => {
            navigator.clipboard.writeText(`${baseURL}/url/${url.shortId}`);
            toast.success(`Link Copied`, {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }}
        >
          <p className="truncate">{url.shortId}</p>
          <img src={copyImg} alt="" className="w-5 h-5" />
        </span>
      </div>

      <div className="px-6 mx-2 py-3 w-[80%] justify-start flex truncate ">
        <span
          className="cursor-pointer  text-blue-500 flex gap-2 text-left"
          onClick={() => {
            navigator.clipboard.writeText(`${url.redirectURL}`);
            toast.success(`Link Copied`, {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }}
        >
          <p className="truncate">{url.redirectURL}</p>

          <img src={copyImg} alt="" className="w-5 h-5" />
        </span>
      </div>
      <div className="px-6 py-3 ">{url.visitHistory.length}</div>
      <div className="px-6 py-3 ">
        <span
          className="font-medium text-blue-600  hover:underline cursor-pointer"
          onClick={() => handleModal(url)}
        >
          Update
        </span>
      </div>
      <div className="px-6 py-3 ">
        <span
          className="font-medium text-red-500 hover:underline cursor-pointer"
          onClick={(e) => deleteData(e, url.shortId)}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default DivRow;
