import Profile from "../../Users/Profile";
import Signup from "../../Users/Signup";
import UserTable from "../../Users/Table";
import Signin from "../../Users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin/Users" element={<UserTable />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
