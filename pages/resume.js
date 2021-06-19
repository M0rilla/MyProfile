import SiteLayout from "../components/SiteLayout";
import React from "react";
import dynamic from "next/dynamic";
import { FaDownload } from "react-icons/fa";

const Viewer = dynamic(() => import("../components/viewer.js"), { ssr: false });

export default function Resume({ resume }) {
  return (
    <div>
      <SiteLayout>
        <div className="main w-screen">
          <div className="flex align-center justify-center">
            <a className="download" href="/pdf/GustavoMorilla-Curriculo.pdf"
              download><FaDownload className="mr-2" />Download</a>
          </div>
          <Viewer />
        </div>
      </SiteLayout>
    </div>
  );
}

