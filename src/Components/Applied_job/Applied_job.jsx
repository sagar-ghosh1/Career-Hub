import React, { useEffect, useState } from 'react';
import './Applied_job.css';
import { useLoaderData } from 'react-router-dom';
import { GetDataToDb } from '../../utilities/FakeDb';
import Alljobs from './AllJobs/Alljobs';

const Applied_job = () => {
    const jobApplied = useLoaderData();

    const [job, setJob] = useState(jobApplied);
    useEffect( () =>{
        const getData = GetDataToDb();
        let newArr = [];

        for(const id in getData){
            const FoundData = job.find(item => item.id === id)
            if(FoundData){
               newArr.push(FoundData);
            }
        }  
        setJob(newArr);
    }, []);

        const fullTimeJob = (jobType) =>{
            const onsiteJob = job.filter((jobType1) =>jobType1.Job1 === jobType)
            setJob(onsiteJob);
            // console.log(onsiteJob)
        }
        const fullTimeJobs = (jobType) =>{
            const onsiteJobs = job.filter((jobType1) =>jobType1.Job2 === jobType)
            setJob(onsiteJobs);
            // console.log(onsiteJobs)
        }


    return (
    <>
           <section className='title'>
              <h1>Applied Jobs</h1>
           </section>
            
              <div className='max-w-[1140px] mx-auto flex justify-end mt-12'>
                <button className='btn-clash' onClick={() => fullTimeJob("Onsite")}>FullTime Job</button>
                <button className='btn-clash ml-6' onClick={() => fullTimeJobs("Full Time")}>Remote</button>
              </div>

           <div className='py-24'>
              {
                job.map(itemOfJob => <Alljobs 
                    itemOfJob={itemOfJob} 
                    key={itemOfJob.id}
                ></Alljobs>)
             }
          </div>
  </>
    );
};

export default Applied_job;