import { useEffect } from "react"
import Quote from '../components/Quote'
import { Auth } from '../components/Auth'
import { useNavigate } from "react-router-dom"

const Signin = () => {
    const navigate = useNavigate()
  
    useEffect(() => {
      const token = localStorage.getItem("token")
      if (!token) {
        alert("You're already signed up !");
        navigate("/signin");
      } else {
        navigate("/blogs")
      }
    }, []);

    return (
    <div className='grid grid-cols-2'>
        <div>
           <Auth type='signin'/>
        </div>
        <div className='invisible lg:visible'>
           <Quote />
        </div>  
        </div>
    )       
}

export default Signin