import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch} from "react-redux";

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
            dispatch(toggleMenu());
    };
  return (
    <div className=' flex place-content-between p-4 shadow-lg' >
      
      <div className='flex h-8 gap-1'>
      <img onClick={() => toggleMenuHandler()}
       className='h-6 mt-1 mr-2 ml-2'
       src = "/icons/menu.png"
        alt="menuIcon" />
      <img src="/icons/youtube.png" alt="youtubeLogo" />
      <h1 className=' font-bold text-lg cursor-pointer'>YouTube</h1>
     </div>

    <div className='flex  h-8'>
        <input className='w-80  rounded-l-full border border-black p-3' type="text" placeholder='search' />
        <button class="border rounded-r-full border-black p-3 flex items-center bg-gray-100">🔍</button>
       
        {/* <img className = 'border rounded-r-full border-black p-3' src="/icons/search.png" alt="searchIcon" /> */}
        <img src="/icons/microphone.png" alt="microphoneLogo" />
      </div>

      <div className='flex gap-4 h-8'>
        <img src="icons/videoUpload.png" alt="videoUpload" />
        <img src="icons/bell.png" alt="notificationIcon" />
        <img src="icons/user.png" alt="userIcon" />
      </div>




    </div>
  )
}

export default Head
