import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

const Viewer = (props) => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/lib",
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
