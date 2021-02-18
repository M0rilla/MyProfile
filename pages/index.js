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
        <div className="bg-home bg-auto rounded-lg">          
          <div className="flex items-center justify-center m-4 rounded-lg py-8">
            <Image
              className="rounded-full m-5"
              src={`${publicRuntimeConfig.staticFolder}/img1.png`}
              alt="Picture of the author"
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <div className="rounded-lg bg-black bg-opacity-80">
            <h1 className="text-center">
              <span className="text-xl text-white">Welcome to my website!</span>
            </h1>
          </div>         
        </div>
      </div>
    </section>
    <div className="mt-12 text-center">
      <button className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6 py-4 leading-tight">
        Leave a Like!
      </button>
    </div>
  </SiteLayout>
);

export default Index;
