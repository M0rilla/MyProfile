import SiteLayout from "../components/SiteLayout";
import Image from "next/image";

import { FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp } from "react-icons/fa";

const Index = () => (
  <SiteLayout>
    <section className="w-screen home-color main">
      <div className="flex items-center justify-center">
        <div className="flex home-bgstyle bg-home rounded-lg page-content">
          <div className="rounded-lg photo">            
            <Image
              className="rounded-full photo"              
              src = "/Profile.jpg"
              alt="Picture of the author"
              width={220}
              height={220}    
              quality={100}        
            />
            <div className="text-white text-center rounded-lg w-32 h-12 p-1 m-1">
              <p className="text-sm">Piracicaba - SP</p>
              <a className="text-sm"> 24 years</a>
            </div>
          </div>
          <div className="rounded-lg text-center">
            <div className="home-textbg rounded-lg shadow-2xl text-white">
             <p>"The greatest act of kindness is to be able to somehow improve people's lives".</p>
               <br />
             <p>I'm currently looking for job opportunities related to development and technology.</p>                       
            
             <br />
             <p>Thanks for your visit!</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg m-2 col-span-2">
            <div className="social-media">
              <button id="LinkedIn">
                <FaLinkedin /> <a href="https://linkedin.com/in/gustavo-morilla" className="ml-1">LinkedIn</a>
              </button>
              <button id="Email">
                <FaEnvelope /> <a className="ml-1" href="mailto:gu_morilla@hotmail.com">Email</a>
              </button>
              <button id="GitHub">
                <FaGithub /> <a href="https://github.com/M0rilla"className="ml-1">GitHub</a>
              </button>                      
              <button id="Whatsapp">
                <FaWhatsapp /><a href="https://api.whatsapp.com/send?phone=551999189187&text=Ol%C3%A1%2C%20encontrei%20seu%20contato%20atrav%C3%A9s%20de%20seu%20site!" className="ml-1">WhatsApp</a>
              </button>
            </div>
          </div>
        </div>
      </div>      
      {/* <div className="text-center">
        <button className="bg-gray-900 text-white font-small rounded-lg px-4 py-4 m-6 leading-tight">
          Leave a Like!
        </button>
        <br />
        <br />
      </div> */}
    </section>
  </SiteLayout>
);

export default Index;
