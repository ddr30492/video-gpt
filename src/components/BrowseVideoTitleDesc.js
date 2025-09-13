import React from 'react'

const BrowseVideoTitleDesc = ({title, overview}) => {
  return (
    <div className='w-100 aspect-video absolute top-0 pt-[20%] bg-gradient-to-r from-black pl-10 max-h-screen'>
        <h2 className='text-3xl font-semibold mb-3 text-white'>{title}</h2>
        <p className='text-sm font-medium w-3/12 text-white'>{overview}</p>
        <div className='flex gap-4 mt-4'>
          <button className='p-3 px-5 min-w-28  bg-orange-700 hover:bg-orange-800 text-white rounded-md text-base'>Play</button>
          <button className='p-3 px-5 min-w-28 bg-gray-600 hover:bg-gray-700 text-white rounded-md text-base'>More Info</button>
        </div>
    </div>
  )
}

export default BrowseVideoTitleDesc