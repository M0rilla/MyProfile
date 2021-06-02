import SiteLayout from "../components/SiteLayout";
import Image from "next/image";

export default function Experiences({ skills }) {
  return (
    <SiteLayout>
      <section className="main">
        <div className="w-screen">
          <div className="flex items-center justify-center">
            <div className="page-content-exp">
            <div className="text-center">
                <Image
                  className="images"
                  src="/career.jpg"
                  alt="Career"
                  width={400}
                  height={300}                    
                />
              </div>
              <div className="text-justify">                
                <div className="m-6">                  
                  <p className="font-bold mb-4">Career Experience</p>                                 
                  <p>2018 - Current</p>
                  <p className="mb-4">MES Analyst, Hyundai AutoEver</p>
                  <span>
                    Responsible for solving server problems,
                    MES-related processes, applications, systems and devices.
                    Support to OPC, Scada and Daemon Servers.
                    <p className="mt-2">(Manufacturing Execution System).</p>
                  </span>                
                </div>
                <hr></hr>
                <div className="m-6"> 
                  <p>06/2017 – 10/2018</p>
                  <p className="mb-4"> IT Intern, Hyundai AutoEver</p>
                  <span>
                    Active Directory management, mapping of IP's released on the network via MAC,
                    Customer service, hardware and software troubleshooting,
                    inventory control and queue services based on ITIL.                   
                  </span>
                  <br /> 
                </div>
                <hr></hr>  
              </div>                                                  
            <div>              
              <div className="text-center">
                <Image
                  className="images"
                  src="/icon2.png"
                  alt="Career"
                  width={180}
                  height={150}
                />
              </div>   
            </div>
              <div>           
                <div className="text-justify">
                  <div className="m-6">
                    <p className="font-bold">Development Experience</p>
                    <br />
                    <ul><li type="disc" className="mb-2">MES Daily Report</li></ul>
                    <span>
                     .NET MVC Web System developed with the purpose of replacing
                     Excel spreadsheets.
                     Database structure (Oracle), Backend and Frontend developed by me.
                     Hierarchy access control, record approval, control of equipment and its location,
                     user management and it is possible to generate a pdf report.
                    </span>                 
                    <p className="mt-2">
                     Project with implementation in MES teams of 3 factories.
                      Hyundai Motors, Transys and Mobis
                    </p>                       
                  </div> 
                  <hr></hr> 
                  <div className="m-6">         
                  <ul><li type="disc" className="mb-2">Personal Profile</li></ul>
                    <span>
                      This Website! Developed with Next.js and Published by vercel.                    
                      Responsive either on larger monitors or cell phones.
                    </span>                 
                  </div> 
                </div>                
              </div>            
            </div>
          </div>         
        </div>
      </section>
    </SiteLayout>
  );
}
