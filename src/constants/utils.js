// src/data/sidebarData.js (you can place it wherever you like)

import home1 from "../assets/home1.png";
import shorts from "../assets/shorts.png";
// import subscriptions from "../assets/subscriptions.png";

// import history1 from "../assets/history1.png";
// import playlist2 from "../assets/playlist2.png";
// import yourvideos from "../assets/yourvideos.png";
// import watchlater from "../assets/watchlater.png";
// import liked from "../assets/liked.png";

import trending from "../assets/trending.png";
// import shopping from "../assets/shopping.png";
import music1 from "../assets/music1.png";
import movies from "../assets/movies.png";
// import live from "../assets/live.png";
import gaming from "../assets/gaming.png";
import news1 from "../assets/news1.png";
import sports1 from "../assets/sports1.png";
import yourcourses from "../assets/yourcourses.png";
import fashionandbeauty from "../assets/fashionandbeauty.png";
// import podcast from "../assets/podcast.png";
import travel from "../assets/travel.png";
import vlog from "../assets/vlog.png";

import simon from "../assets/simon.png";
import megan from "../assets/megan.png";
import jack from "../assets/jack.png";
import gerard from "../assets/gerard.png";

import logo from "../assets/yt-logo-mobile.png";
import youtubestudio2 from "../assets/youtubestudio2.svg";
import youtubemusic from "../assets/youtubemusic.png";
import youtubekids1 from "../assets/youtubekids1.png";

import settings from "../assets/settings.png";
import reporthistory from "../assets/reporthistory.png";
import help from "../assets/help.png";
import sendfeedback from "../assets/sendfeedback.png";
import moment from "moment/moment";

export const primaryLinks = [
  { name: "Home", img: home1, id: 24 },
  { name: "Shorts", img: shorts, id: 42 },
  // { name: "Subscriptions", img: subscriptions, type: "subscriptions" },
];

// export const libraryLinks = [
//   { name: "History", img: history1, type: "history" },
//   { name: "Playlists", img: playlist2, type: "library" },
//   { name: "Your Videos", img: yourvideos, type: "yourVideos" },
//   { name: "Your courses", img: yourcourses, type: "yourVideos" },
//   { name: "Watch Later", img: watchlater, type: "watchLater" },
//   { name: "Liked Videos", img: liked, type: "likedVideos" },
// ];

export const subscriptionLinks = [
  { name: "Simon", img: simon },
  { name: "Megan", img: megan },
  { name: "Jack", img: jack },
  { name: "Gerard", img: gerard },
];

export const exploreLinks = [
  { name: "Trending", img: trending, id: 24 },
  { name: "Music", img: music1, id: 10 },
  { name: "Movies", img: movies, id: 30 },
  { name: "Gaming", img: gaming, id: 20 },
  { name: "News", img: news1, id: 25 },
  { name: "Sports", img: sports1, id: 17 },
  { name: "Learning", img: yourcourses, id: 27 },
  { name: "How-to & Style", img: fashionandbeauty, id: 26 },
  { name: "Travel & Events", img: travel, id: 19 },
  { name: "People & Vlogs", img: vlog, id: 22 },
];

export const moreLinks = [
  { name: "YouTube Premium", img: logo, type: "premium" },
  { name: "YouTube Studio", img: youtubestudio2, type: "premium" },
  { name: "YouTube Music", img: youtubemusic, type: "musicApp" },
  { name: "YouTube Kids", img: youtubekids1, type: "kids" },
];

export const settingsLinks = [
  { name: "Settings", img: settings, type: "settings" },
  { name: "Report history", img: reporthistory, type: "report" },
  { name: "Help", img: help, type: "help" },
  { name: "Send feedback", img: sendfeedback, type: "feedback" },
];

export const footerLinks = [
  { name: "About", url: "https://www.youtube.com/about/" },
  { name: "Press", url: "https://www.youtube.com/press" },
  { name: "Copyright", url: "https://www.youtube.com/about/copyright/" },
  { name: "Contact us", url: "https://www.youtube.com/t/contact_us/" },
  { name: "Creators", url: "https://www.youtube.com/creators/" },
  { name: "Advertise", url: "https://www.youtube.com/ads/" },
  { name: "Developers", url: "https://developers.google.com/youtube" },
  { name: "Terms", url: "https://www.youtube.com/t/terms" },
  { name: "Privacy", url: "https://policies.google.com/privacy" },
  { name: "Policy & Safety", url: "https://www.youtube.com/about/policies/" },
  {
    name: "How YouTube works",
    url: "https://www.youtube.com/howyoutubeworks/",
  },
  { name: "Test new features", url: "https://www.youtube.com/testtube" },
];
const BASE_URL = "https://www.googleapis.com/youtube/v3/videos?";
export const API_KEY = "AIzaSyCC1Oogur7kLeUfqYPdq-e6eWImH3fvIpk";

const TABS = {
  Home: `${BASE_URL}?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_KEY}`,
  Music: `${BASE_URL}?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=10&regionCode=US&maxResults=20&key=${API_KEY}`,
  Kids: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=kids&regionCode=US&type=video&maxResults=50&key=${API_KEY}`,
  Premium: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=premium%20exclusive&regionCode=US&type=video&maxResults=50&key=${API_KEY}`,
};

export const homeUrl =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=AIzaSyCC1Oogur7kLeUfqYPdq-e6eWImH3fvIpk";

export const podcastUrl =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&q=podcast&type=video&key=AIzaSyCC1Oogur7kLeUfqYPdq-e6eWImH3fvIpk";

export const liveUrl =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&q=news&key=AIzaSyCC1Oogur7kLeUfqYPdq-e6eWImH3fvIpk";

export function duration_convertor(ptString) {
  try {
    const duration = moment.duration(ptString);
    const hours = duration.hours();
    const minutes = duration.minutes().toString().padStart(2, "0");
    const seconds = duration.seconds().toString().padStart(2, "0");

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  } catch (error) {
    console.error("Invalid PT format:", error);
    return "00:00";
  }
}

export function views_convertor(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  } else {
    return views;
  }
}

export function decodeHtmlEntities(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  let decoded = textarea.value;
  return decoded.replace(/<br\s*\/?>/gi, "\n");
}
