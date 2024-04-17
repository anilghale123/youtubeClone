import React from 'react'
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    
    //early return pattern
    if(!isMenuOpen) return null;
    
    return (
    <div className='p-5 shadow-lg w-48 bg-black mt-10 '>
      
      <ul className='mb-3'>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
        
      </ul>

      <h1 className='font-bold'>You</h1>
        <ul className='mb-3'>
            <li>History</li>
            <li>Playlist</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
        </ul>


      <h1 className='font-bold'>Subscription</h1>
        <ul className='mb-3'>
            <li>Apna College</li>
            <li>Vikas Divyakirti</li>
            <li>CodeWithHarry</li>
            <li>Paupai Chyan</li>
        </ul>

        <h1 className='font-bold'>Explore</h1>
        <ul className='mb-3'>
            <li>Trending</li>
            <li>Music</li>
            <li>Gaming</li>
            <li>Sports</li>
        </ul>

        <ul className='mb-3'>
            <li>Settings</li>
            <li>Report history</li>
            <li>Help</li>
            <li>Send feedback</li>
        </ul>

    </div>
  )
}

export default SideBar
