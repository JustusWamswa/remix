import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendMessage } from '../services/api'


function FAQ() {

    // states
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [validateFirstName, setValidateFirstName] = useState(false)
    const [validateLastName, setValidateLastName] = useState(false)
    const [validateEmail, setValidateEmail] = useState(false)
    const [validateMessage, setValidateMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [toast, setToast] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // validate form input
        !firstName ? setValidateFirstName(true) : setValidateFirstName(false)
        !email ? setValidateEmail(true) : setValidateEmail(false)
        !lastName ? setValidateLastName(true) : setValidateLastName(false)
        !message ? setValidateMessage(true) : setValidateMessage(false)

        const newMessageData = { firstName: firstName, lastName: lastName, email: email, phone: phone, message: message }

        // if all required fields are filled
        if (firstName && lastName && email && message) {
            setIsLoading(true)
            // send message
            sendMessage(newMessageData)
                .then((response) => {
                    if (response.status == 200) {
                        // show toast
                        setToast(true)
                        setTimeout(() => {
                            setToast(false)
                            // reset form
                            setFirstName("")
                            setLastName("")
                            setEmail("")
                            setPhone("")
                            setMessage("")
                        }, 4000)
                        setIsLoading(false)
                    } else {
                        setIsLoading(false)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <div className='flex h-screen pt-20 mb-20 mt-12'>
            <div className='w-1/2 h-[80vh] pl-5'>
                <div className="">
                    <h1 className='text-secondary text-lg font-medium pl-5 pb-5'>Q & A</h1>
                    <ul className='m-0 pl-10 list-disc'>
                        <li>Eligibility criteria - must have graduated from Remix College </li>
                        <li>Annual membership fee - 12 USD</li>
                        <li>Register using the ‘Join’ or ‘Register’ buttons provided</li>
                        <li>Membership approved upon confirmation of details  </li>
                        <li>Enjoy the benefits of being a member of Remix</li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='text-secondary text-lg font-medium pl-5 py-5'>REACH OUT</h1>
                    <form method="post" className="pt-1 px-5">
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
                                <input value={email} onChange={e => setEmail(e.target.value)} cols="30" rows="4" type='email' name="email" id="email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email *</label>
                                {validateEmail ? <p className="text-red-500 text-xs">Email is required</p> : null}
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phoneNumber" id="phoneNumber" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " />
                                <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea value={message} onChange={e => setMessage(e.target.value)} cols="30" rows="2" type='text' name="message" id="message" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your message *</label>
                            {validateMessage ? <p className="text-red-500 text-xs">Message is required</p> : null}
                        </div>


                        <div className="w-full">
                            {isLoading ?
                                <button
                                    type="button"
                                    className="text-white bg-gray-400 focus:outline-none w-full px-5 py-2.5 text-center"
                                >
                                    Sending...
                                </button>
                                :
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="text-white bg-primary hover:bg-secondary focus:outline-none w-full px-5 py-2.5 text-center"
                                >
                                    Submit
                                </button>
                            }

                        </div>
                        {toast ? <div id="toast" className="fixed flex items-center justify-center w-11/12 sm:w-full mx-auto max-w-2xl p-4 space-x-4 text-white bg-gray-800 rounded shadow right-3 md:right-5 top-16 z-50 space-x" role="alert">
                            <div className="bg-[url('/checked.png')] w-5 h-5 bg-center bg-contain bg-no-repeat"></div>
                            <div className="text-sm font-normal">Hello <span>{firstName}</span>, your message has been received. We will get back to you within 3 working days.</div>
                        </div> : null}

                    </form>

                </div>
            </div>
            <div className='w-1/2 pt-52 text-center border-l-2 border-black'>
                <div className='font-extrabold text-7xl'>
                    <h1>FAQs</h1>
                </div>
                <p className='w-5/6 mx-auto text-center pt-8 leading-6 tracking-wide'>
                    These are some of the frequently asked questions. Feel free to contact us at <span className='text-secondary underline'>remix@info.org</span> or fill in
                    the provided form for further queries. We will get back to you in no time. .
                </p>
            </div>
        </div>
    )
}

export default FAQ