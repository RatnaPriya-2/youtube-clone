import axios from "axios";
import { API_KEY } from "../constants/utils";

const BASE_URL = "https://www.googleapis.com/youtube/v3/videos?";
export const fetchDataFromApi = async (id) => {
  try {
    if (id === 27 || id === 30 || id === 19 || id === 42) {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=${id}&type=video&maxResults=50&key=${API_KEY}`
      );

      const videoIds = data.items.map((item) => item.id.videoId).join(",");
      console.log(videoIds);
      const { data: videoData } = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
      );

      return videoData.items;
    } else {
      const { data } = await axios.get(
        `${BASE_URL}part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&${
          id ? `videoCategoryId=${id}` : ""
        }&key=${API_KEY}`
      );
      return data.items;
    }
  } catch (error) {
    console.log(error);
  }
};
