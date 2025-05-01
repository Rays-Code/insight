import { useState } from 'react'
import Appbar from '../components/Appbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Publish = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const navigate = useNavigate()

    const publishPost = async () => {
       const res =  await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,  {
                title,
                content
            },
            {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        )
        navigate(`/blog/${res.data.id}`)
    }

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
  <Appbar name="Anonymous" />

  <div className="flex-grow flex items-center justify-center ">
    <div className="w-full max-w-screen-md px-4 space-y-4 bg-white px-15 py-6 rounded-lg shadow-md">
    <h1 className='text-lg'>Create a New post</h1>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Title"
        onChange={(e) => {
            setTitle(e.target.value)
        }}
      />
      <textarea
        rows={12}
        className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
        placeholder="Tell your story..."
        onChange={(e) => {
            setContent(e.target.value)
        }}
      ></textarea>
      <div className="flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg" 
        onClick={publishPost}>
          Publish Post
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Publish