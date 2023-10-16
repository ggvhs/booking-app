import React from 'react'

const Feedback = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semiBold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leaidng-9'>
                    Muhubur Rahman
                </span>
            </h3>
            <p className='text__para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium, sapiente accusantium quisquam laboriosam
                consequuntur fugiat quis, dolorum recusandae officiis optio, maxime saepe. Tenetur, voluptatibus minus soluta at eum
                quae laboriosam debitis obcaecati, labore iure officia, exercitationem tempore? 
                Suscipit laborum expedita perspiciatis? Nulla consectetur nisi ratione, praesentium dolorum atque distinctio!
            </p>
        </div>

        <div className='mt-12'>
            <h3>education</h3>
        </div>

        <ul className='pt-3 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        23 June, 2008
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    PHD in Surgeon
                </p>
            </li>
        </ul>
    </div>
  )
}

export default Feedback