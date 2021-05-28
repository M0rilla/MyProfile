import SiteLayout from "../components/SiteLayout";
import React from "react";
import dynamic from "next/dynamic";
const Viewer = dynamic(() => import("../components/viewer.js"), { ssr: false });

export default function Resume({ resume }) {
  return (
    <div>
      <SiteLayout>    
      <div className="main w-screen">                         
          <Viewer />     
        </div>               
      </SiteLayout>
    </div>
  );
}

