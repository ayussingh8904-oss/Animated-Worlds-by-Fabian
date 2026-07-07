import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='w-full bg-[#c8c7ff] px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-2xl md:p-10'>
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>Send us a message</h2>
          <p className='mt-3 text-base text-gray-600'>Tell us about your project and we’ll get back to you soon.</p>
        </div>

        <form onSubmit={handleSubmit} className='grid gap-6 md:grid-cols-2'>
          <div className='md:col-span-2'>
            <label className='mb-2 block text-sm font-semibold text-gray-700' htmlFor='name'>Name</label>
            <input
              id='name'
              name='name'
              type='text'
              required
              value={formData.name}
              onChange={handleChange}
              className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-200'
              placeholder='Your name'
            />
          </div>

          <div className='md:col-span-2'>
            <label className='mb-2 block text-sm font-semibold text-gray-700' htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              required
              value={formData.email}
              onChange={handleChange}
              className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-200'
              placeholder='Your email'
            />
          </div>

          <div className='md:col-span-2'>
            <label className='mb-2 block text-sm font-semibold text-gray-700' htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              rows='5'
              required
              value={formData.message}
              onChange={handleChange}
              className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-200'
              placeholder='Write your message here...'
            />
          </div>

          <div className='md:col-span-2 flex flex-col items-start gap-3'>
            <button
              type='submit'
              className='rounded-full bg-red-800 px-6 py-3 font-semibold text-white transition hover:bg-red-900'
            >
              Send Message
            </button>
            {submitted && <p className='text-sm text-green-600'>Thanks! Your message has been received.</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form