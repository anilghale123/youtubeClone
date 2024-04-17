import React, { useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { VideoContext } from "./VideoContext";
import { createContext } from 'react';
import { useContext } from 'react';


const Head = () => {
  const { setVideos } = useContext(VideoContext); 

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleSearchSubmit = async (query) => {
    const API_KEY = 'AIzaSyCMmED8wadX_HusqU4NKosHTJvzEHHygNI'; 
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  
    try {
      const  response  = await axios.get(BASE_URL, {
        params: {
          part: 'snippet', 
          maxResults: 10, // Adjust number of results
          q: query,
          key: API_KEY,
          regionCode: 'US'
        }
      });
  
      const searchResults = response.data.items;
      setVideos(searchResults);
      console.log(searchResults); // Inspect the results
  
      // TODO: Process and use the fetched 'searchResults'
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };


  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" flex place-content-between p-4 shadow-lg bg-black fixed w-full">
      <div className="flex h-8 gap-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 mt-1 mr-2 ml-2"
          src="/icons/menu.png"
          alt="menuIcon"
        />
        <img src="/icons/youtube.png" alt="youtubeLogo" />
        {/* <h1 className=' font-bold text-lg cursor-pointer'>YouTube</h1> */}
      </div>

      <div className="flex  h-8">
      <input
       className="w-80 rounded-l-full border border-black p-3"
       type="text"
       placeholder="search"
       onChange={handleSearchChange} 
       value={searchTerm}
   />
   <button 
      class="border rounded-r-full border-black p-3 flex items-center bg-gray-100"
      onClick={() => handleSearchSubmit(searchTerm)}> 
        🔍
   </button>

        <img src="/icons/microphone.png" alt="microphoneLogo" />
      </div>

      <div className="flex gap-4 h-8">
        <img src="icons/videoUpload.png" alt="videoUpload" />
        <img src="icons/bell.png" alt="notificationIcon" />
        <img src="icons/user.png" alt="userIcon" />
      </div>
    </div>
  );
};

export default Head;
