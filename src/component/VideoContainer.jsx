import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { VideoContext } from "./VideoContext";
import { createContext } from 'react';
import { useContext } from 'react';


const VideoContainer = () => {

  const { videos } = useContext(VideoContext);

  const apiKey = 'AIzaSyCMmED8wadX_HusqU4NKosHTJvzEHHygNI'; 
  const youtubeApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=50&key=${apiKey}`;

   const[videoss,setVideoss] = useState([]);
  
   useEffect(() => {
    
    getVideos(); 
  }, []); 

  
  const getVideos = async () => {
    const data = await fetch(youtubeApi);
    const json = await data.json();
    // console.log(json.items);
    setVideoss(json.items);
  };

  console.log(videos);
  return (
    <div className='flex flex-wrap'>
        {videos.length > 0 ? ( // If search results exist 
            videos.map((video) => ( 
                <Link to={"/watch?v=" + video.id.videoId}> <VideoCard info={video} /> </Link>
            ))
        ) : ( // Otherwise, show popular videos
            videoss.map((video) => ( 
                <Link to={"/watch?v=" + video.id}> <VideoCard info={video} /> </Link>
            ))
        )}
    </div>
);
};

export default VideoContainer;
