import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

const Viewer = (props) => {
  const viewer = useRef(null);

  useEffect(() => {       
    WebViewer({
      path: "/lib",
      initialDoc: "/pdf/GustavoMorilla.pdf"
    }, viewer.current);
  }, []);

  return (
    <div className="Viewer">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default Viewer;
