import NavItem from "../components/NavItem.js";
import Nav from "./Nav.js";
import Link from 'next/link';
import Head from 'next/head'

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
              <NavItem href="/courses/courses">Certifications & Courses</NavItem>
              <NavItem> Thanks! </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </div>    
    <div className="flex">{children}</div>
  </div>
);

export default SiteLayout;
