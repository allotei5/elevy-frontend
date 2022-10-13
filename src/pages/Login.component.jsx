import { useState } from "react";
import { Link } from "react-router-dom"
import api from "../api";
import { setCookie } from "../utilities";

const Login = () => {
    const [ loginObject, setLoginObject ] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post('/login', loginObject)
            setCookie('token', res.data.token)
            window.location.href="/"
        } catch (error) {
            console.log(error)
            if(error.response.status == 401) {
                alert("Email or Password is wrong")
            } else {
                alert("Server Error")
            }
        }
    }

  return (
    <div className='flex justify-center bg-white h-full'>
        <div className='border w-96 px-5 py-8 rounded mt-10 bg-[#F3F4F6] drop-shadow-md'>
            <form onSubmit={e => handleSubmit(e) }>
                <h1 className='uppercase text-center text-2xl font-bold antialiased '>Elevy Sentiments</h1>
                <div className='my-5'>
                    <label>Email</label>
                    <input type="email" required className='border-2 block w-full h-10 rounded-lg px-2 text-sm' value={loginObject.email} onChange={e=>setLoginObject({ ...loginObject, email: e.target.value })} />
                </div>
                <div className='mb-5'>
                    <label>Password</label>
                    <input type="password" required className='border-2 block w-full h-10 rounded-lg px-2' value={loginObject.password} onChange={e=>setLoginObject({ ...loginObject, password: e.target.value })} />
                </div>
                <div>
                    <button type='submit' className='bg-red-900 text-white px-5 py-2 rounded-lg w-full my-2 hover:bg-red-800 duration-300'>Submit</button>
                </div>
                <small className=''>Don't have an account? <Link to="/register" className="underline decoration-1">Click to create one</Link></small>
            </form>
        </div>
    </div>
  )
}

export default Login