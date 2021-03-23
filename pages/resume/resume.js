import SiteLayout from "../../components/SiteLayout";
import { Document, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Skills({ skills }) {
  return (
    <SiteLayout>
       <Document file="/Gustavo Morilla -Curriculo.pdf"          
       />
      <div className="divide-y divide-gray-100"></div>
    </SiteLayout>
  );
}
