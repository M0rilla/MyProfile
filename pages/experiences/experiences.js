import SiteLayout from "../../components/SiteLayout";

export default function Experiences({ skills }) {
  return (
    <SiteLayout>
      <section className="w-screen">
        <div className="flex items-center justify-center my-6">
          <div className="grid grid-cols-2">
            <div className="text-center">Image</div>
            <div className="text-center">Carrer experience</div>
            <div className="text-center">Development Experience</div>
            <div className="text-center">Image</div>
          </div>
        </div>
        <div className="text-center">
          Programming Languages, Frameworks and Software Tools
        </div>
      </section>
    </SiteLayout>
  );
}
