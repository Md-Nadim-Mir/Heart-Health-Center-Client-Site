
import logo from '../../../public/logo.png'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const Footer = () => {

    return (

        <div className='lg:pb-10'>

            <footer className="footer font-semibold p-10 bg-base-200 text-base-content">
                <aside>
                    <img className='h-[15vh] ' src={logo} alt="" />
                    <h1>Contact:   01779-198286 , 01840-098800</h1>
                    <h1>Email: info@heart-health-center.com</h1>

                </aside>
                <nav className='pt-6'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Specialized Doctor Appointment</a>
                    <a className="link link-hover">Pathological Lab Test Support</a>
                    <a className="link link-hover">Hospital Admission Suport</a>
                    <a className="link link-hover">Emergency Ambulance Service</a>
                    <a className="link link-hover">Emergency Blood Service</a>
                </nav>
                <nav className='pt-6'>
                    <header className="footer-title">Follow Us</header>

                    
                    <div className='flex items-center gap-2'>
                        <FaFacebookF className=' text-blue-900 text-2xl'></FaFacebookF>
                        <a className="link link-hover">Facebook</a>
                    </div>

                    <div className='flex items-center gap-2'>
                        <FaTwitter className=' text-[#2ccaca] text-2xl'></FaTwitter>
                        <a className="link link-hover">Twitter</a>
                    </div>

                    <div className='flex items-center gap-2'>
                        
                        <FaLinkedin className=' text-[#0091ff] text-2xl'></FaLinkedin>

                        <a className="link link-hover">Linkdin</a>
                    </div>


                    <div className='flex items-center gap-2'>
                        
                        <FaInstagram className=' text-[#9c2348] text-2xl'></FaInstagram>

                        <a className="link link-hover">Instragram</a>
                    </div>


                    
                    <div className='flex items-center gap-2'>
                        
                        <FaYoutube className=' text-[red] text-2xl'></FaYoutube>

                       
                        <a className="link link-hover">Youtube</a>

                    </div>

                    
                  
                  

                </nav>
                <nav className='pt-6'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a href="">
                        <FaThumbsUp className='text-red text-6xl font-bold animate-bounce'></FaThumbsUp>
                    </a>
                </nav>
            </footer>

            <footer className="footer font-bold footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Heart Healt Center</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;