import SiteLayout from "../../components/SiteLayout";

export default function Experiences({ skills }) {
  return (
    <SiteLayout>
      <section className="flex items-center justify-center m-6">
        <div className="grid grid-cols-2">
          <div>Image</div>
          <div>Carrer experience</div>
          <div>Development Experience</div>
          <div>Image</div>
          Programming Languages, Frameworks and Software Tools
        </div>
      </section>
    </SiteLayout>
  );
}
