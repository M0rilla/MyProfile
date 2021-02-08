import SiteLayout from "../components/SiteLayout";
import Link from "next/link";
import Image from "next/image";
import getConfig from 'next/config'


// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log(serverRuntimeConfig.mySecret)
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.staticFolder)

const Index = () => (
  <SiteLayout>   
    
    <div className="mt-8 max-w-xl mx-auto px-8">
    <div>
      <Image
        src={`${publicRuntimeConfig.staticFolder}/img1.png`}
        alt="Picture of the author"
        width={490}
        height={640}
      />
    </div>
      <h1 className="text-center">
        <span className="block text-xl text-gray-600 leading-tight">
          Welcome to
        </span>
        <span className="block text-5xl font-bold leading-none">
          Gustavo Morilla
        </span>
        <span className="block text-xl text-gray-600 leading-tight">
          Profile
        </span>
      </h1>
      <div className="mt-12 text-center">
        <Link href="/account-settings/basic-information">
          <a className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6 py-4 leading-tight">
            account settings
          </a>
        </Link>
      </div>
    </div>
  </SiteLayout>
);

export default Index;
