import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../services/api'
import { useUsersStore } from '../stores/useUsersStore'
import { useNavigate } from 'react-router-dom'

function login() {

    // states
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validateEmail, setValidateEmail] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)
    const [serverErrorResponse, setServerErrorResponse] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const { user, setUser } = useUsersStore()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        // validate form input
        !email ? setValidateEmail(true) : setValidateEmail(false)
        !password ? setValidatePassword(true) : setValidatePassword(false)

        const userData = { email: email, password: password }

        // if all required fields are filled
        if (email && password) {
            // login user
            loginUser(userData)
                .then((response) => {
                    if (response.status == 200) {
                        // console.log(response)
                        setUser({ ...response })
                        localStorage.setItem('user', JSON.stringify({ ...response }))
                        setTimeout(() => {
                            // reset form
                            setEmail("")
                            setPassword("")
                        }, 1000)
                        setServerErrorResponse('')
                        navigate(-1)
                    } else {
                        setServerErrorResponse(response.error)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <>
            <div className='md:w-1/2 mx-auto pt-12' >
                <h1 className="text-3xl font-bold px-5">Login</h1>
                <form method="post" className="pt-10 px-5">
                    {serverErrorResponse ? <p className="text-red-500 text-xs pb-5">{serverErrorResponse}</p> : null}
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={email} onChange={e => setEmail(e.target.value)} cols="30" rows="4" type='email' name="email" id="email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email *</label>
                        {validateEmail ? <p className="text-red-500 text-xs">Email is required</p> : null}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={password} onChange={e => setPassword(e.target.value)} cols="30" rows="4" name="password" id="password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required type={!showPassword ? 'password' : 'text'} />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your password *</label>
                        {!showPassword ? <div
                            className="absolute duration-300 transform  top-1 right-0 z-10 origin-[0] bg-[url('/show.png')] w-5 h-5 bg-center bg-contain bg-no-repeat hover:cursor-pointer"
                            onClick={() => setShowPassword(true)}
                        ></div>
                            :
                            <div
                                className="absolute duration-300 transform  top-1 right-0 z-10 origin-[0] bg-[url('/hide.png')] w-5 h-5 bg-center bg-contain bg-no-repeat hover:cursor-pointer"
                                onClick={() => setShowPassword(false)}
                            ></div>}
                        {validatePassword ? <p className="text-red-500 text-xs">Password is required</p> : null}
                    </div>
                    <div className="w-full">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="text-white bg-primary hover:bg-secondary focus:outline-none w-full px-5 py-2.5 mt-3 text-center"
                        >
                            Submit
                        </button>
                        <p className='text-sm pt-4 text-center'>Don't have an account? <span className='text-secondary underline'>
                            <Link to={'/signup'}>
                                Sign Up
                            </Link>
                        </span></p>
                    </div>

                </form>
            </div>
        </>
    )
}

export default login



