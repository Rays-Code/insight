import { Link, useNavigate } from 'react-router-dom'

const Appbar = ({name}: {name: string}) => {
  const navigate = useNavigate()

  function Logout(){
    localStorage.removeItem("token")
    navigate("/signin")
  }

  return (
    <div className='flex justify-between border-b px-10 py-4'>

      <div className=' text-2xl font-semibold flex flex-col justify-center'><Link to={"/"}>Insight Blog</Link></div>
      
      <div>
      <Link to={"/publish"}><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button></Link>
      <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={Logout}>Logout</button>
      <div className="relative cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full ">
        <span className="font-medium text-gray-500">{name[0]}</span>
        </div>
      </div>
    </div>
  )
}

export default Appbar