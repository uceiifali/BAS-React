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
import NetWorkError from './Components/Errors/NetWorkError';
import  io  from 'socket.io-client';
import config from './Config/Config';
import { useEffect } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const socket = io.connect('http://bsa2011.com:5000');
function App() {
  useEffect(()=>{
    socket.on("hey",(message)=>{
      console.log("Hello From ",message);
    })
  })
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
