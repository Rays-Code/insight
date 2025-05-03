import { useEffect } from 'react'
import Quote from '../components/Quote'
import { Auth } from '../components/Auth'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem("token") || ""
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/blogs")
      alert("You're already signed up !");
    }
  }, []);
    

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div>      
        <div className=' text-2xl pt-5 ml-6 font-semibold flex flex-col justify-center'><Link to={"/"}>Insight Blog</Link></div>
        <Auth type='signup'/>
      </div>
      <div className='hidden lg:block'>
      <Quote />
      </div>
    </div>
  )
}

export default Signup