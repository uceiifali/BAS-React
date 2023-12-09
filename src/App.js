import logo from './logo.svg';
import "react-datepicker/dist/react-datepicker.css";
import 'react-international-phone/style.css';
import 'bootstrap/dist/css/bootstrap.css';


import router from './Routes';
import './App.css';
import { RouterProvider } from 'react-router-dom';




function App() {




  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
