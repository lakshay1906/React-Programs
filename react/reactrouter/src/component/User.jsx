import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='w-full h-80 bg-slate-600 flex justify-center items-center'>
        <h1 className='text-white text-4xl'>user:{userid}</h1>
    </div>
  )
}

export default User