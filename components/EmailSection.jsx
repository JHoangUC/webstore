'use client'
import React, { useState } from 'react'
import InstagramIcon from '../public/instagram.svg'
import LinkedinIcon from '../public/tiktok-icon.png'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  		const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      // Your form submission logic here...

      // Assuming you are using fetch for the API call
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apikey: '6d440886-061e-4018-8df1-f1ad2e9a7c0d',
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      if (response.ok) {
        // Clear form fields after successful submission
        setFormData({
          email: '',
          subject: '',
          message: ''
        })

        alert('Form submitted successfully!')
      } else {
        alert('Error submitting the form')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <section
      id='contact'
      className='grid lg:grid-cols-2 md:grid-cols-1 my-12 md:my-12 lg:py-36 md:py-16 sm:py-28 lg:px-72 md:px-32'
    >
      <div className='z-10 '>
        <h5 className='md:text-xl sm:text-lg font-bold text-black my-2'>
          Let&apos;s Connect
        </h5>
        <p id='contactMessage' className='text-black text-lg mb-4 md:max-w-md hover:cursor-default'>
        Hey there! 👋
          <br /> Have any questions or special requests? 🎤 <br /> Feel free to
          shoot me a message here! 🌟 <br /> I&apos;m always open to suggestions
          or criticism 🎯
        </p>
        <div className='socials flex flex-row gap-2 '>
        <Link href='https://www.instagram.com/designsbykhoi/' target='_blank'>
            <Image
              className=' cursor-pointer'
              src={InstagramIcon}
              alt='Github Icon'
            />
            </Link>
          <Link
            href='https://www.linkedin.com/in/john-hoang-848a031a1/'
            target='_blank'
          >
            <Image src={LinkedinIcon} alt='Linkedin Icon' />
          </Link>
        </div>
      </div>
      <div>
        <form
          className='flex flex-col'
          action='https://api.web3forms.com/submit'
          method='POST'
          onSubmit={handleSubmit}
        >
          <input
            type='hidden'
            name='apikey'
            value='6d440886-061e-4018-8df1-f1ad2e9a7c0d'
          />
          <div className='mb-6 md:mt-9'>
            <label
              htmlFor='email'
              className='text-black block mb-2 text-sm font-medium'
            >
              Email:
            </label>
            <input
              name='email'
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='bg-gray-200 border placeholder-[#9CA2A9] rounded-lg text-black text-sm block w-full p-2.5'
              placeholder=''
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='subject'
              className='text-black block text-sm mb-2 font-medium'
            >
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              value={formData.subject}
              onChange={handleChange}
              required
              className='bg-gray-200 border placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5'
              placeholder=''
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-black block text-sm mb-2 font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows='10'
              value={formData.message}
              onChange={handleChange}
              className='bg-gray-200 border placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5'
              placeholder=''
            />
          </div>
          <button
            type='submit'
            className='bg-gray-400 hover:bg-gray-600 text-black font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
