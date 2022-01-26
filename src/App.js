import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import AddBlog from "./Pages/DashBoard/AddBlog/AddBlog";
import AddReview from "./Pages/DashBoard/AddReview/AddReview";
import AdminManagement from "./Pages/DashBoard/AdminManagement/AdminManagement";
import DashboardHome from "./Pages/DashBoard/DashboardHome/DashboardHome";
import ManageAllOrder from "./Pages/DashBoard/ManageAllOrder/ManageAllOrder";
import ManageOrder from "./Pages/DashBoard/ManageOrder/ManageOrder";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PlaceDetailsHome from "./Pages/PlaceDetails/PlaceDetailsHome/PlaceDetailsHome";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardHome />}>
          <Route index={true} element={<ManageOrder />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="manageAllOrder" element={<ManageAllOrder />} />
          <Route path="adminManagement" element={<AdminManagement />} />
        </Route>
        <Route
          path="/placeDetails/:id"
          element={
            <PrivetRoute>
              <PlaceDetailsHome />
            </PrivetRoute>
          }
        />
      </Routes>
    </ContextProvider>
  );
}

export default App;
