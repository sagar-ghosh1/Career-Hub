import React from 'react';
import './ViewDetails.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import img3 from "../../../public/assets/Icons/Frame.png";
import img4 from "../../../public/assets/Icons/Frame-1.png";
import img5 from "../../../public/assets/Icons/Frame-2.png";
import img6 from "../../../public/assets/Icons/Frame-3.png";
import img7 from "../../../public/assets/Icons/Frame-4.png";
import { addToDb } from '../../utilities/FakeDb';

const ViewDetails = () => {
    const ViewDetail = useLoaderData();
    const {nam} = useParams();

    const jobDetail = ViewDetail.find(jobFound => jobFound.id === nam)

    const {id ,Job_Description, Job_Responsibility, Educational_Requirements, Experiences, Salary, Job_name, Phone, Email, Address} = jobDetail;

    // data can store in LocalStorage
    const handleDataStore = (jobDetail) =>{
        // console.log(jobDetail.id)
        addToDb(jobDetail.id)
    }

    return (
    <>  
        <section className='title'>
              <h1>Job Details</h1>
         </section>

        <section className='py-16'>
            <div className="max-w-[1140px] mx-auto gap-5 flex">
                <div className="description w-[70%]">
                  <p className='text-[16px] text-[#757575] leading-8 mb-6'><span className='font-extrabold text-[#1A1919]'>Job Description:</span> {Job_Description}</p>
                  <p className='text-[16px] text-[#757575] leading-8 mb-6'><span className='font-extrabold text-[#1A1919]'>Job Responsibility:</span> {Job_Responsibility}</p>
                  <span className='block mb-4 font-extrabold text-[#1A1919]'>Educational Requirements:</span>
                  <p className='text-[16px] text-[#757575] leading-8 mb-6'>{Educational_Requirements}</p>
                  <span className='block mb-4 font-extrabold text-[#1A1919]'>Experiences:</span>
                  <p className='text-[16px] text-[#757575] leading-8'>{Experiences}</p>
                </div>

              <div className='w-[30%]'>
                <div className="contact-details mb-6">
                   <span className='block mb-4 font-extrabold text-[#1A1919]'>Job Details</span>
                   <hr />
                   <div className='my-7'>
                       <div className='flex items-center mb-3'>
                          <img src={img3} alt="" className='mr-2' /> 
                          <p className='text-[16px] text-[#757575]'><span className='font-extrabold text-[#1A1919]'>Salary: </span>{Salary} (Per Month)</p>
                       </div>
                       <div className='flex items-center'>
                          <img src={img4} alt="" className='mr-2' /> 
                          <p className='text-[16px] text-[#757575]'><span className='font-extrabold text-[#1A1919]'>Job Title : </span>{Job_name}</p>
                       </div>
                   </div>
                   <span className='block mb-4 font-extrabold text-[#1A1919]'>Contact Information</span>
                   <hr />
                   <div className='my-7'>
                       <div className='flex items-center mb-4'>
                          <img src={img5} alt="" className='mr-2' /> 
                          <p className='text-[16px] text-[#757575]'><span className='font-extrabold text-[#1A1919]'>Salary: </span>{Phone}</p>
                       </div>
                       <div className='flex items-center mb-4'>
                          <img src={img6} alt="" className='mr-2' /> 
                          <p className='text-[16px] text-[#757575]'><span className='font-extrabold text-[#1A1919]'>Job Title : </span>{Email}</p>
                       </div>
                       <div className='flex items-center'>
                          <img src={img7} alt="" className='mr-2' /> 
                          <p className='text-[16px] text-[#757575]'><span className='font-extrabold text-[#1A1919]'>Job Title : </span>{Address}</p>
                       </div>
                   </div>
                </div>
                <Link to={`/applying-job`}><button onClick={() => handleDataStore(jobDetail)} className='btn-applyJob'>Apply Now</button></Link>
              </div>
            </div>
        </section>
    </>
    );
};

export default ViewDetails;