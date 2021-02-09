import Link from "next/link";

const SiteLayout = ({ children }) => (
  <div className="mt-8 max-w-7xl mx-auto px-8">
    <div>
      <div>
        <h1 className="text-center">
          <span className="block text-5xl font-bold leading-none">
            GUSTAVO MORILLA
          </span>
        </h1>
        <br />
        <h1 className="text-center">
          <span className="block text-xl text-gray-600">
            IT Support Analyst | Developer Fullstack Jr
          </span>
        </h1>
        <br />
        <div>
          <div className="max-w-xl mx-auto px-8">
            <nav>
              <div className="py-4 flex-shrink-0 flex items-center">
                {/* <img className="h-8 w-8" src="/logo.svg" alt="" /> */}
                <Link href="/">
                  <a className="ml-8 font-medium text-gray-900">Home</a>
                </Link>
                <Link href="/account-settings/basic-information">
                  <a className="ml-8 font-medium text-gray-900">
                    Account Settings
                  </a>
                </Link>
              </div>             
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>    
  </div>
);

export default SiteLayout;

// <div className="bg-white antialiased">
//   <div>
//     <div>
//       <div className="max-w-xl mx-auto px-8">
//         <nav>
//           <div className="py-4 flex-shrink-0 flex items-center">
//             <img className="h-8 w-8" src="/logo.svg" alt="" />
//             <Link href="/">
//               <a className="ml-8 font-medium text-gray-900">Home</a>
//             </Link>
//             <Link href="/account-settings/basic-information">
//               <a className="ml-8 font-medium text-gray-900">
//                 Account Settings
//               </a>
//             </Link>
//           </div>
//           <div className="mt-2">
//             <input
//               className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
//               placeholder="Search..."
//             />
//           </div>
//         </nav>
//       </div>
//     </div>
//   </div>
//   <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
// </div>
