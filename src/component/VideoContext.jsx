import { createContext, useState } from 'react';

export const VideoContext = createContext({
   videos: [],   // Initial state: empty array
   setVideos: () => {} // Default empty function
});

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}> 
      {children} // Components needing access go here
    </VideoContext.Provider>
  );
};

