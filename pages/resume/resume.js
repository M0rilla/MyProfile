import SiteLayout from "../../components/SiteLayout";
import { Document } from "react-pdf";
import resumePDF from "../resume/resumePDF";

export default function Skills({ skills }) {
  return (
    <SiteLayout>
      <div>
        <Document file={resumePDF}></Document>
      </div>
      <div className="divide-y divide-gray-100"></div>
    </SiteLayout>
  );
}
