import NavItem from "../components/NavItem.js";
import Nav from "./Nav.js";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const SiteLayout = ({ children }) => (
  <div className="mt-8 mx-auto">
    <div>
      <Head>
        <title>Gustavo Morilla - Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1 className="text-center">
          <Link href="/">
            <a className="block text-5xl font-bold leading-none">
              GUSTAVO MORILLA
            </a>
          </Link>
        </h1>
        <br />
        <h1 className="text-center">
          <span className="block text-xl text-gray-600 ">
            IT Support Analyst | Developer Fullstack Jr
          </span>
        </h1>
        <br />
        <div>
          <div className="max-w-xl mx-auto px-8">
            <Nav>
              <NavItem href="/" isActive>
                Home
              </NavItem>
              <NavItem href="/experiences/experiences">Experiences</NavItem>
              <NavItem href="/skills/skills">Skills</NavItem>
              <NavItem href="/courses/courses">
                Certifications & Courses
              </NavItem>
              <NavItem> Thanks! </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </div>
    <div className="flex">{children}</div>
    <footer className="footer bg-white">
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-black flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-4">
            <p className="text-sm text-black mb-2">
              © 2021 by Gustavo Morilla              
            </p>           
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default SiteLayout;
