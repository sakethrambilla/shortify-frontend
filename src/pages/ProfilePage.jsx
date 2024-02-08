import DashboardHeader from "../components/DashboardHeader";
import UrlData from "../components/UrlData";
import { useState } from "react";
import axios from "axios";

import UrlShortner from "../components/UrlShortner";

// const dummy data =

const ProfilePage = () => {
  const [urlsData, setUrlsData] = useState([]);

  async function handleGetData() {
    const urls = await axios.get("/url/urls");
    setUrlsData(urls.data);
  }

  return (
    <div className="flex flex-col ">
      <DashboardHeader />
      <UrlShortner getData={handleGetData} />

      <UrlData
        handleGetData={handleGetData}
        urlsData={urlsData}
        setUrlsData={setUrlsData}
      />
    </div>
  );
};

export default ProfilePage;
