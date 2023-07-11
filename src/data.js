import axios from "axios";
// const type = ["everything", "top-headline"];
// const qurey = ["tesla", "apple", "mixed"];
// const from = "2023-06-06";
// const to = "2023-06-11";
// const country = "US";
// const category = ["sports", "business"];
// const sources = ["techcrunch", "cnn"];
// const ur = `https://newsapi.org/v2/`;

export const fetchData = async ({ url }) => {
  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error(error.message);
  }
};
