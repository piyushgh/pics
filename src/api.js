import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID GrN_EbkOiXX2xRD4RrTxedL-TBIZHA93iirWRUJSj8o",
    },
    params: {
      query: term,
      per_page:100
    },
  });

  return response.data.results;
};

export default searchImages;