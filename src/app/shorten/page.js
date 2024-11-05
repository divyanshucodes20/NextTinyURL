'use client'
import { useState } from "react"
import React from 'react'

const page = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState(false)
  return (
    <div className="mx-auto max-w-lg bg-orange-200 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input value={url} className='rounded-md px-4 py-2 focus:outline-orange-900' onChange={e=>{setUrl(e.target.value)}}   type="text" placeholder='Enter your URL'/>
        <input value={shortUrl} className='rounded-md px-4 py-2 focus:outline-orange-900' onChange={e=>setShortUrl(e.target.value)} type="text" placeholder='Enter your preferred short URL'/>
        <button className='bg-orange-300 shadow-lg p-3 rounded-lg font-bold py-1 my-5 hover:bg-orange-600'>Generate</button>
      </div>
    </div>
  )
}

export default page
