import { useEffect } from 'react'
import Quote from '../components/Quote'
import { Auth } from '../components/Auth'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    if(token){
      navigate("/blogs")
      alert("You're already signed up !")
    }
    
  })



  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div>
        <Auth type='signup'/>
      </div>
      <div className='invisible lg:visible'>
      <Quote />
      </div>
    </div>
  )
}

export default Signup