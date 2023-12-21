import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../services/api'
import { useUsersStore } from '../stores/useUsersStore'

function signUp() {

    // states
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [grad, setGrad] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [validateFirstName, setValidateFirstName] = useState(false)
    const [validateLastName, setValidateLastName] = useState(false)
    const [validateEmail, setValidateEmail] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)
    const [validateCPassword, setValidateCPassword] = useState(false)
    const [validateGrad, setValidateGrad] = useState(false)
    const [validateMatchingPassword, setValidateMatchingPassword] = useState(false)
    const [showServerError, setShowServerError] = useState(false)
    const [serverError, setServerError] = useState("")
    const { user, setUser } = useUsersStore()
    const [showSuggestion, setShowSuggestion] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)
    const suggestedPassword = useRef("")
    console.log("Suggested Password: ", suggestedPassword.current)


    const meetsRequirements = (s, minLength) => {
        const hasUppercase = /[A-Z]/.test(s)
        const hasLowercase = /[a-z]/.test(s)
        const hasNumber = /\d/.test(s)
        const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(s)
        const hasValidLength = s.length >= minLength

        return hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter && hasValidLength
    }

    const generatePassword = () => {
        let charset = '!@#$%^&*()0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const passwordLength = 20
        let newPassword = ""
        for (let i = 0; i < passwordLength; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        const strongPassword = meetsRequirements(newPassword, 8)

        if (strongPassword) {
            suggestedPassword.current = newPassword
            return
        }
        generatePassword()
    }

    useEffect(() => {
        generatePassword()
    }, [])

    useEffect(() => {
        setShowSuggestion(false)
    }, [password])

    const handlePasswordSuggestion = () => {
        console.log("New Password: ")
        setPassword("")
        setCPassword("")
        setPassword(suggestedPassword.current)
        setCPassword(suggestedPassword.current)
        setShowSuggestion(false)
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // validate form input
        !firstName ? setValidateFirstName(true) : setValidateFirstName(false)
        !email ? setValidateEmail(true) : setValidateEmail(false)
        !lastName ? setValidateLastName(true) : setValidateLastName(false)
        !grad ? setValidateGrad(true) : setValidateGrad(false)
        !password ? setValidatePassword(true) : setValidatePassword(false)
        !cPassword ? setValidateCPassword(true) : setValidateCPassword(false)
        password != cPassword ? setValidateMatchingPassword(true) : setValidateMatchingPassword(false)

        const newUserData = { firstName: firstName, lastName: lastName, email: email, password: password, graduationYear: grad, phone: phone }

        // if all required fields are filled
        if (firstName && lastName && email && password && grad) {
            // create new user
            createUser(newUserData)
                .then((response) => {
                    if (response.error) {
                        setServerError(response.error)
                        setShowServerError(true)
                        return
                    }
                    setShowServerError(false)
                    if (response.status == 200) {
                        setUser({ ...response })
                        localStorage.setItem('user', JSON.stringify({ ...response }))
                        setTimeout(() => {
                            // reset form
                            setFirstName("")
                            setLastName("")
                            setEmail("")
                            setPhone("")
                            setGrad("")
                            setPassword("")
                            setCPassword("")
                        }, 1000)
                        navigate(-1)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    console.log("Password: ", password)

    return (
        <>
            <div className='w-1/2 mx-auto pt-12' >
                <h1 className="text-3xl font-bold px-5">Sign Up</h1>
                <form method="post" className="pt-10 px-5">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name *</label>
                            {validateFirstName ? <p className="text-red-500 text-xs">First name is required</p> : null}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" name="lastName" id="lastName" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name *</label>
                            {validateLastName ? <p className="text-red-500 text-xs">Last name is required</p> : null}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 py-3">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                value={grad}
                                onChange={e => setGrad(e.target.value)}
                                type="date"
                                name="grad"
                                id="grad"
                                className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="grad" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Graduation year *</label>
                            {validateGrad ? <p className="text-red-500 text-xs">Graduation year is required</p> : null}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phoneNumber" id="phoneNumber" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " />
                            <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={email} onChange={e => setEmail(e.target.value)} cols="30" rows="4" type='email' name="email" id="email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email *</label>
                        {validateEmail ? <p className="text-red-500 text-xs">Email is required</p> : null}
                    </div>
                    <div className="relative w-full mb-6 group">
                        <input value={password} onChange={e => setPassword(e.target.value)} cols="30" rows="4" name="password" id="password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required
                            type={!showPassword ? 'password' : 'text'}
                            onFocus={() => setShowSuggestion(true)}
                        />
                        {showSuggestion && <p
                            type='button'
                            className='absolute Z-0 bg-white p-2 rounded hover:cursor-pointer text-zinc-400 bg-opacity-80'
                            onClick={handlePasswordSuggestion}
                        >
                            Use suggested password?
                            <span> {suggestedPassword.current}</span>
                        </p>}
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
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={cPassword} onChange={e => setCPassword(e.target.value)} cols="30" rows="4" name="cPassword" id="cPassword" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required
                            type={!showCPassword ? 'password' : 'text'}
                        />
                        <label htmlFor="cPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password *</label>
                        {!showCPassword ? <div
                            className="absolute duration-300 transform  top-1 right-0 z-10 origin-[0] bg-[url('/show.png')] w-5 h-5 bg-center bg-contain bg-no-repeat hover:cursor-pointer"
                            onClick={() => setShowCPassword(true)}
                        ></div>
                            :
                            <div
                                className="absolute duration-300 transform  top-1 right-0 z-10 origin-[0] bg-[url('/hide.png')] w-5 h-5 bg-center bg-contain bg-no-repeat hover:cursor-pointer"
                                onClick={() => setShowCPassword(false)}
                            ></div>}
                        {validateCPassword ? <p className="text-red-500 text-xs">Must confirm password</p> : null}
                        {cPassword.length > 0 && validateMatchingPassword ? <p className="text-red-500 text-xs">Passwords do not match</p> : null}
                    </div>
                    <div className="w-full">
                        {showServerError ? <p className="text-red-900 text-xs py-2 px-2 rounded bg-red-200 mb-3">{serverError}</p> : null}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="text-white bg-primary hover:bg-secondary focus:outline-none w-full px-5 py-2.5 text-center rounded"
                        >
                            Submit
                        </button>
                        <p className='text-sm pt-4 text-center'>Already have an account? <span className='text-secondary underline'>
                            <Link to={'/login'}>
                                Login
                            </Link>
                        </span></p>
                    </div>

                </form>
            </div>
        </>
    )
}

export default signUp



