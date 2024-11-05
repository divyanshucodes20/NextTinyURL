'use client'
import { useState } from "react"
import React from 'react'
import Link from "next/link"
const page = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")
  const generateUrl=()=>{
    const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
                setUrl("")   
                setShortUrl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));
  }
  return (
    <div className="mx-auto max-w-lg bg-orange-200 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input value={url} className='rounded-md px-4 py-2 focus:outline-orange-900' onChange={e=>{setUrl(e.target.value)}}   type="text" placeholder='Enter your URL'/>
        <input value={shortUrl} className='rounded-md px-4 py-2 focus:outline-orange-900' onChange={e=>setShortUrl(e.target.value)} type="text" placeholder='Enter your preferred short URL'/>
        <button onClick={generateUrl} className='bg-orange-300 shadow-lg p-3 rounded-lg font-bold py-1 my-5 hover:bg-orange-600'>Generate</button>
      </div>
      {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}
    </div>
  )
}

export default page
