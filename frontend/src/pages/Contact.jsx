import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>
          Contact Us
          <p className=' mb-8 lg:mb-16 font-light text-center text__para'>
            Got A technical issue? Qant to send feedback about a beta feature? Let us know.
          </p>
          <form action="#" className='space-y-8'>
            <div>
              <label htmlFor="email" className='form__label'>
                Your Email
              </label>
              <input 
              type="email"
              id='email'
              placeholder='example@gmail.com'
              className='form__input mt-1' />
            </div>
          </form>
        </h2>
      </div>
    </section>
  )
}

export default Contact