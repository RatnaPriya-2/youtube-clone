import axios from "axios";
import { API_KEY } from "../constants/utils";

const BASE_URL = "https://www.googleapis.com/youtube/v3/videos?";
export const fetchDataFromApi = async (id) => {
  try {
    if ([27, 30, 19, 42].includes(id)) {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=${id}&type=video&maxResults=1&key=${API_KEY}`
      );

      if (!data.items || data.items.length === 0) {
        console.warn("No search results for category", id);
        return [];
      }

      const videoIds = data.items
        .map((item) => item.id.videoId)
        .filter(Boolean)
        .join(",");

      if (!videoIds) {
        console.warn("No valid video IDs from search results");
        return [];
      }

      const { data: videoData } = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
      );

      return videoData?.items || [];
    } else {
      const { data } = await axios.get(
        `${BASE_URL}part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&${
          id ? `videoCategoryId=${id}` : ""
        }&key=${API_KEY}`
      );
      console.log("API Response for category", id, ":", data);
      return data.items;
    }
  } catch (error) {
    console.log(error);
  }
};
