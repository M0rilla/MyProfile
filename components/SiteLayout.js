import NavItem from "../components/NavItem.js";
import Nav from "./Nav.js";
import Link from 'next/link';

const SiteLayout = ({ children }) => (
  <div className="mt-8 max-w-7xl mx-auto px-8">
    <div>
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
            </Nav>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6 sm:mt-0 sm:py-6">{children}</div>
  </div>
);

export default SiteLayout;
