import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserStructure from './LayoutNav/UserStructure'
import Home from './pages/User/Home/Home'
import AllProjectPage from './pages/User/AllProjectPage/AllProjectPage'
import ConnectWalletPage from './pages/User/ConnectWalletPage/ConnectWalletPage'
import ViewProjectPage from './pages/User/ViewProjectPage/ViewProjectPage'
import ApplyPage from './pages/User/ApplyPage/ApplyPage'
// -------------------ADMIN-----------------------------//
import AdminStructureNav from './LayoutNav/AdminStructureNav'
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin'
import AdminAuthentication from './ProtectorRoute/AdminAuthentication'
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard'
import PendingPage from './pages/Admin/PendingPage/PendingPage'
import ApprovedPage from './pages/Admin/ApprovedPage/ApprovedPage'
import FinalPage from './pages/Admin/FinalPage/FinalPage'
import OngoingPage from './pages/Admin/OngoingPage/OngoingPage'
import EndedProjectPage from './pages/Admin/EndedProjectPage/EndedProjectPage'
import RejectedPage from './pages/Admin/RejectedPage/RejectedPage'
import UpdateProjectPage from './pages/Admin/UpdateProjectPage/UpdateProjectPage'
import ErrorPage from  './pages/ErrorPage/ErrorPage'
import './App.css'
import EditProject from './pages/Admin/EditProjectPage/EditProjectPage';
import AddPartnersPage from './pages/Admin/AddPartnersPage/AddPartnersPage';
import EditForm from "./components/EditForm/EditForm";
import AboutPage from './pages/User/AboutPage/AboutPage';
import SupportServicePage from "./pages/User/SupportServicePage/SupportServicePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserStructure />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<AllProjectPage />} />
          <Route path="/ConnectWallets" element={<ConnectWalletPage />} />
          <Route path="/viewProject" element={<ViewProjectPage />} />
          <Route path="/Apply" element={<ApplyPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Support-Service" element={<SupportServicePage />} />
        </Route>

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminAuthentication />}>
          <Route path="/admin" element={<AdminStructureNav />}>
            <Route index element={<AdminDashboard />} />
            <Route path="pending" element={<PendingPage />} />
            <Route path="approved" element={<ApprovedPage />} />
            <Route path="final" element={<FinalPage />} />
            <Route path="progrssing" element={<OngoingPage />} />
            <Route path="ended" element={<EndedProjectPage />} />
            <Route path="rejected" element={<RejectedPage />} />
            <Route path="updateProject" element={<UpdateProjectPage />} />
            <Route path="editProject" element={<EditProject />} />
            <Route path="addPartner" element={<AddPartnersPage />} />
            <Route path="editform" element={<EditForm />} />
          </Route>
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
