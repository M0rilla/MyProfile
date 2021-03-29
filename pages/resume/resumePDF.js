import React, { useRef, useEffect } from 'react';
import App from 'next/app'
import WebViewer from "@pdftron/webviewer";
import '../css/tailwind.css'
import '../styles/style.css'

function App() {
  const viewerDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    WebViewer({ path: 'lib',
     initialDoc: 'https://pdftron.s3.amazonaws.com/downloads.pl/webviewer-demo.pdf' 
  }, viewerDiv.current as HTMLDivElement).then(instance => {

  });
  }, []);

  return (
    <div className="App">
      <div className="webviewer" ref={viewerDiv}></div>
    </div>
  );
}

export default App