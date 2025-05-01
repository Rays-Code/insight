import React from 'react'
import Appbar from './Appbar'
import { Blog } from '../hooks'

const DisplayBlog = ({blog} : {blog: Blog}) => {
  return (
    <div>
        <Appbar name={blog.author.name || "Anonymous"}/>

        <div className='flex justify-center mt-10'>
        <div className='grid grid-cols-12 px-10 pt-200 w-full max-w-screen-2xl'>
        <div className='col-span-8'>
            <div className='text-5xl font-extrabold'>
                {blog.title}
            </div>
            <div className='mt-4 text-slate-500'>
                Posted on 3rd Dec, 2024
            </div>
            <div className='mt-6 text-slate-700'>
                {blog.content}
            </div>
        </div>
        <div className='col-span-4 text-2xl font-extrabold'>
            <div className='text-sm font-normal text-base font-bold'>
                Author
            </div>
            <div className='flex justify-start items-center gap-3 mt-2'>
            <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-300 rounded-full ">
               <span className="font-normal text-base text-gray-500">{blog?.author?.name?.[0] ?? "A"}</span>
            </div>
            <div>{blog.author.name || "Anonymous"}</div>
            </div>
            
            <div className='mt-3 ml-9 text-sm font-normal text-slate-600'>
                Random catch phrase about the author's ability to grab user's attention.
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default DisplayBlog