import SiteLayout from "../../components/SiteLayout";
import React from 'react';
import dynamic from 'next/dynamic';
const Viewer = dynamic(() => import('../resume/viewer.js'), {ssr: false});

export default function Resume({ resume }) {
  return (  
    <div>
      <Viewer />
    </div> 
  );
}
