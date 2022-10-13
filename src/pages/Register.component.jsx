import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../api"


const Register = () => {
    const navigate = useNavigate()
    const [ registerObject, setRegisteObject ] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password, password_confirmation } = registerObject

        if (password !== password_confirmation) {
            alert("Passwords are not equal")
            return;
        }

        try {
            const res = await api.post('/register', registerObject);
            console.log(res)
            alert("User created. Redirecting you to log in")
            navigate('/')
        } catch (error) {
            alert("User already exists")
            console.log(error)
        }


    }

    console.log(registerObject)

    return (
        <div className='flex justify-center bg-white h-full'>
            <div className='border w-96 px-5 py-8 rounded mt-10 bg-[#F3F4F6] drop-shadow-md'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='uppercase text-center text-2xl font-bold antialiased '>Elevy Sentiments</h1>
                    <div className='my-5'>
                        <label>Name</label>
                        <input type="text" className='border-2 block w-full h-10 rounded-lg px-2 text-sm' required value={registerObject.name} onChange={e => setRegisteObject({...registerObject, name: e.target.value})} />
                    </div>
                    <div className='my-5'>
                        <label>Email</label>
                        <input type="email" className='border-2 block w-full h-10 rounded-lg px-2 text-sm' required value={registerObject.email} onChange={e => setRegisteObject({...registerObject, email: e.target.value})} pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"/>
                    </div>
                    <div className='mb-5'>
                        <label>Password</label>
                        <input type="password" className='border-2 block w-full h-10 rounded-lg px-2 text-sm' required value={registerObject.password} onChange={e => setRegisteObject({...registerObject, password: e.target.value})} minLength="6"/>
                    </div>
                    <div className='mb-5'>
                        <label>Confirm Password</label>
                        <input type="password" className='border-2 block w-full h-10 rounded-lg px-2 text-sm' required value={registerObject.password_confirmation} onChange={e => setRegisteObject({...registerObject, password_confirmation: e.target.value})} />
                    </div>
                    <div>
                        <button type='submit' className='bg-red-900 text-white px-5 py-2 rounded-lg w-full my-2 hover:bg-red-800 duration-300'>Submit</button>
                    </div>
                    <small className=''>Already have an account? <Link to="/" className="underline decoration-1">Click to login</Link></small>
                </form>
            </div>
        </div>
      )
}

export default Register