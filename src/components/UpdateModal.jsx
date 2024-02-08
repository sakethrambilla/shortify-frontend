import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateModal = ({ getData, url, visible, onClose }) => {
  const [newURL, setNewURL] = useState("");
  const handleUpdateURL = async () => {
    try {
      const res = await axios.put(`/url/${url.shortId}`, { url: newURL });
      onClose();
      getData();
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
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
    >
      <div className="bg-white w-3/4 md:w-2/4  flex-wrap flex flex-col rounded-2xl  p-8">
        <div className="text-2xl md:text-4xl  text-gray-800 mt-4 underline underline-offset-4 py-2">
          Update URL
        </div>

        <div className=" flex flex-wrap mt-4">
          Short URL ID:
          <p className="text-green-500">{url.shortId}</p>
        </div>

        <div className="flex flex-row mt-4 w-full">
          <input
            type="text"
            placeholder="Enter New URL"
            onChange={(e) => setNewURL(e.target.value)}
            className="w-3/4 bg-gray-100 border-2 md:w-96"
          />
          <button
            onClick={() => handleUpdateURL()}
            className=" px-2  text-white bg-[#f5385d] rounded-xl"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
