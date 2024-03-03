import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID o7nKUSCzTmYPEOdTl96RpuWyop-pa36sNxoHSbiaPIE",
    },
    params: {
      query: term,
    },
  });

  console.log(response);

  return response;
};

export default searchImages;