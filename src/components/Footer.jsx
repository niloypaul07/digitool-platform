import React from 'react';
import socialIcon from "../assets/social-links.png";
const Footer = () => {
    return (
        <div>
            <footer className="footer text-white sm:footer-horizontal bg-[#101727] text-base-content p-10 ">

                <div>

                    <h1 className='text-3xl font-bold'>DigiTools</h1>
                    <p>Premium digital tools for creators,<br />professionals, and businesses. Work smarter<br /> with our suite of powerful tools.</p>

                </div>

                
    
  
  <nav>
    <h6 className="footer-title">Products</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <img src={socialIcon}/>

  </nav>  
  
</footer>
<div className="border-t border-[#e5e7eb]  px-10"></div>

<div className='flex flex-col md:flex-row justify-between items-center bg-[#101727] px-4 md:px-10 py-4 gap-3'>
    
    <div className="text-center md:text-left text-[#fafafa] text-[12px]">
        © 2026 DigiTools. All rights reserved.
    </div>

    <div className='flex flex-wrap justify-center md:justify-end items-center text-[#fafafa] gap-4 text-[12px]'>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Policy</p>
    </div>
    
</div>
  
  </div>






 
    );
};

export default Footer;