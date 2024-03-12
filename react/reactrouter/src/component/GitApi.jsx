import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitApi = () => {

    // const [user , setUser] = useState({})
    const user = useLoaderData()
    // useEffect(()=>{
    //         fetch("https://api.github.com/users/iam-gourav")
    //         .then((res)=> res.json())
    //         .then((data)=>setUser(data))
    // },[])
  return (
    <div className='w-full h-80 bg-slate-600 flex justify-center items-center'>
        <h1 className='text-white text-4xl'>GitId:{user.id? user.id:null}</h1>
    </div>
  )
}

export default GitApi

export const gitapi = async ()=>{
    let res = await fetch("https://api.github.com/users/iam-gourav")
    return res.json()
}