import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const SiteLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="mt-8 mx-auto">
      <div>
        <Head>
          <title>Gustavo Morilla - Profile</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
              IT Support Analyst | Developer Jr
            </span>
          </h1>
         <br />
        <div>
      </div>
    </div>
  <div className="">                      
      <nav className="nav bg-gray-900 text-white">
        <ul className="flex space-x-2 justify-center">                             
          <li className={router.pathname == "/" ? "active" : ""}>
            <a href="/" className="block px-4 py-2 rounded-md">Home</a>
          </li>
          <li className={router.pathname == "/experiences/experiences" ? "active" : ""}>
            <a href="/experiences/experiences" className="block px-4 py-2 rounded-md">Experiences</a></li>
          <li className={router.pathname == "/skills/skills" ? "active" : ""}>
            <a href="/skills/skills" className="block px-4 py-2 rounded-md">Skills</a>
            </li>
          <li className={router.pathname == "/resume/resume" ? "active" : ""}>
            <a href="/resume/resume" className="block px-4 py-2 rounded-md">Resume</a>
          </li>
          <li>
            <a className="block px-4 py-2 rounded-md">Soon...</a>
            </li>                                                           
        </ul>
      </nav>
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
};

export default SiteLayout;
