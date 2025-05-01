import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@rayscode/medium-common";
import axios from "axios"


export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

async function sendRequest(){
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/${type === "signup"? "signup": "signin"}`, postInputs)
        const jwt = response.data.jwt
        localStorage.setItem("token", jwt)
        navigate("/blogs")  
    } catch (error) {
        alert("Error while signin up")
    }
    
}

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <div>
            <div className="px-10">
            <div className="text-3xl h-50 font-extrabold">
                Create an account 
            </div>  
            </div>

            <div className="text-slate-500 mt-2 mb-4 ml-14">
                {type === "signin"? "Don't have an account?" : "Already have an account?"} <Link to={type === "signin"? "/signup" : "/signin"} className="pl-2 underline">{type === "signin"? "Sign up" : "Sign in" }</Link>
            </div>

            {type === "signup"? <LabelledInputs label="Username" placeholder="Enter your username" onChange={(e) => {
                setPostInputs((c) => ({
                    ...c,
                    name: e.target.value
                }))
            }}/> : null}

            <LabelledInputs label="Email" placeholder="johndoe@example.com" onChange={(e) => {
                setPostInputs((c) => ({
                    ...c,
                    email: e.target.value
                }))
            }}/>

            <LabelledInputs label="Password" placeholder="" type="password" onChange={(e) => {
                setPostInputs((c) => ({
                    ...c,
                    password: e.target.value
                }))
            }}/>

           <button onClick={sendRequest} type="button" className="text-white w-full mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800">{type === "signup"? "Sign up" : "Sign in"}</button>
            </div>
        </div>
    )
}

interface LabelledInputs {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInputs({label , placeholder, onChange, type}: LabelledInputs){
    return <div className="flex flex-col space-y-2 mb-2">
    <label htmlFor="username" className="font-semibold text-sm text-black">
      {label}
    </label>
    <input
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-gray-300 w-full rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none bg-gray-50 focus:ring-2 focus:ring-blue-500"
      required
   />
  </div>

}