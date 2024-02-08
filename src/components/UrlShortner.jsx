import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";

const UrlShortner = ({ getData }) => {
  const [url, setUrl] = useState("");

  const isValidURL = async (str) => {
    const pattern =
      /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/\S*)?$/;

    if (pattern.test(str)) {
      return str;
    }
  };

  const urlGenerator = async () => {
    try {
      const URL = await isValidURL(url);
      console.log(URL);
      if (URL) {
        const res = await axios.post("/url/", {
          url: URL,
        });
        console.log(res);
        getData();
        setUrl("");
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
      } else {
        toast.error(`Not a valid URL`, {
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

  return (
    <div className="flex flex-col items-center w-full mt-12 p-4 my-2">
      <p className="text-xl m-2 font-semibold">Paste the URL to be shortened</p>
      <div className="flex w-2/3 flex-row justify-center gap-4">
        <input
          type="text"
          className="w-3/4  bg-gray-50 border-2 border-gray-400 shadow-sm"
          placeholder="Enter your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="px-2 my-0.5  text-xl text-white bg-[#f5385d] rounded-2xl"
          onClick={() => urlGenerator()}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

UrlShortner.propTypes = {
  getData: PropTypes.func,
};

export default UrlShortner;
