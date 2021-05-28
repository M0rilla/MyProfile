import React, { useRef, useEffect } from "react";
// import WebViewer from "@pdftron/webviewer";

const Viewer = () => {
  const viewer = useRef(null);

  useEffect(async () => {   
    const WebViewer = await import("@pdftron/webviewer");
    WebViewer(
      {
        path: '/lib',
        initialDoc: "/pdf/GustavoMorilla.pdf",
      },
      viewer.current
    ).then(function (instance) {
      instance.setTheme("dark");
    });
  }, []);

  return (
    <div>      
        <div className="Viewer">  
        <div className="header flex justify-between">          
          <a>Resume</a>
          <a className="text-sm">You can download the file on "Settings" button</a>         
        </div>    
        <div className="Webviewer" ref={viewer}></div>
      </div>
    </div>
  );
};

export default Viewer;
