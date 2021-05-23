import SiteLayout from "../../components/SiteLayout";
import Image from "next/image";

export default function Skills({ skills }) {
  return (
    <SiteLayout>
      <div className="w-screen main">
      <div className="flex items-center justify-center">
            <div className="page-container">
              <div className="text-center m-14">
                Programming Languages, Frameworks and Tools
                <div className="m-6">
                  <Image
                    className="images rounded-full"
                    src="/html.png"
                    alt="HTML 5"
                    title="HTML (Structure)"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images rounded-full"
                    src="/css.png"
                    alt="CSS 3"
                    title="CSS (Structure)"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images rounded-full"
                    src="/js.png"
                    alt="Javascript"
                    title="Javascript"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images rounded-full"
                    src="/JQuery-01.jpg"
                    alt="JQuery"
                    title="Jquery"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images"
                    src="/c.png"
                    alt="CSharp"
                    title="CSharp"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images"
                    src="/git.png"
                    alt="Git"
                    title="Git"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images"
                    src="/mvc.png"
                    alt=".NET MVC"
                    title=".NET MVC"
                    width={210}
                    height={200}
                  />
                  <Image
                    className="images"
                    src="/next-js.svg"
                    alt="Next.js"
                    title="Next.js"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images rounded-full"
                    src="/npm.png"
                    alt="NPM"
                    title="Node Package Manager"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images"
                    src="/bootstrap-4.svg"
                    alt="Bootstrap"
                    title="Bootstrap"
                    width={180}
                    height={200}
                  />
                  <Image
                    className="images"
                    src="/tailwindcss.svg"
                    alt="Tailwind"
                    title="Tailwind"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images"
                    src="/oracle-logo-1.svg"
                    alt="Oracle"
                    title="Oracle DB"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="images rounded-full"
                    src="/mysql.png"
                    alt="MySQL"
                    title="MySQL"
                    width={220}
                    height={220}
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
