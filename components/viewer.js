import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

const Viewer = () => {
  const viewer = useRef(null);

  useEffect(() => {     
      WebViewer(
      {
        path: '/lib',
        initialDoc: "/pdf/GustavoMorilla-Curriculo.pdf",
      },              
    viewer.current)
    .then(function (instance) {
      instance.setTheme("dark");
    });
  }, []);

  return (
    <div>      
        <div className="Viewer">  
        <div className="header flex justify-between">          
          <a>Resume</a>          
        </div>    
        <div className="Webviewer" ref={viewer}></div>
      </div>
    </div>
  );
};

export default Viewer;
