import logo from './logo.svg';
import "react-datepicker/dist/react-datepicker.css";
import 'react-international-phone/style.css';
import 'bootstrap/dist/css/bootstrap.css';


import router from './Routes';
import './App.css';
import { RouterProvider } from 'react-router-dom';
// support react-pdf 
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;



function App() {
  


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
