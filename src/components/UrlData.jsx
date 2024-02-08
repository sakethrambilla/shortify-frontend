import { useEffect, useState } from "react";
import refreshImg from "../assets/refresh.png";
import UpdateModal from "./UpdateModal";
import { toast } from "react-toastify";
import DivRow from "./DivRow";
import { PropTypes } from "prop-types";

const UrlData = ({ handleGetData, urlsData }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [URL, setURL] = useState(null);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleOnClose = async (update) => {
    await update(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <p className="text-xl ">Press refresh for updated View Count</p>
        <button
          className="shadow-sm shadow-gray-200 mx-4 my-3 w-32 px-1 py-2 text-black font-semibold bg-blue-300 rounded-3xl  flex flex-row justify-center gap-1 items-center"
          onClick={() => {
            handleGetData();
            toast.info(`Data refreshed`, {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }}
        >
          Refresh <img src={refreshImg} alt="refresh" className="w-5" />
        </button>
      </div>

      {/* Div Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5">
        <div className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
          <div className="flex flex-row  text-2sm font-bold text-black uppercase bg-gray-200 ">
            <div className="px-6 py-3 w-[5%] ">S.nO</div>
            <div className="px-6 py-3 w-[20%]">SHORT ULR</div>
            <div className="px-6 py-3 w-[80%] justify-start flex">
              ORIGINAL URL
            </div>
            <div className="px-6 py-3 ">Clicks</div>
            <div className="px-6 py-3 ">UPDATE</div>
            <div className="px-6 py-3 ">Delete</div>
          </div>
        </div>
        {urlsData?.length > 0 &&
          urlsData.map((url, index) => (
            <DivRow
              url={url}
              handleGetData={handleGetData}
              key={index}
              index={index}
              setUpdateModal={setUpdateModal}
              setURL={setURL}
            />
          ))}
        <UpdateModal
          getData={handleGetData}
          url={URL}
          visible={updateModal}
          onClose={() => handleOnClose(setUpdateModal)}
        />
      </div>
    </div>
  );
};

UrlData.propTypes = {
  handleGetData: PropTypes.func,
  urlsData: PropTypes.String,
};

export default UrlData;
