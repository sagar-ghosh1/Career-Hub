import React from 'react';
import './Products.css'
import img1 from "../../../../../public/assets/Icons/Location-Icon.png";
import img2 from "../../../../../public/assets/Icons/Frame.png";
import { Link } from 'react-router-dom';

const Products = ({product}) => {
    const {id, Job_name, Location, Salary, company, image, Job1, Job2} = product;
    return (
        <div className='card-div'>
            <img src={image} alt="" className='img-size' />
            <h2>{Job_name}</h2>
            <h4>{company}</h4>
            <div className='job-detail my-7'>
               <span className='job-type'>{Job1}</span>
               <span className='job-type'>{Job2}</span> 
            </div>

            <div className='flex flex-col lg:flex-row lg:items-center gap-y-2 my-7 text-[#757575] font-semibold leading-6'>
                <div className='flex items-center mr-6'>
                   <img src={img1} alt="" className='mr-2' />
                   <p>{Location}</p>
                </div>
                <div className='flex items-center'>
                   <img src={img2} alt="" className='mr-2' />
                   <p>Salary: {Salary}</p>
                </div>
            </div>
            <Link to={`/viewDetails/${id}`}><button className='btn-view'>View Details</button></Link>
        </div>
    );
};

export default Products;