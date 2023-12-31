import React from 'react'
import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
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
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>education</h3>
    

        <ul className='pt-3 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate("09-13-2010")} - {formatDate("09-13-2016")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                New Apollo Hospital
                </p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate("12-04-2010")} - {formatDate("09-13-2016")}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    New Apollo Hospital
                </p>
            </li>
        </ul>
    </div>

    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate("12-04-2010")} - {formatDate("09-13-2016")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                    Sr. Surgeon
                </p>

                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    New Apollo HOspital, New York
                </p>

            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate("12-04-2010")} - {formatDate("09-13-2016")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                    Sr. Surgeon
                </p>

                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    New Apollo HOspital, New York
                </p>

            </li>

        </ul>
    </div>

</div>
  )
}

export default DoctorAbout