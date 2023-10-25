import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import StepContext from './Context/StepContext'
import CheckAddUpdateUserVisability from './Context/CheckAddUpdateUserVisability';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <CheckAddUpdateUserVisability>
      <StepContext>
        <App />
        <ToastContainer />
      </StepContext>
    </CheckAddUpdateUserVisability >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
