import React from 'react';
import './Footer.css';
import icon from'../../../public/assets/Icons/Group 9969.png';

const Footer = () => {
    return (
        <footer className='bg-[#1A1919] lg:py-[130px] py-16 lg:px-0 px-5'>
           <div className='max-w-[1140px] mx-auto'>
              <div className='flex flex-col lg:flex-row gap-6 mb-16'>
                <div className="footer-part lg:w-[36%] w-full">
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={icon} alt="" className='block mx-auto mb-6' />
                </div>

                <div className="footer-part lg:w-[16%] w-full">
                    <h3 className='text-center lg:text-left'>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div className="footer-part lg:w-[16%] w-full">
                    <h3 className='text-center lg:text-left'>Product</h3>
                    <ul>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div className="footer-part lg:w-[16%] w-full">
                    <h3 className='text-center lg:text-left'>Support</h3>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul> 
                </div>

                <div className="footer-part lg:w-[16%] w-full">
                    <h3 className='text-center lg:text-left'>Contact</h3>
                    <ul>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
              </div>
              <hr className='mb-16' />
              <div className='flex justify-between items-center flex-col lg:flex-row'>
                 <div className="copyRight">
                    <p>@2023 CareerHub. All Rights Reserved</p>
                 </div>
                 <div className="copyRight">
                    <p>Powered by CareerHub</p>
                 </div>
              </div>
          </div>  

        </footer>
    );
};

export default Footer;