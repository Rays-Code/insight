import {useState, useEffect} from 'react'
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { useBlogs } from '../hooks'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Blogs = () => {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    const {loading, blogs} = useBlogs()

    const token = localStorage.getItem("token") || ""
    

    useEffect(() => {
        const fetchUsername = async () => {
            if(!token){
                navigate("/signin")
            }else{
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/info`,{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            setUsername(res.data.user.name)
        }
        }

        fetchUsername()
    }, [token])



    if(loading){
        return <div>
            loading...
        </div>
    }



  return (
    <div>
    <Appbar name={username || "NoName"}/>
    {blogs.map((blog) => {
        return <div className='flex flex-col items-center'>
        <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedDate='Dec 3, 2024'></BlogCard>
    </div>
    })}
    
    </div>

  )
}

export default Blogs

