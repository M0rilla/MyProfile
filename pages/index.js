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
    <section>
      <div>
        <div className="block home-bgstyle bg-home bg-auto rounded-lg grid grid-cols-3">
          <div className="rounded-lg h-auto my-6 mx-6">
            <Image
              className="rounded-full object-none object-center"
              src={`${publicRuntimeConfig.staticFolder}/img1.png`}
              alt="Picture of the author"
              width={325}
              height={475}
              quality={100}
            />
            <div className="">
              <span className="text-xl text-white">Piracicaba, São Paulo</span>
              <br />
              <span className="text-xl text-white">24 years</span>
            </div>
          </div>
          <div className="rounded-lg col-span-2 m-6">
            <div className="home-textbody bg-black text-white">
              <h1 className="text-center">
                <span className="text-xl text-white">
                  Welcome to my website!
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6 py-4 leading-tight">
          Leave a Like!
        </button>
      </div>
    </section>
  </SiteLayout>
);

export default Index;
