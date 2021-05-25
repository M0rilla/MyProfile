import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from './Nav'

const SiteLayout = ({ children }) => {
  const router = useRouter();

return (
  <div>
    <div className="bg-white mx-auto">
      <div className="head">
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
              <a className="font-bold leading-none">
                GUSTAVO MORILLA
              </a>
            </Link>
          </h1>          
          <h1 className="text-center">
            <span className="text-xl text-gray-600 ">
              IT Support Analyst | Developer Jr
            </span>
          </h1>              
        </div>  
      </div>                                      
    </div>
    <Nav></Nav>
    <div className="flex">{children}</div>
      <footer className="footer bg-white">
        <div className="container mx-auto px-6">
          <div className="mt-16 mb-10 border-t-2 border-black flex flex-col items-center">
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
