import SiteLayout from "../../components/SiteLayout";
import Image from "next/image";

export default function Experiences({ skills }) {
  return (
    <SiteLayout>
      <section className="w-screen">
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
                src="/career.jpg"
                alt="Career"
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          Programming Languages, Frameworks and Software Tools
          <div className="m-6">
            <Image
              className="exp-img"
              src="/career.jpg"
              alt="Career"
              width={250}
              height={200}
            />
            <Image
              className="exp-img"
              src="/career.jpg"
              alt="Career"
              width={250}
              height={200}
            />
            <Image
              className="exp-img"
              src="/career.jpg"
              alt="Career"
              width={250}
              height={200}
            />
            <Image
              className="exp-img"
              src="/career.jpg"
              alt="Career"
              width={250}
              height={200}
            />
            <Image
              className="exp-img"
              src="/career.jpg"
              alt="Career"
              width={250}
              height={200}
            />
            <Image
              className="exp-img"
              src="/career.jpg"
              alt="Career"
              width={250}
              height={200}
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
