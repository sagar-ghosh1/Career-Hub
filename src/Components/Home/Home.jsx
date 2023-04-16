import React, { useEffect, useState } from 'react';
import './Home.css'
import img from '../../../public/assets/All-Images/man.png'
import { Link, useLoaderData } from 'react-router-dom';
import Categories from './Categories/Categories';
import Products from './Categories/Products/Products';

const Home = () => {
    // home path dataLoad
     const productList = useLoaderData();

     // see all button useState
     const [showAll,setShowAll] = useState(false);
     const seeAllData = () =>{
        setShowAll(true);
     } 

     // categories
    const [category, setCategory] = useState([])
    useEffect( () =>{
        fetch('Categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, []);

    return (
  <>
        {/* Hero section start */}
        <section className="lg:pt-10 lg:pb-10 pb-0 bg-[#f9f9ff] px-3">
            <div className='max-w-[1140px] mx-auto gap-5 flex lg:flex-row flex-col justify-between'>
                <div className="hero-content lg:w-1/2 w-full">
                   <h1>One Step Closer To Your <span className="diff-color">Dream Job</span></h1>
                   <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                   <Link to=""><button className='btn-start'>Get Started</button></Link>
                </div>
                <div className="hero-image lg:w-1/2 w-full lg:pt-0 pt-10">
                    <img src={img} alt="" className="w-full" />
                </div>
            </div>
        </section>
 
         {/* Category section start */}
        <section className="lg:py-24 py-10 lg:px-0 px-3">
           <div className='max-w-[1140px] mx-auto'>
               <h2 className='font-semibold text-[#1A1919] leading-9 text-4xl mb-5 text-center'>Job Category List</h2>
               <p className='font-medium text-[#757575] text-base mb-[32px] text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
               <div className='grid grid-cols-1 lg:grid-cols-4 items-center justify-between gap-5'>
                    {
                        category.map((item) => <Categories 
                            item={item} 
                            key={item.png}
                        ></Categories>)
                    }
               </div>
           </div>
        </section>

        {/* Features job section start */}
        <section className="lg:py-24 py-10 lg:px-0 px-3">
           <div className='max-w-[1140px] mx-auto'>
               <h2 className='font-semibold text-[#1A1919] leading-9 text-4xl mb-5 text-center'>Featured Jobs</h2>
               <p className='font-medium text-[#757575] text-base mb-[32px] text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
               <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-5'>
                  {
                     productList.slice(0 , showAll ? 6 : 4).map((product) =>
                     <Products product={product} key={product.id}></Products>)
                  }
               </div>
               {
                !showAll && <div className='text-center mt-10' onClick={seeAllData}>
                    <button className='btn-more'>See All Jobs</button>
                 </div>
               }
           </div>
        </section>
  </>
        
    );
};

export default Home;



    // const handleAddToDb = (jobs) =>{
    //     addToDb(jobs.id);
    // }