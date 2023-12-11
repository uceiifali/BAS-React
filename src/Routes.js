
import { createBrowserRouter } from 'react-router-dom';
import { useContext, lazy, Suspense } from 'react';

import NavBar from './Components/Client/Landing/NavBar';
import Loading from './Components/Loading';
import SystemSignIn from "./Pages/System/Auth/SignIn/SystemSignIn"
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import 'react-international-phone/style.css';
import SystemIndex from './Pages/System/index/SystemIndex';
import AllUsersChart from './Pages/System/Users/AllUsersChart/AllUsersChart';
import { CountriesChart } from './Pages/System/Users/AllUsersChart/CountriesChart';
import CountryChart from './Pages/System/Users/AllUsersChart/CountryChart';
import { AllRequestsCharts } from './Pages/System/Requests/AllRequestsChart/AllRequestsCharts';
import AllRequests from './Pages/System/Requests/AllRequests/AllRequests';
import SystemUsers from './Pages/System/Users/UserDetails/SystemUsers'
import DesignRequest from './Pages/System/Requests/DesignRequest/DesignRequest';
import DesignCasesRequest from './Pages/System/Requests/DesignRequest/DesignCasesRequest/DesignCasesRequest';
import ReviewRequest from './Pages/System/Requests/ReviewRequest.jsx/ReviewRequest';
import ReviewCasesRequest from './Pages/System/Requests/ReviewRequest.jsx/ReviewCasesRquest/ReviewCasesRequest';
import AllCLients from './Pages/System/Clients/AllClients/AllCLients';
import AllClientsChart from './Pages/System/Clients/AllClientsChart/AllClientsChart';
import InsideClients from './Pages/System/Clients/InsideClients/InsideClients';
import OutSideClients from './Pages/System/Clients/OutSideClients/OutSideClients';
import ClientDetails from './Pages/System/Clients/ClientDetails/ClientDetails';
import Home from "./Pages/index"
import AllMeetings from './Pages/System/Meetings/AllMeetings/AllMeetings';


import AllProjects from './Pages/System/Projects/AllProjects/AllProjects';
import AllProjectsChart from './Pages/System/Projects/AllProjectsChart/AllProjectsChart';
import MainProjects from './Pages/System/Projects/MainProjects/MainProjects';
import NestedMainProjects from './Pages/System/Projects/MainProjects/NestedMainProjects';
import { MainSystem } from './Pages/System/Main/MainSystem';
import AccountaingIndex from './Pages/System/Accountaing/AccountaingIndex/AccountaingIndex';
import Treasury from './Pages/System/Accountaing/Treasury/Treasury';
import Revenues from './Pages/System/Accountaing/Revenues/Revenues';

import Invoice from './Pages/System/Accountaing/Invoice/Invoice';
import Expenses from './Pages/System/Accountaing/Expenses/Expenses';
import ExpensesDetails from './Pages/System/Accountaing/Expenses/ExpensesDetails/ExpensesDetails';
import RevenusDetails from './Pages/System/Accountaing/Revenues/RevenusDetails/RevenusDetails';
import HrIndex from './Pages/System/Hr/HrIndex/HrIndex';
import AllEmployees from './Pages/System/Hr/AllEmployees/AllEmployees';
import HolidayMangment from './Pages/System/Hr/HolidayMangment/HolidayMangment';
import EmployeesServices from './Pages/System/Hr/EmployeesServices/EmployeesServices';
import MainEmployees from './Pages/System/Hr/MainEmployees/MainEmployees';
import EmployeesManagment from './Pages/System/Hr/EmployeesManagment/EmployeesManagment';






const SignUP = lazy(() => import("./Pages/DashBoard/SignUP/SignUP"))
const SignIn = lazy(() => import("./Pages/DashBoard/SignIn/SignIn"))

const ConfirmWithCode = lazy(() => import("./Pages/DashBoard/ConfirmWithCode/ConfirmWithCode"))
const ForgetPassword = lazy(() => import("./Pages/DashBoard/ForgetPassword/ForgetPassword"))

const router = createBrowserRouter([


    {
        path: "/",
        element: <Home />
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
            // system index (main)  
            { path: "/System/index", element: <MainSystem /> },
            { path: "/System/index/:deprtmentType", element: <MainSystem /> },
            //system  users
            { path: "/System/users", element: <SystemUsers /> },
            {
                path: "", element: <AllUsersChart />, children: [
                    { path: "/System/Users/index", element: <CountriesChart /> },
                    { path: "/System/AllUsers/Country/:CountryName", element: <CountryChart /> },

                ]
            },
            // system Requests
            {
                path: "", element: <AllRequests />, children: [
                    { path: "/System/Requests/index", element: <Suspense fallback={<Loading />} > <AllRequestsCharts /> </Suspense> },
                    {
                        path: "System/Requests/Design", element: <DesignRequest />,
                    },
                    { path: "System/Requests/Design/:DesignProjectType", element: <DesignCasesRequest /> },
                    {
                        path: "System/Requests/Review", element: <ReviewRequest />,
                    },
                    { path: "System/Requests/Review/:ReviewProjectType", element: <ReviewCasesRequest /> },


                ]
            },
            // System Clients 
            {
                path: "", element: <AllCLients />, children: [

                    { path: "/System/Clients/index", element: <AllClientsChart /> },
                    { path: "/System/Clients/Inside", element: <InsideClients /> },
                    { path: "/System/Clients/Inside/Design", element: <InsideClients /> },
                    { path: "/System/Clients/Inside/Review", element: <InsideClients /> },
                    { path: "/System/Clients/Outside", element: <OutSideClients /> },
                    { path: "/System/Clients/Outside/Design", element: <OutSideClients /> },
                    { path: "/System/Clients/Outside/Review", element: <OutSideClients /> },
                    { path: "/System/ClintDetails/:id", element: <ClientDetails /> }

                ]
            },
            // System Meetings 
            { path: "/System/Meetings/index", element: <AllMeetings /> },
            // System Projects
            {
                path: "", element: <AllProjects />, children: [
                    { path: "/System/Projects/index", element: <AllProjectsChart /> },
                    { path: "/System/Projects/Main/:ProjectTime", element: <MainProjects /> },
                    { path: "/System/Projects/Main/:ProjectTime/:ProjectType", element: <NestedMainProjects /> },


                ]
            },
            // System Accounating
            {
                path: "", element: <AccountaingIndex />, children: [
                    { path: "/System/Accounating/index", element: <Treasury /> },
                    { path: "/System/Accounating/Revenues", element: <Revenues /> },
                    { path: "/System/Accounating/Revenues/:RevenueType", element: <RevenusDetails /> },
                    { path: "/System/Accounating/Expenses", element: <Expenses /> },
                    { path: "/System/Accounating/Expenses/:ExpensesType", element: <ExpensesDetails /> },

                ]
            },
            // System Hr 
            {
                path: "", element: <HrIndex />, children: [
                    { path: "/System/Hr/index", element: <MainEmployees /> },
                    
                    { path: "/System/Hr/EmployeesManagment", element: <EmployeesManagment /> },
                    { path: "/System/Hr/Employees/:CountryName", element: <AllEmployees /> },
                    { path: "/System/Hr/HolidayMangment", element: <HolidayMangment /> },
                    { path: "/System/Hr/EmployeesServices", element: <EmployeesServices /> },


                ]
            },






            ,

        ]
    },






]);
export default router