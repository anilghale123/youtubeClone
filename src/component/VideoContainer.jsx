import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const apiKey = 'AIzaSyCMmED8wadX_HusqU4NKosHTJvzEHHygNI'; 
  const youtubeApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=50&key=${apiKey}`;

   const[videos,setVideos] = useState([]);
  useEffect(() => {
    getVideos(); 
  }, []); 

  const getVideos = async () => {
    const data = await fetch(youtubeApi);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => ( 
     
      <div> {/* Added a wrapping div */}
          <VideoCard info={video} />
      </div>
  
      ))}
    </div>
  );
};

export default VideoContainer;
