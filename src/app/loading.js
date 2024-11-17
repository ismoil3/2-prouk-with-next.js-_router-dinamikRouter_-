import React from 'react'

const  Loading = () => {
  return (
    <div className="w-full h-screen bg-transparent flex items-center justify-center text-white text-2xl">
    <div className="animate-spin border-4 border-b-transparent border-black rounded-full w-10 h-10 mr-4"></div>
    </div>

  )
}

export default  Loading