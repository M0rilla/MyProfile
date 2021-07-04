import SiteLayout from "../components/SiteLayout";
import Image from "next/image";

export default function Skills({ skills }) {
  return (
    <SiteLayout>
      <div className="w-screen main">
      <div className="flex items-center justify-center">
            <div className="skills">
              <div className="text-center mt-8">
                Programming Languages, Frameworks and Tools
                <div className="m-14">
                  <Image
                    className="images rounded-full"
                    src="/html.png"
                    alt="HTML 5"
                    title="HTML (Structure)"
                    width={130}
                    height={140}
                  />
                  <Image
                    className="images rounded-full"
                    src="/css.png"
                    alt="CSS 3"
                    title="CSS (Structure)"
                    width={130}
                    height={140}
                  />
                  <Image
                    className="images rounded-full"
                    src="/js.jpg"
                    alt="Javascript"
                    title="Javascript"
                    width={130}
                    height={140}
                  />
                  <Image
                    className="images rounded-full shadow-inner"
                    src="/JQuery-01.jpg"
                    alt="JQuery"
                    title="Jquery"
                    width={130}
                    height={130}
                  />
                  <Image
                    className="images"
                    src="/c.png"
                    alt="CSharp"
                    title="CSharp"
                    width={130}
                    height={130}
                  />
                  <Image
                    className="images"
                    src="/mvc.jpg"
                    alt=".NET MVC"
                    title=".NET MVC"
                    width={130}
                    height={130}
                  />   
                  <Image
                    className="images"
                    src="/reactjs.svg"
                    alt="React"
                    title="React"
                    width={130}
                    height={130}
                  />
                  <Image
                    className="images"
                    src="/next-js.svg"
                    alt="Next.js"
                    title="Next.js"
                    width={130}
                    height={130}
                  />                  
                  <Image
                    className="images"
                    src="/github.svg"
                    alt="GitHub"
                    title="GitHub"
                    width={130}
                    height={130}
                  />      
                  <Image
                    className="images"
                    src="/git.jpg"
                    alt="Git"
                    title="Git"
                    width={130}
                    height={130}
                  />                           
                  <Image
                    className="images rounded-full"
                    src="/npm.png"
                    alt="NPM"
                    title="Node Package Manager"
                    width={130}
                    height={140}
                  />
                  <Image
                    className="images"
                    src="/bootstrap-4.svg"
                    alt="Bootstrap"
                    title="Bootstrap"
                    width={130}
                    height={130}
                  />
                  <Image
                    className="images"
                    src="/tailwindcss.svg"
                    alt="Tailwind"
                    title="Tailwind"
                    width={130}
                    height={140}
                  />
                  <Image
                    className="images"
                    src="/oracle-logo-1.svg"
                    alt="Oracle"
                    title="Oracle DB"
                    width={130}
                    height={140}
                  />
                  <Image
                    className="images rounded-full"
                    src="/mysql.png"
                    alt="MySQL"
                    title="MySQL"
                    width={130}
                    height={140}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
      <div className="divide-y divide-gray-100"></div>
    </SiteLayout>
  );
}
