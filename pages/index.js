import SiteLayout from "../components/SiteLayout";
import Image from "next/image";
import getConfig from "next/config";
// import { motion, useMotionValue } from 'framer-motion';
import homeStyles from "../styles/home.module.scss";

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log(serverRuntimeConfig.mySecret);
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder);

const Index = () => (
  <SiteLayout>
    <div>
      {/* <motion.div className={`flex mb-4 ${homeStyles.homeImage}`}> */}
      <div>
        {/* <div className="rounded-lg shadow-lg w-full flex flex-row flex-wrap p-3 antialiased"> */}
        <div className={`${homeStyles.homeImage}`}>
          <div className="grid grid-cols-3">
            <div className={`${homeStyles.profilePicture}`}>
              <Image
                src={`${publicRuntimeConfig.staticFolder}/img1.png`}
                alt="Picture of the author"
                width={300}
                height={400}
                borderRadius={50}
              />
              </div>
              <div className="col-span-2">
                <h1 className="text-center">
                  <span className="block text-xl text-gray-600 leading-tight">
                    Welcome to my website!
                  </span>
                </h1>              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center">
      <button className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6 py-4 leading-tight">
        Leave a Like!
      </button>
    </div>
  </SiteLayout>
);

export default Index;
