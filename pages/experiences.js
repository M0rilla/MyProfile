import SiteLayout from "../components/SiteLayout";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";

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
                <div className="text-left">
                  <div className="m-6">
                    <div className="flex justify-between">
                    <span className="font-bold">Development Experience</span>
                    <button id="GitHub" className="border-2 rounded-md hover:bg-blue-100">
                      <FaGithub /> <a href="https://github.com/M0rilla" className="ml-1">GitHub</a>
                    </button>  
                    </div>
                    <br />
                    <ul><li type="disc" className="mb-2">MES Daily Report</li></ul>
                    <span>
                      .NET MVC Web System developed with the purpose of replacing
                      Excel spreadsheets used for Daily Reports and checklists.
                      .Net MVC Project developed (fullstack) by me.
                      Hierarchy access control, record approval, control of equipment and its location,
                      user management and it is possible to export a pdf report.
                    </span>
                    <p className="mt-2">
                      Database - Oracle.<br />
                      Frontend - HTML, CSS, Javascript and JQuery.<br />
                      Backend - C#
                    </p>
                    <p className="mt-2">
                      Project with implementation in MES teams of 3 factories.
                      Hyundai Motors, Transys and Mobis
                    </p>
                  </div>
                  <hr></hr>
                  <div className="m-6">
                    <ul><li type="disc" className="mb-2">Profissional Profile</li></ul>
                    <span>
                      This Website! Developed with Next.js and Published by Vercel.
                      Responsive either on larger monitors or cell phones.
                    </span>
                  </div>
                  <hr></hr>
                  <div className="m-6">
                    <ul><li type="disc" className="mb-2">LetMeAsk</li></ul>
                    <span>
                      Project developed using React, Context API, TypeScript and Firebase.
                      <p className="mt-2">
                        LetMeAsk is perfect for content creators to create Q&amp;A rooms with their audience,
                        in a very organized, democratic way in REAL TIME.
                      </p>
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
