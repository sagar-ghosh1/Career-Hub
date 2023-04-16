import React from 'react';
import './AllJobs.css';
import img11 from '../../../../public/assets/Icons/Frame.png'
import img12 from '../../../../public/assets/Icons/Frame-4.png'
import { Link } from 'react-router-dom';

const Alljobs = ({ itemOfJob }) => {
    const {id ,image, Job_name, company, Job1, Job2, Salary, Location} = itemOfJob;
    return (
        <div className='mb-8'>
           <div className="max-w-[1140px] mx-auto">
               <div className='job-details p-8 flex justify-between items-center gap-6'>

                  <div className="w-[80%] flex gap-5">
                    <div className='image-div w-[30%] bg-[#F4F4F4] rounded-lg'>
                      <img src={image} alt="" className='block mx-auto' />
                    </div>

                       <div className="w-[70%] job-card">
                         <h2>{Job_name}</h2>
                         <h4>{company}</h4>
                           <div className='job-detail my-7'>
                              <span className='job-type'>{Job1}</span>
                              <span className='job-type'>{Job2}</span> 
                           </div>
                           <div className='flex flex-col lg:flex-row lg:items-center gap-y-2  text-[#757575]   font-semibold leading-6'>
                               <div className='flex items-center mr-6'>
                                  <img src={img12} alt="" className='mr-2' />
                                  <p>{Location}</p>
                               </div>
                                <div className='flex items-center'>
                                  <img src={img11} alt="" className='mr-2' />
                                  <p>Salary: {Salary}</p>
                               </div>
                          </div>
                      </div>
                  </div>

                  <div className='w-[20%] flex justify-end'>
                    <Link to={`/viewDetails/${id}`}><button className='btn-viewDetails'>View Details</button></Link>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Alljobs;