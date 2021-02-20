import SiteLayout from "../components/SiteLayout";
import Image from "next/image";
import getConfig from "next/config";

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log(serverRuntimeConfig.mySecret);
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder);

const Index = () => (
  <SiteLayout>
    <section className="container mx-auto mb-20">
      <div className="flex items-center justify-center my-6">
        <div className="flex home-bgstyle bg-home bg-auto rounded-lg grid grid-cols-2">
          <div className="rounded-lg h-auto my-6 mx-6">
            <Image
              className="rounded-full object-none object-center"
              src={`${publicRuntimeConfig.staticFolder}/img1.png`}
              alt="Picture of the author"
              width={300}
              height={420}
              quality={100}
            />
            <div className="block text-center m-4 home-textbg rounded-full shadow-2xl">
              <span className="text-xl text-white">Piracicaba - SP</span> 
                          
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg m-6 ">
            <div className="home-contactbg rounded-10 shadow-2xl text-white">
              <h1 className="text-center">
                <span className="text-xl text-white">
                  Welcome!
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-gray-900 text-white font-medium rounded-lg px-6 py-4 leading-tight">
          Leave a Like!
        </button>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
