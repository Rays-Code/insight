import React from 'react'
import { Link } from 'react-router-dom';


interface BlogCardProps{
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}

const BlogCard = ({authorName, title, content, publishedDate, id}: BlogCardProps) => {

  return (
    <Link to={`/blog/${id}`}>
    <div className='p-4 border-b-2 border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer'>
        <div className='flex'>  
            <Avator name={authorName}/> 
           <div className='text-sm font-extralight pl-2'>{authorName} ·</div>
           <div className='pl-1 text-sm font-light text-slate-500'>{publishedDate}</div>
        </div>
        <div className='text-3xl font-bold pt-2'>
            {title}
        </div>
        <div className='text-md font-normal text-slate-700'>
            {content.slice(0, 100) + "..."}
        </div>
        <div className='text-sm text-slate-500 pt-4'>
            {`${Math.ceil(content.length / 100)} minutes read`}
        </div>
    </div> 
    </Link> 
  )
}

function Avator({name}: {name: string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-300 rounded-full ">
        <span className="font-medium text-gray-500">{name[0]}</span>
    </div>
}

export default BlogCard