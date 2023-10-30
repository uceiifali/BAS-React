import logo from './logo.svg';
import "react-datepicker/dist/react-datepicker.css";
// import 'react-international-phone/style.css';
// import 'react-phone-number-input/style.css'
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './Components/Client/Landing/NavBar';

import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useContext, lazy, Suspense } from 'react';

import Loading from './Components/Loading';
import SystemSignIn from "././Pages/System/Auth/SignIn/SystemSignIn"

import 'react-international-phone/style.css';
import SystemIndex from './Pages/System/index/SystemIndex';
import AllUsersChart from './Pages/System/Users/AllUsersChart/AllUsersChart';
import { CountriesChart } from './Pages/System/Users/AllUsersChart/CountriesChart';
import CountryChart from './Pages/System/Users/AllUsersChart/CountryChart';
import { AllRequestsCharts } from './Pages/System/Requests/AllRequestsChart/AllRequestsCharts';






const Home = lazy(() => import("./Pages"))
const SignUP = lazy(() => import("././Pages/DashBoard/SignUP/SignUP"))
const SignIn = lazy(() => import("././Pages/DashBoard/SignIn/SignIn"))

const ConfirmWithCode = lazy(() => import("././Pages/DashBoard/ConfirmWithCode/ConfirmWithCode"))
const ForgetPassword = lazy(() => import("././Pages/DashBoard/ForgetPassword/ForgetPassword"))
const SystemUsers = lazy(() => import('./Pages/System/Users/UserDetails/SystemUsers'))
const AllRequests = lazy(() => import('./Pages/System/Requests/AllRequests/AllRequests'))
const PendingRequests = lazy(()=> import ("./Pages/System/Requests/PendingRequest/PendingRequest"))
const DesignRequest = lazy(()=> import ('./Pages/System/Requests/DesignRequest/DesignRequest'))
function App() {

  const router = createBrowserRouter([


    {
      path: "/",
      element: <Suspense fallback={<Loading />}> <Home /></Suspense>
    },

    {
      path: "/Dashboard/SignUP",
      element: <Suspense fallback={<Loading />}> <SignUP /></Suspense>
    }, {
      path: "/Dashboard/ConfirmWithCode",
      element: <Suspense fallback={<Loading />}> <ConfirmWithCode /></Suspense>

    },
    {
      path: "/Dashboard/ForgetPassword",
      element: <Suspense fallback={<Loading />}> <ForgetPassword /></Suspense>

    },
    {
      path: "/Dashboard/SignIn",
      element: <Suspense fallback={<Loading />}> <SignIn /></Suspense>
    },
    {
      path: "/System/SignIn",
      element: <SystemSignIn />

    },
    //system routes
    {
      path: "",
      element: < SystemIndex />,
      children: [
        //system  users
        { path: "/System/users", element: <Suspense fallback={<Loading />} > <SystemUsers /></Suspense> },
        // system charts
        {
          path: "", element: <AllUsersChart />, children: [
            { path: "/System/AllUsers/AllCountries", element: <CountriesChart /> },
            { path: "/System/AllUsers/Country/:CountryName", element: <CountryChart /> },

          ]
        },
        // system Requests
        {
          path: "", element: <Suspense fallback={<Loading />} > <AllRequests /></Suspense>, children: [
            { path: "/System/Requests/index", element: <Suspense fallback={<Loading />} > <AllRequestsCharts/> </Suspense> },
            { path: "System/Requests/pendingRequest", element: <Suspense fallback={<Loading />} > <PendingRequests /> </Suspense> },
            { path: "System/Requests/Design", element: <Suspense fallback={<Loading />} > <DesignRequest /> </Suspense> },

          ]
        },
     
      ]
    },






  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
