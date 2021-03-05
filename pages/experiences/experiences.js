import SiteLayout from "../../components/SiteLayout";
import Image from "next/image";

export default function Experiences({ skills }) {
  return (
    <SiteLayout>
      <section className="">
        <div className="flex items-center justify-center my-6">
          <div className="grid grid-cols-2">
            <div className="m-4">
              <Image
                className=""
                src="/career.jpg"
                alt="Career"
                width={400}
                height={250}
              />
            </div>
            <div className="text-center">
              <span>Career experience</span>
              <p>...</p>
            </div>
            <div className="text-center m-4">
              <span>Development Experience</span>
              <p>...</p>
            </div>
            <div className="text-center">
              <Image
                className="exp-img"
                src="/icon.png"
                alt="Career"
                width={350}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          Programming Languages, Frameworks and Tools
          <div className="m-6">
            <Image
              className="exp-img"
              src="/html.png"
              alt="HTML 5"   
              title="HTML (Structure)"           
              width={230}
              height={200}
            />
            <Image
              className="exp-img"
              src="/css.png"
              alt="CSS 3"   
              title="CSS (Structure)"           
              width={230}
              height={200}
            />
            <Image
              className="exp-img"
              src="/js.png"
              alt="Javascript"  
              title="Javascript"
              width={230}
              height={200}
            />
            <Image
              className="exp-img bg-gray-100 rounded-full m-30"
              src="/jquery-1.svg"
              alt="JQuery"  
              title="Jquery"
              width={180}
              height={180}
            />
            <Image
              className="exp-img"
              src="/c.png"
              alt="CSharp"
              title="CSharp"
              width={230}
              height={200}
            />
            <Image
              className="exp-img"
              src="/git.png"
              alt="Git"
              title="Git"
              width={230}
              height={200}
            />
            <Image
              className="exp-img"
              src="/mvc.png"
              alt=".NET MVC"
              title=".NET MVC"
              width={230}
              height={200}
            />
            <Image
              className="exp-img"
              src="/next-js.svg"
              alt="Next.js"
              title="Next.js"
              width={230}
              height={200}
            />
            <Image
              className="exp-img"
              src="/npm.png"
              alt="NPM"
              title="Node Package Manager"
              width={230}
              height={200}
            />
            <Image
              className="exp-img"
              src="/bootstrap-4.svg"
              alt="Bootstrap"
              title="Bootstrap"
              width={230}
              height={190}
            />
            <Image
              className="exp-img"
              src="/tailwindcss.svg"
              alt="Tailwind"
              title="Tailwind"
              width={250}
              height={200}
            />
            <Image
              className="exp-img"
              src="/oracle-logo-1.svg"
              alt="Oracle"
              title="Oracle DB"
              width={250}
              height={200}
            />
            <Image
              className="exp-img"
              src="/mysql-5.svg"
              alt="MySQL"
              title="MySQL"
              width={250}
              height={200}
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
